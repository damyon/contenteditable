YUI.add("moodle-contenteditable_outdent-button",function(e,t){var n=function(){n.superclass.constructor.apply(this,arguments)};n.NAME="contenteditable_outdent",n.ATTRS={},e.extend(n,e.Base,{initializer:function(e){M.editor_contenteditable.add_toolbar_button(e.elementid,"outdent",e.icon,this.click)},click:function(e){e.preventDefault(),document.execCommand("outdent",!1,null)}}),M.contenteditable_outdent=M.contenteditable_outdent||{},M.contenteditable_outdent.init=function(e,t){return new n(e,t)}},"@VERSION@",{requires:["node"]});
