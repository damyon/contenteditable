YUI.add("moodle-contenteditable_html-button",function(e,t){M.contenteditable_html=M.contenteditable_html||{ishtml:!1,init:function(t){var n=function(t,n){t.preventDefault();var r=e.one("#"+n),i=e.one("#"+n+"editable");M.contenteditable_html.ishtml?(M.editor_contenteditable.enable_all_widgets(n),r.hide(),i.show()):(M.editor_contenteditable.disable_all_widgets(n),M.editor_contenteditable.enable_widget(n,"html"),i.hide(),r.show()),M.contenteditable_html.ishtml=!M.contenteditable_html.ishtml};M.editor_contenteditable.add_toolbar_button(t.elementid,"html",t.icon,n)}}},"@VERSION@",{requires:["node"]});
