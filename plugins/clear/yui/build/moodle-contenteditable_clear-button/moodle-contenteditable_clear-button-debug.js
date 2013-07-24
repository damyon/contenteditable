YUI.add('moodle-contenteditable_clear-button', function (Y, NAME) {

M.contenteditable_clear = M.contenteditable_clear || {
    init : function(params) {
        var click = function(e, elementid) {
            e.preventDefault();
            if (!M.editor_contenteditable.is_active(elementid)) {
                M.editor_contenteditable.focus(elementid);
            }
            document.execCommand('removeFormat', false);
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'clear', params.icon, click);
    }
};



}, '@VERSION@', {"requires": ["node"]});
