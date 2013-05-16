YUI.add('moodle-editor_contenteditable-editor', function (Y, NAME) {

M.editor_contenteditable = M.editor_contenteditable || {
    /**
     * List of attached button handlers to prevent duplicates.
     */
    buttonhandlers : {},
    /**
     * Add a button to the toolbar belonging to the editor for element with id "elementid".
     * @param string elementid - the id of the textarea we created this editor from.
     * @param string plugin - the plugin defining the button
     * @param string icon - the html used for the content of the button
     * @handler function handler- A function to call when the button is clicked.
     */
    add_toolbar_button : function(elementid, plugin, icon, handler) {
        var toolbar = Y.one('#' + elementid + '_toolbar');
        var button = Y.Node.create('<button class="contenteditable_' + plugin + '_button" data-editor="' + elementid + '">' +
                                    icon +
                                    '</button>');

        toolbar.append(button);

        // We only need to attach this once.
        if (!M.editor_contenteditable.buttonhandlers[plugin]) {
            Y.one('body').delegate('click', handler, '.contenteditable_' + plugin + '_button');
            M.editor_contenteditable.buttonhandlers[plugin] = true;
        }
    },

    init : function(params) {
        var textarea = Y.one('#' +params.elementid);
        var contenteditable = Y.Node.create('<div id="' + params.elementid + 'editable" ' +
                                            'contenteditable="true" ' +
                                            'spellcheck="true" ' +
                                            'class="editor_contenteditable"/>');
        var cssfont = '';
        var toolbar = Y.Node.create('<div class="editor_contenteditable_toolbar" id="' + params.elementid + '_toolbar"/>');

        // bleh - why are we sent a url and not the css to apply directly
        var css = Y.io(params.content_css, { sync: true });
        var pos = css.responseText.indexOf('font:');
        if (pos) {
            cssfont = css.responseText.substring(pos + 'font:'.length, css.responseText.length - 1);
            contenteditable.setStyle('font', cssfont);
        }
        contenteditable.setStyle('min-height', (1.2 * (textarea.getAttribute('rows') - 1)) + 'em');

        // Copy text to editable div.
        contenteditable.append(textarea.get('value'));

        // Add the toolbar to the page.
        textarea.get('parentNode').insert(toolbar, textarea);
        // Add the editable div to the page.
        textarea.get('parentNode').insert(contenteditable, textarea);
        // Hide the old textarea.
        textarea.hide();

        // Copy the current value back to the textarea when focus leaves us.
        contenteditable.on('blur', function() {
            textarea.set('value', contenteditable.getHTML());
        });

    },

    get_selection : function() {
        var sel = window.getSelection();
        return sel.getRangeAt(0);
    },

    set_selection : function(selection) {
        var sel;

        sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(selection);
    }
};



}, '@VERSION@', {"requires": ["node", "io"]});
