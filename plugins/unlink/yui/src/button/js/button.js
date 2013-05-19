var UNLINK = function() {
    UNLINK.superclass.constructor.apply(this, arguments);
};

UNLINK.NAME = 'contenteditable_unlink';
UNLINK.ATTRS = {};

Y.extend(UNLINK, Y.Base, {
    initializer : function(params) {
        M.editor_contenteditable.add_toolbar_button(params.elementid, 'unlink', params.icon, this.click);
    },

    click : function(e) {
        e.preventDefault();
        document.execCommand('unlink', false, null);
    }
});

M.contenteditable_unlink = M.contenteditable_unlink || {};
M.contenteditable_unlink.init = function(id, params) {
    return new UNLINK(id, params);
};
