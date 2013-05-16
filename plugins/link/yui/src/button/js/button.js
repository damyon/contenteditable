
M.contenteditable_link = M.contenteditable_link || {
    dialogue : null,
    selection : null,
    init : function(params) {
        var display_chooser = function(e) {
            e.preventDefault();
            var dialogue = new M.core.dialogue({
                visible: false,
                modal: true,
                close: true,
                draggable: true
            });

            M.contenteditable_link.selection = M.editor_contenteditable.get_selection();
            dialogue.render();
            dialogue.set('bodyContent', M.contenteditable_link.get_form_content());
            dialogue.show();
            M.contenteditable_link.dialogue = dialogue;
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'link', params.icon, display_chooser, this);
    },
    set_link : function(e) {
        e.preventDefault();

        var input = e.currentTarget.get('parentNode').one('input');

        var value = input.get('value');
        if (value !== '') {
            M.editor_contenteditable.set_selection(M.contenteditable_link.selection);
            document.execCommand('createLink', false, value);
        }
        M.contenteditable_link.dialogue.hide();
    },
    get_form_content : function() {
        var content = Y.Node.create('<form>' +
                             '<label for="urlentry">' + M.util.get_string('url', 'contenteditable_link') +
                             '</label><br/>' +
                             '<input type="url" value="" id="urlentry" size="64"/>' +
                             '<button id="urlentrysubmit">' +
                             M.util.get_string('createlink', 'contenteditable_link') +
                             '</button>' +
                             '</form>');

        content.one('#urlentrysubmit').on('click', M.contenteditable_link.set_link);
        return content;
    }
};
