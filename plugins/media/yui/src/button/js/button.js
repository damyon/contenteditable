M.contenteditable_media = M.contenteditable_media || {
    dialogue : null,
    selection : null,
    init : function(params) {
        var display_chooser = function(e) {
            var elementid = this.getAttribute('data-editor');
            e.preventDefault();
            M.contenteditable_media.selection = M.editor_contenteditable.get_selection();
            if (M.contenteditable_media.selection !== false) {
                var dialogue = new M.core.dialogue({
                    visible: false,
                    modal: true,
                    close: true,
                    draggable: true
                });

                dialogue.render();
                dialogue.set('bodyContent', M.contenteditable_media.get_form_content(elementid));
                dialogue.set('headerContent', M.util.get_string('createmedia', 'contenteditable_media'));
                dialogue.show();
                M.contenteditable_media.dialogue = dialogue;
            }
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'media', params.icon, display_chooser, this);
    },
    open_browser : function(e) {
        var elementid = this.getAttribute('data-editor');
        e.preventDefault();

        M.editor_contenteditable.show_filepicker(elementid, 'media', M.contenteditable_media.browser_callback);
    },
    browser_callback : function(params) {
        console.log(params);
        if (params.url !== '') {
            var input = Y.one('#urlentry');
            input.set('value', params.url);
            input = Y.one('#nameentry');
            input.set('value', params.file);
        }
    },
    set_media : function(e) {
        e.preventDefault();
        M.contenteditable_media.dialogue.hide();

        var input = e.currentTarget.get('parentNode').one('#urlentry');
        var url = input.get('value');
        input = e.currentTarget.get('parentNode').one('#nameentry');
        var name = input.get('value');

        if (url !== '' && name !== '') {
            M.editor_contenteditable.set_selection(M.contenteditable_media.selection);
            var mediahtml = '<a href="' + Y.Escape.html(url) + '">' + name + '</a>';

            if (document.selection && document.selection.createRange().pasteHTML) {
                document.selection.createRange().pasteHTML(mediahtml);
            } else {
                document.execCommand('insertHTML', false, mediahtml);
            }
        }
    },
    get_form_content : function(elementid) {
        var content = Y.Node.create('<form>' +
                             '<label for="urlentry">' + M.util.get_string('enterurl', 'contenteditable_media') +
                             '</label><br/>' +
                             '<input type="url" value="" id="urlentry" size="64"/>' +
                             '<label for="nameentry">' + M.util.get_string('entername', 'contenteditable_media') +
                             '</label><br/>' +
                             '<input type="text" value="" id="nameentry" size="64" required="true"/>' +
                             '<br/>' +
                             '<button id="urlentrysubmit">' +
                             M.util.get_string('createmedia', 'contenteditable_media') +
                             '</button>' +
                             '<hr/>' +
                             '<button id="openmediabrowser" data-editor="' + Y.Escape.html(elementid) + '">' +
                             M.util.get_string('browserepositories', 'contenteditable_media') +
                             '</button>' +
                             '</form>' +
                             '<hr/>' + M.util.get_string('accessibilityhint', 'contenteditable_media'));

        content.one('#urlentrysubmit').on('click', M.contenteditable_media.set_media);
        content.one('#openmediabrowser').on('click', M.contenteditable_media.open_browser);
        return content;
    }
};
