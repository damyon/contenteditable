<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * YUI text editor integration.
 *
 * @package    editor_contenteditable
 * @copyright  1999 onwards Martin Dougiamas  {@link http://moodle.com}
 * @author Damyon Wiese <damyon@moodle.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

class contenteditable_texteditor extends texteditor {

    /**
     * Is the current browser supported by this editor?
     *
     * Of course!
     * @return bool
     */
    public function supported_by_browser() {
        return true;
    }

    /**
     * Returns array of supported text formats.
     * @return array
     */
    public function get_supported_formats() {
        // FORMAT_MOODLE is not supported here, sorry.
        return array(FORMAT_HTML => FORMAT_HTML);
    }

    /**
     * Returns text format preferred by this editor.
     * @return int
     */
    public function get_preferred_format() {
        return FORMAT_HTML;
    }

    /**
     * Does this editor support picking from repositories?
     * @return bool
     */
    public function supports_repositories() {
        //Not yet
        return false;
    }

    /**
     * Sets up head code if necessary.
     */
    public function head_setup() {
        // Not required.
    }

    /**
     * Use this editor for give element.
     *
     * @param string $elementid
     * @param array $options
     * @param null $fpoptions
     */
    public function use_editor($elementid, array $options=null, $fpoptions=null) {
        global $PAGE, $CFG;
        $PAGE->requires->yui_module('moodle-editor_contenteditable-editor',
                                    'M.editor_contenteditable.init', 
                                    array($this->get_init_params($elementid, $options, $fpoptions)), true);

        $pluginman = plugin_manager::instance();
        $plugins = $pluginman->get_subplugins_of_plugin('editor_contenteditable');

        $sortedplugins = array();

        foreach ($plugins as $id => $plugin) {
            $sortorder = component_callback($plugin->type . '_' . $plugin->name, 'sort_order', array($elementid));
            $sortedplugins[$sortorder] = $plugin;
        }

        ksort($sortedplugins);
        foreach ($sortedplugins as $plugin) {
            component_callback($plugin->type . '_' . $plugin->name, 'init_editor', array($elementid));
        }


        // Note: use full moodle_url instance to prevent standard JS loader, make sure we are using https on profile page if required.
        /*
        if (debugging('', DEBUG_DEVELOPER)) {
            $PAGE->requires->js(new moodle_url($CFG->httpswwwroot.'/lib/editor/tinymce/tiny_mce/'.$this->version.'/tiny_mce_src.js'));
        } else {
            $PAGE->requires->js(new moodle_url($CFG->httpswwwroot.'/lib/editor/tinymce/tiny_mce/'.$this->version.'/tiny_mce.js'));
        }
        $PAGE->requires->js_init_call('M.editor_tinymce.init_editor', array($elementid, $this->get_init_params($elementid, $options)), true);
        $this->initialise_collapse_js();
        */
    }

    protected function get_init_params($elementid, array $options=null, array $fpoptions=null) {
        global $CFG, $PAGE, $OUTPUT;

        //TODO: we need to implement user preferences that affect the editor setup too

        $directionality = get_string('thisdirection', 'langconfig');
        $strtime        = get_string('strftimetime');
        $strdate        = get_string('strftimedaydate');
        $lang           = current_language();
        $contentcss     = $PAGE->theme->editor_css_url()->out(false);

        $context = empty($options['context']) ? context_system::instance() : $options['context'];
        $fontselectlist = empty($config->fontselectlist) ? '' : $config->fontselectlist;

        $langrev = -1;
        if (!empty($CFG->cachejs)) {
            $langrev = get_string_manager()->get_revision();
        }

        $params = array(
            'elementid' => $elementid,
            'content_css' => $contentcss,
            'language' => $lang,
            'directionality' => $directionality,
            'filepickeroptions' => array()
        );
        if ($fpoptions) {
            $params['filepickeroptions'] = $fpoptions;
        }
        return $params;
    }
}
