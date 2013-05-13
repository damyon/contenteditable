YUI.add('moodle-editor_contenteditable-editor', function (Y, NAME) {

var CONTENTEDITABLE = function() {
    CONTENTEDITABLE.superclass.constructor.apply(this, arguments);
};

CONTENTEDITABLE.NAME = 'editor_contenteditable';
CONTENTEDITABLE.ATTRS = {};

Y.extend(CONTENTEDITABLE, Y.Base, {

    initializer : function(params) {
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

    add_separator : function(params) {
        Y.log(params);
    }

});

M.editor_contenteditable = M.editor_contenteditable || {};
M.editor_contenteditable.init = function(id, params) {
    return new CONTENTEDITABLE(id, params);
};


}, '@VERSION@', {"requires": ["node", "io"]});
