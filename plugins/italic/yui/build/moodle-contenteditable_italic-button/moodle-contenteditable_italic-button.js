YUI.add('moodle-contenteditable_italic-button', function (Y, NAME) {

M.contenteditable_italic = M.contenteditable_italic || {
    init : function(params) {
        var click = function(e) {
            e.preventDefault();
            document.execCommand('italic', false, null);
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'italic', params.icon, click);
    }
};



}, '@VERSION@', {"requires": ["node"]});
