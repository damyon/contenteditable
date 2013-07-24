M.contenteditable_strike = M.contenteditable_strike || {
    init : function(params) {
        var click = function(e, elementid) {
            e.preventDefault();
            if (!M.editor_contenteditable.is_active(elementid)) {
                M.editor_contenteditable.focus(elementid);
            }
            document.execCommand('strikeThrough', false, null);
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'strike', params.icon, click);
    }
};

