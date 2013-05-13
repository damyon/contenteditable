var OUTDENT = function() {
    OUTDENT.superclass.constructor.apply(this, arguments);
};

OUTDENT.NAME = 'contenteditable_outdent';
OUTDENT.ATTRS = {};

Y.extend(OUTDENT, Y.Base, {
    initializer : function(params) {
        var toolbar = Y.one('#' + params.elementid + '_toolbar');
        var button = Y.Node.create('<button class="contenteditable_outdent_button" data-editor="' + params.elementid + '">' +
                                    params.icon +
                                    '</button>');

        toolbar.append(button);

        // We only need to attach this once.
        if (!M.contenteditable_outdent.attached) {
            Y.one('body').delegate('click', this.click, '.contenteditable_outdent_button');
            M.contenteditable_outdent.attached = true;
        }
    },

    click : function(e) {
        e.preventDefault();
        document.execCommand('outdent', false, null);
    }
});

M.contenteditable_outdent = M.contenteditable_outdent || {};
M.contenteditable_outdent.init = function(id, params) {
    return new OUTDENT(id, params);
};
