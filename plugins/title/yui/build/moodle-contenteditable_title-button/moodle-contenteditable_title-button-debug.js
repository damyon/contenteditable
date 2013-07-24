YUI.add('moodle-contenteditable_title-button', function (Y, NAME) {

M.contenteditable_title = M.contenteditable_title || {
    init : function(params) {
        var click_h1 = function(e) {
            e.preventDefault();
            document.execCommand('formatBlock', false, '<h1>');
        };
        var click_h2 = function(e) {
            e.preventDefault();
            document.execCommand('formatBlock', false, '<h2>');
        };
        var click_blockquote = function(e) {
            e.preventDefault();
            document.execCommand('formatBlock', false, '<blockquote>');
        };
        var click_p = function(e) {
            e.preventDefault();
            document.execCommand('formatBlock', false, '<p>');
        };

        var h1 = '<h1>' +  M.util.get_string('h1', 'contenteditable_title') + '</h1>';
        var h2 = '<h2>' +  M.util.get_string('h2', 'contenteditable_title') + '</h2>';
        var blockquote = '<p>&nbsp;&nbsp;&nbsp;&nbsp;' +  M.util.get_string('blockquote', 'contenteditable_title') + '</p>';
        var p = '<p>' +  M.util.get_string('p', 'contenteditable_title') + '</p>';

        M.editor_contenteditable.add_toolbar_menu(params.elementid,
                                                  'title',
                                                  params.icon,
                                                  [
                                                      {'text' : h1, 'handler' : click_h1},
                                                      {'text' : h2, 'handler' : click_h2},
                                                      {'text' : blockquote, 'handler' : click_blockquote},
                                                      {'text' : p, 'handler' : click_p}
                                                  ]);
    }
};



}, '@VERSION@', {"requires": ["node"]});
