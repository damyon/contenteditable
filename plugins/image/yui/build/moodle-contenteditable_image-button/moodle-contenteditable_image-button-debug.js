YUI.add('moodle-contenteditable_image-button', function (Y, NAME) {

M.contenteditable_image = M.contenteditable_image || {
    dialogue : null,
    selection : null,
    init : function(params) {
        var display_chooser = function(e, elementid) {
            e.preventDefault();
            if (!M.editor_contenteditable.is_active(elementid)) {
                M.editor_contenteditable.focus(elementid);
            }
            M.contenteditable_image.selection = M.editor_contenteditable.get_selection();
            if (M.contenteditable_image.selection !== false) {
                var dialogue;
                if (!M.contenteditable_image.dialogue) {
                    dialogue = new M.core.dialogue({
                        visible: false,
                        modal: true,
                        close: true,
                        draggable: true
                    });
                } else {
                    dialogue = M.contenteditable_image.dialogue;
                }

                dialogue.set('bodyContent', M.contenteditable_image.get_form_content(elementid));
                dialogue.set('headerContent', M.util.get_string('createimage', 'contenteditable_image'));
                dialogue.render();
                dialogue.centerDialogue();
                dialogue.show();
                M.contenteditable_image.dialogue = dialogue;
            }
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'image', params.icon, display_chooser, this);
    },
    open_browser : function(e) {
        var elementid = this.getAttribute('data-editor');
        e.preventDefault();

        M.editor_contenteditable.show_filepicker(elementid, 'image', M.contenteditable_image.browser_callback);
    },
    browser_callback : function(params) {
        Y.log('Callback');
        Y.log(params);
        if (params.url !== '') {
            var input = Y.one('#contenteditable_image_urlentry');
            input.set('value', params.url);
            Y.log('Set URL:' + params.url);
            input = Y.one('#contenteditable_image_altentry');
            input.set('value', params.file);
            Y.log('Set File:' + params.file);
        }
    },
    set_image : function(e) {
        e.preventDefault();
        M.contenteditable_image.dialogue.hide();

        var input = e.currentTarget.get('parentNode').one('#contenteditable_image_urlentry');

        var url = input.get('value');
        input = e.currentTarget.get('parentNode').one('#contenteditable_image_altentry');
        var alt = input.get('value');
        input = e.currentTarget.get('parentNode').one('#contenteditable_image_widthentry');
        var width = input.get('value');
        input = e.currentTarget.get('parentNode').one('#contenteditable_image_heightentry');
        var height = input.get('value');
        if (url !== '' && alt !== '') {
            M.editor_contenteditable.set_selection(M.contenteditable_image.selection);
            var imagehtml = '<img src="' + Y.Escape.html(url) + '" alt="' + Y.Escape.html(alt) + '"';

            if (width) {
                imagehtml += ' width="' + Y.Escape.html(width) + '"';
            }
            if (height) {
                imagehtml += ' height="' + Y.Escape.html(height) + '"';
            }
            imagehtml += '"/>';

            if (document.selection && document.selection.createRange().pasteHTML) {
                document.selection.createRange().pasteHTML(imagehtml);
            } else {
                document.execCommand('insertHTML', false, imagehtml);
            }
            document.execCommand('enableObjectResizing', false, true);
        }
    },
    get_form_content : function(elementid) {
        var content = Y.Node.create('<form class="contenteditable_form">' +
                             '<label for="contenteditable_image_urlentry">' + M.util.get_string('enterurl', 'contenteditable_image') +
                             '</label>' +
                             '<input type="url" value="" id="contenteditable_image_urlentry" size="32"/>' +
                             '<label for="contenteditable_image_altentry">' + M.util.get_string('enteralt', 'contenteditable_image') +
                             '</label>' +
                             '<input type="text" value="" id="contenteditable_image_altentry" size="32" required="true"/>' +
                             '<label for="contenteditable_image_widthentry">' + M.util.get_string('width', 'contenteditable_image') +
                             '</label>' +
                             '<input type="text" value="" id="contenteditable_image_widthentry" size="10"/>' +
                             '<br/>' +
                             '<label for="contenteditable_image_heightentry">' + M.util.get_string('height', 'contenteditable_image') +
                             '</label>' +
                             '<input type="text" value="" id="contenteditable_image_heightentry" size="10"/>' +
                             '<hr/>' +
                             '<button id="openimagebrowser" data-editor="' + Y.Escape.html(elementid) + '">' +
                             M.util.get_string('browserepositories', 'contenteditable_image') +
                             '</button>' +
                             '<hr/>' +
                             '<button id="contenteditable_image_urlentrysubmit">' +
                             M.util.get_string('createimage', 'contenteditable_image') +
                             '</button>' +
                             '</form>' +
                             '<hr/>' + M.util.get_string('accessibilityhint', 'contenteditable_image'));

        content.one('#contenteditable_image_urlentrysubmit').on('click', M.contenteditable_image.set_image);
        content.one('#openimagebrowser').on('click', M.contenteditable_image.open_browser);
        return content;
    }
};


}, '@VERSION@', {"requires": ["node", "escape"]});
