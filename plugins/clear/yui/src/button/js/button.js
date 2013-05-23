M.contenteditable_clear = M.contenteditable_clear || {
    init : function(params) {
        var click = function(e) {
            e.preventDefault();
            document.execCommand('removeFormat', false);
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'clear', params.icon, click);
    }
};

