var INDENT = function() {
    INDENT.superclass.constructor.apply(this, arguments);
};

INDENT.NAME = 'contenteditable_indent';
INDENT.ATTRS = {};

Y.extend(INDENT, Y.Base, {
    initializer : function(params) {
        M.editor_contenteditable.add_toolbar_button(params.elementid, 'indent', params.icon, this.click);
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
