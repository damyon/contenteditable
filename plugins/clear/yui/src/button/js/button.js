var CLEAR = function() {
    CLEAR.superclass.constructor.apply(this, arguments);
};

CLEAR.NAME = 'contenteditable_clear';
CLEAR.ATTRS = {};

Y.extend(CLEAR, Y.Base, {
    initializer : function(params) {
        var toolbar = Y.one('#' + params.elementid + '_toolbar');
        var button = Y.Node.create('<button class="contenteditable_clear_button" data-editor="' + params.elementid + '">' +
                                    params.icon +
                                    '</button>');

        toolbar.append(button);

        // We only need to attach this once.
        if (!M.contenteditable_clear.attached) {
            Y.one('body').delegate('click', this.click, '.contenteditable_clear_button');
            M.contenteditable_clear.attached = true;
        }
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
