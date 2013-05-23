YUI.add('moodle-contenteditable_outdent-button', function (Y, NAME) {

M.contenteditable_outdent = M.contenteditable_outdent || {
    init : function(params) {
        var click = function(e) {
            e.preventDefault();
            document.execCommand('outdent', false, null);
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'outdent', params.icon, click);
    }
};



}, '@VERSION@', {"requires": ["node"]});
