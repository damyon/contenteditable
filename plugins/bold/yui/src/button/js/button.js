M.contenteditable_bold = M.contenteditable_bold || {
    init : function(params) {
        var click = function(e, elementid) {
            e.preventDefault();
            if (!M.editor_contenteditable.is_active(elementid)) {
                M.editor_contenteditable.focus(elementid);
            }
            document.execCommand('bold', false, null);
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'bold', params.icon, click);
    }
};

