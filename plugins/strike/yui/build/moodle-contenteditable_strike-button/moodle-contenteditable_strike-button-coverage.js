if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/moodle-contenteditable_strike-button/moodle-contenteditable_strike-button.js']) {
   __coverage__['build/moodle-contenteditable_strike-button/moodle-contenteditable_strike-button.js'] = {"path":"build/moodle-contenteditable_strike-button/moodle-contenteditable_strike-button.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":48},"end":{"line":1,"column":67}}},"2":{"name":"(anonymous_2)","line":4,"loc":{"start":{"line":4,"column":11},"end":{"line":4,"column":28}}},"3":{"name":"(anonymous_3)","line":5,"loc":{"start":{"line":5,"column":20},"end":{"line":5,"column":32}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":16,"column":40}},"2":{"start":{"line":3,"column":0},"end":{"line":12,"column":2}},"3":{"start":{"line":5,"column":8},"end":{"line":8,"column":10}},"4":{"start":{"line":6,"column":12},"end":{"line":6,"column":31}},"5":{"start":{"line":7,"column":12},"end":{"line":7,"column":63}},"6":{"start":{"line":10,"column":8},"end":{"line":10,"column":100}}},"branchMap":{"1":{"line":3,"type":"binary-expr","locations":[{"start":{"line":3,"column":27},"end":{"line":3,"column":51}},{"start":{"line":3,"column":55},"end":{"line":12,"column":1}}]}},"code":["(function () { YUI.add('moodle-contenteditable_strike-button', function (Y, NAME) {","","M.contenteditable_strike = M.contenteditable_strike || {","    init : function(params) {","        var click = function(e) {","            e.preventDefault();","            document.execCommand('strikeThrough', false, null);","        };","","        M.editor_contenteditable.add_toolbar_button(params.elementid, 'strike', params.icon, click);","    }","};","","","","}, '@VERSION@', {\"requires\": [\"node\"]});","","}());"]};
}
var __cov_cIuxD$xJPdfUljhBEu7wSQ = __coverage__['build/moodle-contenteditable_strike-button/moodle-contenteditable_strike-button.js'];
__cov_cIuxD$xJPdfUljhBEu7wSQ.s['1']++;YUI.add('moodle-contenteditable_strike-button',function(Y,NAME){__cov_cIuxD$xJPdfUljhBEu7wSQ.f['1']++;__cov_cIuxD$xJPdfUljhBEu7wSQ.s['2']++;M.contenteditable_strike=(__cov_cIuxD$xJPdfUljhBEu7wSQ.b['1'][0]++,M.contenteditable_strike)||(__cov_cIuxD$xJPdfUljhBEu7wSQ.b['1'][1]++,{init:function(params){__cov_cIuxD$xJPdfUljhBEu7wSQ.f['2']++;__cov_cIuxD$xJPdfUljhBEu7wSQ.s['3']++;var click=function(e){__cov_cIuxD$xJPdfUljhBEu7wSQ.f['3']++;__cov_cIuxD$xJPdfUljhBEu7wSQ.s['4']++;e.preventDefault();__cov_cIuxD$xJPdfUljhBEu7wSQ.s['5']++;document.execCommand('strikeThrough',false,null);};__cov_cIuxD$xJPdfUljhBEu7wSQ.s['6']++;M.editor_contenteditable.add_toolbar_button(params.elementid,'strike',params.icon,click);}});},'@VERSION@',{'requires':['node']});
