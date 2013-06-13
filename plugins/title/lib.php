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
 * Content editable text editor integration version file.
 *
 * @package    contenteditable_title
 * @copyright  1999 onwards Martin Dougiamas  {@link http://moodle.com}
 * @author Damyon Wiese <damyon@moodle.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

function contenteditable_title_init_editor($elementid) {
    global $PAGE, $OUTPUT;

    $icon = $OUTPUT->pix_icon('title', get_string('title', 'contenteditable_title'), 'contenteditable_title', array('class'=>'icon'));

    $PAGE->requires->strings_for_js(array('h1',
                                          'h2',
                                          'blockquote',
                                          'p'), 'contenteditable_title');
    $PAGE->requires->yui_module('moodle-contenteditable_title-button',
                                'M.contenteditable_title.init',
                                array(array('elementid'=>$elementid, 'icon'=>$icon)),
                                true);

}

function contenteditable_title_sort_order() {
    return 9;
}
