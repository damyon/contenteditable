var STRIKE = function() {
    STRIKE.superclass.constructor.apply(this, arguments);
};

STRIKE.NAME = 'contenteditable_strike';
STRIKE.ATTRS = {};

Y.extend(STRIKE, Y.Base, {
    initializer : function(params) {
        M.editor_contenteditable.add_toolbar_button(params.elementid, 'strike', params.icon, this.click);
    },

    click : function(e) {
        e.preventDefault();
        document.execCommand('strikeThrough', false, null);
    }
});

M.contenteditable_strike = M.contenteditable_strike || {};
M.contenteditable_strike.init = function(id, params) {
    return new STRIKE(id, params);
};
