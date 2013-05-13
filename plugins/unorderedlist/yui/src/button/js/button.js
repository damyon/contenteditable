var UNORDEREDLIST = function() {
    UNORDEREDLIST.superclass.constructor.apply(this, arguments);
};

UNORDEREDLIST.NAME = 'contenteditable_unorderedlist';
UNORDEREDLIST.ATTRS = {};

Y.extend(UNORDEREDLIST, Y.Base, {
    initializer : function(params) {
        var toolbar = Y.one('#' + params.elementid + '_toolbar');
        var button = Y.Node.create('<button class="contenteditable_unorderedlist_button" data-editor="' + params.elementid + '">' +
                                    params.icon +
                                    '</button>');

        toolbar.append(button);

        // We only need to attach this once.
        if (!M.contenteditable_unorderedlist.attached) {
            Y.one('body').delegate('click', this.click, '.contenteditable_unorderedlist_button');
            M.contenteditable_unorderedlist.attached = true;
        }
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
