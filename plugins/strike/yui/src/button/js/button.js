M.contenteditable_strike = M.contenteditable_strike || {
    init : function(params) {
        var click = function(e) {
            e.preventDefault();
            document.execCommand('strikeThrough', false, null);
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'strike', params.icon, click);
    }
};

