M.contenteditable_html = M.contenteditable_html || {
    /**
     * Are we in html editing mode or not?
     */
    ishtml : false,

    init : function(params) {
        var click = function(e, elementid) {
            e.preventDefault();
            var textarea = Y.one('#' + elementid);
            var contenteditable = Y.one('#' + elementid + 'editable');

            if (M.contenteditable_html.ishtml) {
                M.editor_contenteditable.enable_all_widgets(elementid);
                contenteditable.setHTML('');
                contenteditable.append(textarea.get('value'));
                textarea.hide();
                contenteditable.show();
            } else {
                M.editor_contenteditable.disable_all_widgets(elementid);
                M.editor_contenteditable.enable_widget(elementid, 'html');
                textarea.set('value', contenteditable.getHTML());
                contenteditable.hide();
                textarea.show();
            }

            M.contenteditable_html.ishtml = !M.contenteditable_html.ishtml;
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'html', params.icon, click);
    }
};

