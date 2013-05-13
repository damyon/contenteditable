var TITLE = function() {
    TITLE.superclass.constructor.apply(this, arguments);
};

TITLE.NAME = 'contenteditable_title';
TITLE.ATTRS = {};

Y.extend(TITLE, Y.Base, {
    initializer : function(params) {
        var toolbar = Y.one('#' + params.elementid + '_toolbar');
        var button = Y.Node.create('<button class="contenteditable_title_button" data-editor="' + params.elementid + '">' +
                                    params.icon +
                                    '</button>');

        toolbar.append(button);

        // We only need to attach this once.
        if (!M.contenteditable_title.attached) {
            Y.one('body').delegate('click', this.click, '.contenteditable_title_button');
            M.contenteditable_title.attached = true;
        }
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
