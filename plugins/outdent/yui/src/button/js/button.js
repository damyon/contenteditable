M.contenteditable_outdent = M.contenteditable_outdent || {
    init : function(params) {
        var click = function(e, elementid) {
            e.preventDefault();
            if (!M.editor_contenteditable.is_active(elementid)) {
                M.editor_contenteditable.focus(elementid);
            }
            document.execCommand('outdent', false, null);
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'outdent', params.icon, click);
    }
};

