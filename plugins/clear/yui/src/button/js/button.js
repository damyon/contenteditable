var CLEAR = function() {
    CLEAR.superclass.constructor.apply(this, arguments);
};

CLEAR.NAME = 'contenteditable_clear';
CLEAR.ATTRS = {};

Y.extend(CLEAR, Y.Base, {
    initializer : function(params) {
        M.editor_contenteditable.add_toolbar_button(params.elementid, 'clear', params.icon, this.click);
    },

    click : function(e) {
        e.preventDefault();
        document.execCommand('removeFormat', false);
    }
});

M.contenteditable_clear = M.contenteditable_clear || {};
M.contenteditable_clear.init = function(id, params) {
    return new CLEAR(id, params);
};
