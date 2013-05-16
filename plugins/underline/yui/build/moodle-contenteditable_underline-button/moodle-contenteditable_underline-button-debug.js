YUI.add('moodle-contenteditable_underline-button', function (Y, NAME) {

var UNDERLINE = function() {
    UNDERLINE.superclass.constructor.apply(this, arguments);
};

UNDERLINE.NAME = 'contenteditable_underline';
UNDERLINE.ATTRS = {};

Y.extend(UNDERLINE, Y.Base, {
    initializer : function(params) {
        M.editor_contenteditable.add_toolbar_button(params.elementid, 'underline', params.icon, this.click);
    },

    click : function(e) {
        e.preventDefault();
        document.execCommand('underline', false, null);
    }
});

M.contenteditable_underline = M.contenteditable_underline || {};
M.contenteditable_underline.init = function(id, params) {
    return new UNDERLINE(id, params);
};


}, '@VERSION@', {"requires": ["node"]});
