YUI.add('moodle-contenteditable_italic-button', function (Y, NAME) {

var ITALIC = function() {
    ITALIC.superclass.constructor.apply(this, arguments);
};

ITALIC.NAME = 'contenteditable_italic';
ITALIC.ATTRS = {};

Y.extend(ITALIC, Y.Base, {
    initializer : function(params) {
        M.editor_contenteditable.add_toolbar_button(params.elementid, 'italic', params.icon, this.click);
    },

    click : function(e) {
        e.preventDefault();
        document.execCommand('italic', false, null);
    }
});

M.contenteditable_italic = M.contenteditable_italic || {};
M.contenteditable_italic.init = function(id, params) {
    return new ITALIC(id, params);
};


}, '@VERSION@', {"requires": ["node"]});
