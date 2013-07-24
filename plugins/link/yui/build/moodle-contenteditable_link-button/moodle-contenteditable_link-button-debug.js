YUI.add('moodle-contenteditable_link-button', function (Y, NAME) {


M.contenteditable_link = M.contenteditable_link || {
    dialogue : null,
    selection : null,
    init : function(params) {
        var display_chooser = function(e, elementid) {
            e.preventDefault();
            if (!M.editor_contenteditable.is_active(elementid)) {
                M.editor_contenteditable.focus(elementid);
            }
            M.contenteditable_link.selection = M.editor_contenteditable.get_selection();
            if (M.contenteditable_link.selection !== false && (M.contenteditable_link.selection + '') !== '') {
                var dialogue = new M.core.dialogue({
                    visible: false,
                    modal: true,
                    close: true,
                    draggable: true
                });

                dialogue.render();
                dialogue.set('bodyContent', M.contenteditable_link.get_form_content(elementid));
                dialogue.set('headerContent', M.util.get_string('createlink', 'contenteditable_link'));
                dialogue.show();
                M.contenteditable_link.dialogue = dialogue;
            }
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'link', params.icon, display_chooser, this);
    },
    open_browser : function(e) {
        var elementid = this.getAttribute('data-editor');
        e.preventDefault();

        M.editor_contenteditable.show_filepicker(elementid, 'link', M.contenteditable_link.browser_callback);
    },
    browser_callback : function(params) {
        M.contenteditable_link.dialogue.hide();
        if (params.url !== '') {
            M.editor_contenteditable.set_selection(M.contenteditable_link.selection);
            document.execCommand('createLink', false, params.url);
        }
    },
    set_link : function(e) {
        e.preventDefault();
        M.contenteditable_link.dialogue.hide();

        var input = e.currentTarget.get('parentNode').one('input');

        var value = input.get('value');
        if (value !== '') {
            M.editor_contenteditable.set_selection(M.contenteditable_link.selection);
            document.execCommand('createLink', false, value);
        }
    },
    get_form_content : function(elementid) {
        var content = Y.Node.create('<form>' +
                             '<label for="urlentry">' + M.util.get_string('enterurl', 'contenteditable_link') +
                             '</label><br/>' +
                             '<input type="url" value="" id="urlentry" size="64"/>' +
                             '<button id="openlinkbrowser" data-editor="' + Y.Escape.html(elementid) + '">' +
                             M.util.get_string('browserepositories', 'contenteditable_link') +
                             '</button>' +
                             '<hr/>' +
                             '<button id="urlentrysubmit">' +
                             M.util.get_string('createlink', 'contenteditable_link') +
                             '</button>' +
                             '</form>' +
                             '<hr/>' + M.util.get_string('accessibilityhint', 'contenteditable_link'));

        content.one('#urlentrysubmit').on('click', M.contenteditable_link.set_link);
        content.one('#openlinkbrowser').on('click', M.contenteditable_link.open_browser);
        return content;
    }
};


}, '@VERSION@', {"requires": ["node", "escape"]});
