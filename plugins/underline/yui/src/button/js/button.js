M.contenteditable_underline = M.contenteditable_underline || {
    init : function(params) {
        var click = function(e, elementid) {
            e.preventDefault();
            if (!M.editor_contenteditable.is_active(elementid)) {
                M.editor_contenteditable.focus(elementid);
            }
            document.execCommand('underline', false, null);
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'underline', params.icon, click);
    }
};

