var ORDEREDLIST = function() {
    ORDEREDLIST.superclass.constructor.apply(this, arguments);
};

ORDEREDLIST.NAME = 'contenteditable_orderedlist';
ORDEREDLIST.ATTRS = {};

Y.extend(ORDEREDLIST, Y.Base, {
    initializer : function(params) {
        var toolbar = Y.one('#' + params.elementid + '_toolbar');
        var button = Y.Node.create('<button class="contenteditable_orderedlist_button" data-editor="' + params.elementid + '">' +
                                    params.icon +
                                    '</button>');

        toolbar.append(button);

        // We only need to attach this once.
        if (!M.contenteditable_orderedlist.attached) {
            Y.one('body').delegate('click', this.click, '.contenteditable_orderedlist_button');
            M.contenteditable_orderedlist.attached = true;
        }
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
