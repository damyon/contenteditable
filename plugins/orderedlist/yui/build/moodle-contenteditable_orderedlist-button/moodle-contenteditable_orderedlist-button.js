YUI.add('moodle-contenteditable_orderedlist-button', function (Y, NAME) {

M.contenteditable_orderedlist = M.contenteditable_orderedlist || {
    init : function(params) {
        var click = function(e, elementid) {
            e.preventDefault();
            if (!M.editor_contenteditable.is_active(elementid)) {
                M.editor_contenteditable.focus(elementid);
            }
            document.execCommand('insertOrderedList', false, null);
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'orderedlist', params.icon, click);
    }
};



}, '@VERSION@', {"requires": ["node"]});
