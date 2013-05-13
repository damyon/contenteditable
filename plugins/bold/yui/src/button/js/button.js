var BOLD = function() {
    BOLD.superclass.constructor.apply(this, arguments);
};

BOLD.NAME = 'contenteditable_bold';
BOLD.ATTRS = {};

Y.extend(BOLD, Y.Base, {
    initializer : function(params) {
        var toolbar = Y.one('#' + params.elementid + '_toolbar');
        var button = Y.Node.create('<button class="contenteditable_bold_button" data-editor="' + params.elementid + '">' +
                                    params.icon +
                                    '</button>');

        toolbar.append(button);

        // We only need to attach this once.
        if (!M.contenteditable_bold.attached) {
            Y.one('body').delegate('click', this.click, '.contenteditable_bold_button');
            M.contenteditable_bold.attached = true;
        }
    },

    click : function(e) {
        e.preventDefault();
        document.execCommand('bold', false, null);
    }
});

M.contenteditable_bold = M.contenteditable_bold || {};
M.contenteditable_bold.init = function(id, params) {
    return new BOLD(id, params);
};
