YUI.add('moodle-contenteditable_unlink-button', function (Y, NAME) {

M.contenteditable_unlink = M.contenteditable_unlink || {
    init : function(params) {
        var click = function(e, elementid) {
            e.preventDefault();
            if (!M.editor_contenteditable.is_active(elementid)) {
                M.editor_contenteditable.focus(elementid);
            }
            document.execCommand('unlink', false, null);
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'unlink', params.icon, click);
    }
};



}, '@VERSION@', {"requires": ["node"]});
