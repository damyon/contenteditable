var UNDERLINE = function() {
    UNDERLINE.superclass.constructor.apply(this, arguments);
};

UNDERLINE.NAME = 'contenteditable_underline';
UNDERLINE.ATTRS = {};

Y.extend(UNDERLINE, Y.Base, {
    initializer : function(params) {
        var toolbar = Y.one('#' + params.elementid + '_toolbar');
        var button = Y.Node.create('<button class="contenteditable_underline_button" data-editor="' + params.elementid + '">' +
                                    params.icon +
                                    '</button>');

        toolbar.append(button);

        // We only need to attach this once.
        if (!M.contenteditable_underline.attached) {
            Y.one('body').delegate('click', this.click, '.contenteditable_underline_button');
            M.contenteditable_underline.attached = true;
        }
    },

    click : function(e) {
        e.preventDefault();
        document.execCommand('underline', false, null);
    }
});

M.contenteditable_underline = M.contenteditable_underline || {};
M.contenteditable_underline.init = function(id, params) {
    return new UNDERLINE(id, params);
};
