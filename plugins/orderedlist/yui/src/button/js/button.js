var ORDEREDLIST = function() {
    ORDEREDLIST.superclass.constructor.apply(this, arguments);
};

ORDEREDLIST.NAME = 'contenteditable_orderedlist';
ORDEREDLIST.ATTRS = {};

Y.extend(ORDEREDLIST, Y.Base, {
    initializer : function(params) {
        M.editor_contenteditable.add_toolbar_button(params.elementid, 'orderedlist', params.icon, this.click);
    },

    click : function(e) {
        e.preventDefault();
        document.execCommand('insertOrderedList', false, null);
    }
});

M.contenteditable_orderedlist = M.contenteditable_orderedlist || {};
M.contenteditable_orderedlist.init = function(id, params) {
    return new ORDEREDLIST(id, params);
};
