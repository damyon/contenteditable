M.contenteditable_bold = M.contenteditable_bold || {
    init : function(params) {
        var click = function(e) {
            e.preventDefault();
            document.execCommand('bold', false, null);
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'bold', params.icon, click);
    }
};

