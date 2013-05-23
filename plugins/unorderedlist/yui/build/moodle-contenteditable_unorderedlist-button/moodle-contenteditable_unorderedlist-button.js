YUI.add('moodle-contenteditable_unorderedlist-button', function (Y, NAME) {

M.contenteditable_unorderedlist = M.contenteditable_unorderedlist || {
    init : function(params) {
        var click = function(e) {
            e.preventDefault();
            document.execCommand('insertUnorderedList', false, null);
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'unorderedlist', params.icon, click);
    }
};



}, '@VERSION@', {"requires": ["node"]});
