!function(){"use strict";function a(a,b){var c=Function.prototype.call.bind(Array.prototype.map);return b=b||",",c(a,function(a){return c(a,function(a){return"string"!=typeof a&&(a=JSON.stringify(a).replace(/^"|"$/g,"")),RegExp(b+'|"').test(a)&&(a='"'+a.replace(/"/g,'""')+'"'),a}).join(b)}).join("\n")}Polymer("csv-download",{delimiter:",",filename:"data.csv",download:function(){var b;b=document.createElement("a"),b.href="data:text/csv;charset=utf-8,"+encodeURIComponent(a(this.data,this.delimiter)),b.download=this.filename,b.click()},created:function(){this.data=[]}})}();