YUI.add('moodle-contenteditable_bold-button', function (Y, NAME) {

var BOLD = function() {
    BOLD.superclass.constructor.apply(this, arguments);
};

BOLD.NAME = 'contenteditable_bold';
BOLD.ATTRS = {};

Y.extend(BOLD, Y.Base, {
    initializer : function(params) {
        M.editor_contenteditable.add_toolbar_button(params.elementid, 'bold', params.icon, this.click);
    },

    click : function(e) {
        e.preventDefault();
        document.execCommand('bold', false, null);
    }
});

M.contenteditable_bold = M.contenteditable_bold || {};
M.contenteditable_bold.init = function(id, params) {
    return new BOLD(id, params);
};


}, '@VERSION@', {"requires": ["node"]});
