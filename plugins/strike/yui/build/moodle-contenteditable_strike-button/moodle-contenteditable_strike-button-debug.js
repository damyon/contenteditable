YUI.add('moodle-contenteditable_strike-button', function (Y, NAME) {

M.contenteditable_strike = M.contenteditable_strike || {
    init : function(params) {
        var click = function(e) {
            e.preventDefault();
            document.execCommand('strikeThrough', false, null);
        };

        M.editor_contenteditable.add_toolbar_button(params.elementid, 'strike', params.icon, click);
    }
};



}, '@VERSION@', {"requires": ["node"]});
