var ITALIC = function() {
    ITALIC.superclass.constructor.apply(this, arguments);
};

ITALIC.NAME = 'contenteditable_italic';
ITALIC.ATTRS = {};

Y.extend(ITALIC, Y.Base, {
    initializer : function(params) {
        var toolbar = Y.one('#' + params.elementid + '_toolbar');
        var button = Y.Node.create('<button class="contenteditable_italic_button" data-editor="' + params.elementid + '">' +
                                    params.icon +
                                    '</button>');

        toolbar.append(button);

        // We only need to attach this once.
        if (!M.contenteditable_italic.attached) {
            Y.one('body').delegate('click', this.click, '.contenteditable_italic_button');
            M.contenteditable_italic.attached = true;
        }
    },

    click : function(e) {
        e.preventDefault();
        document.execCommand('italic', false, null);
    }
});

M.contenteditable_italic = M.contenteditable_italic || {};
M.contenteditable_italic.init = function(id, params) {
    return new ITALIC(id, params);
};
