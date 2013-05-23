YUI.add('moodle-contenteditable_title-button', function (Y, NAME) {

M.contenteditable_title = M.contenteditable_title || {
    init : function(params) {
        var click = function(e) {
            e.preventDefault();
            document.execCommand('formatBlock', false, '<h1>');
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'title', params.icon, click);
    }
};



}, '@VERSION@', {"requires": ["node"]});
