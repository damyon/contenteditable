YUI.add('moodle-contenteditable_underline-button', function (Y, NAME) {

M.contenteditable_underline = M.contenteditable_underline || {
    init : function(params) {
        var click = function(e) {
            e.preventDefault();
            document.execCommand('underline', false, null);
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'underline', params.icon, click);
    }
};



}, '@VERSION@', {"requires": ["node"]});
