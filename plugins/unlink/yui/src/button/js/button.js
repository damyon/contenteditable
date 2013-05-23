M.contenteditable_unlink = M.contenteditable_unlink || {
    init : function(params) {
        var click = function(e) {
            e.preventDefault();
            document.execCommand('unlink', false, null);
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'unlink', params.icon, click);
    }
};

