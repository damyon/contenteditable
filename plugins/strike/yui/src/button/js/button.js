var STRIKE = function() {
    STRIKE.superclass.constructor.apply(this, arguments);
};

STRIKE.NAME = 'contenteditable_strike';
STRIKE.ATTRS = {};

Y.extend(STRIKE, Y.Base, {
    initializer : function(params) {
        var toolbar = Y.one('#' + params.elementid + '_toolbar');
        var button = Y.Node.create('<button class="contenteditable_strike_button" data-editor="' + params.elementid + '">' +
                                   params.icon +
                                   '</button>');

        toolbar.append(button);

        // We only need to attach this once.
        if (!M.contenteditable_strike.attached) {
            Y.one('body').delegate('click', this.click, '.contenteditable_strike_button');
            M.contenteditable_strike.attached = true;
        }
    },

    click : function(e) {
        e.preventDefault();
        document.execCommand('strikeThrough', false, null);
    }
});

M.contenteditable_strike = M.contenteditable_strike || {};
M.contenteditable_strike.init = function(id, params) {
    return new STRIKE(id, params);
};
