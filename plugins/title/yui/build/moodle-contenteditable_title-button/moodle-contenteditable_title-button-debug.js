YUI.add('moodle-contenteditable_title-button', function (Y, NAME) {

var TITLE = function() {
    TITLE.superclass.constructor.apply(this, arguments);
};

TITLE.NAME = 'contenteditable_title';
TITLE.ATTRS = {};

Y.extend(TITLE, Y.Base, {
    initializer : function(params) {
        M.editor_contenteditable.add_toolbar_button(params.elementid, 'title', params.icon, this.click);
    },

    click : function(e) {
        e.preventDefault();
        document.execCommand('formatBlock', false, '<h1>');
    }
});

M.contenteditable_title = M.contenteditable_title || {};
M.contenteditable_title.init = function(id, params) {
    return new TITLE(id, params);
};


}, '@VERSION@', {"requires": ["node"]});
