const fs = require("fs");
fs.readFile("./cool.txt","utf-8",function(err,content){
    if(err){
        console.log(err);
    }
    console.log(content);
});

// const qoute = "Knowledge is power..!";

// fs.writeFile("./awesome.txt",qoute,function(err){
//     console.log("Completed writing!!!");
// });

// const qoute2 ="\nAll is well..."

// fs.appendFile("./awesome.txt",qoute2,function(err){
//     console.log("Added to the file..!");
// });

// fs.unlink("./backups/text1.txt",function(err){
//     console.log("Removed the file...");
// });

const htmlData = "Good things...";

for(let i=1; i <= 10; i++){
    fs.writeFile(`./backups/text-${i}.html`,htmlData,function(err){
        console.log("Completed writing...!",i);
    });
}
// fs.writeFileSync

function removeFile(file) {
    fs.unlink(`./backups/${file}`,function(err){
        console.log("Removed the file!!!",file);
    });
}

fs.readdir("./backups",function(err,files){
    console.log(files);
    files.forEach((file)=>removeFile(file));
});

setTimeout(()=>{
    console.log(4);
},1000);