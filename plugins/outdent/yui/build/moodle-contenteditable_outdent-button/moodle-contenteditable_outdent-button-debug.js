YUI.add('moodle-contenteditable_outdent-button', function (Y, NAME) {

var OUTDENT = function() {
    OUTDENT.superclass.constructor.apply(this, arguments);
};

OUTDENT.NAME = 'contenteditable_outdent';
OUTDENT.ATTRS = {};

Y.extend(OUTDENT, Y.Base, {
    initializer : function(params) {
        M.editor_contenteditable.add_toolbar_button(params.elementid, 'outdent', params.icon, this.click);
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


}, '@VERSION@', {"requires": ["node"]});
