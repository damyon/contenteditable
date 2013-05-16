YUI.add('moodle-contenteditable_link-button', function (Y, NAME) {


var LINK = function() {
    LINK.superclass.constructor.apply(this, arguments);
};

LINK.NAME = 'contenteditable_link';
LINK.ATTRS = {};


Y.extend(LINK, Y.Base, {
    initializer : function(params) {
        M.editor_contenteditable.add_toolbar_button(params.elementid, 'link', params.icon, this.display_chooser);
    },

    get_form_content : function() {
        var content = Y.create('form');
        content.addChild(Y.create('fieldset'));
    },

    display_chooser : function(e) {
        e.preventDefault();
        var dialogue = new M.core.dialogue({
                visible: false,
                modal: true,
                close: true,
                draggable: true
        });
        dialogue.render();
        dialogue.set('bodyContent', this.get_form_content());

        dialogue.show();
    }


});

M.contenteditable_link = M.contenteditable_link || {};
M.contenteditable_link.init = function(id, params) {
    return new LINK(id, params);
};


}, '@VERSION@', {"requires": ["node"]});
