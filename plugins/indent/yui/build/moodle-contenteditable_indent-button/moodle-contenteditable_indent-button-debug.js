YUI.add('moodle-contenteditable_indent-button', function (Y, NAME) {

var INDENT = function() {
    INDENT.superclass.constructor.apply(this, arguments);
};

INDENT.NAME = 'contenteditable_indent';
INDENT.ATTRS = {};

Y.extend(INDENT, Y.Base, {
    initializer : function(params) {
        var toolbar = Y.one('#' + params.elementid + '_toolbar');
        var button = Y.Node.create('<button class="contenteditable_indent_button" data-editor="' + params.elementid + '">' +
                                    params.icon +
                                    '</button>');

        toolbar.append(button);

        // We only need to attach this once.
        if (!M.contenteditable_indent.attached) {
            Y.one('body').delegate('click', this.click, '.contenteditable_indent_button');
            M.contenteditable_indent.attached = true;
        }
    },

    click : function(e) {
        e.preventDefault();
        document.execCommand('indent', false, null);
    }
});

M.contenteditable_indent = M.contenteditable_indent || {};
M.contenteditable_indent.init = function(id, params) {
    return new INDENT(id, params);
};


}, '@VERSION@', {"requires": ["node"]});
