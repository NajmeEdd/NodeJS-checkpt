var N=process.argv;
var fsN=require("fs");
fs.readFile(N[2], function(err, data){
    if(err) return console.error(err);
let tab=data.toString().split('\n');
console.log(tab.length-1);
return;
})
