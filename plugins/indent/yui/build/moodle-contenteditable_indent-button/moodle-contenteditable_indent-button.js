YUI.add('moodle-contenteditable_indent-button', function (Y, NAME) {

M.contenteditable_indent = M.contenteditable_indent || {
    init : function(params) {
        var click = function(e) {
            e.preventDefault();
            document.execCommand('indent', false, null);
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'indent', params.icon, click);
    }
};



}, '@VERSION@', {"requires": ["node"]});
