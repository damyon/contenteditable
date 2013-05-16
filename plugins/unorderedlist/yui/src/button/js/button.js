var UNORDEREDLIST = function() {
    UNORDEREDLIST.superclass.constructor.apply(this, arguments);
};

UNORDEREDLIST.NAME = 'contenteditable_unorderedlist';
UNORDEREDLIST.ATTRS = {};

Y.extend(UNORDEREDLIST, Y.Base, {
    initializer : function(params) {
        M.editor_contenteditable.add_toolbar_button(params.elementid, 'unorderedlist', params.icon, this.click);
    },

    click : function(e) {
        e.preventDefault();
        document.execCommand('insertUnorderedList', false, null);
    }
});

M.contenteditable_unorderedlist = M.contenteditable_unorderedlist || {};
M.contenteditable_unorderedlist.init = function(id, params) {
    return new UNORDEREDLIST(id, params);
};
