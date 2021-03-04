import * as fs from 'fs'

fs.readFile('001_HttpServer.js', (error,data)=>{
    if(error) {
        console.log(error);
        return
    };
    console.log(data.toString());
});
console.log("Main program ended ")
//

//After compiling , execute it from inside the dist folder. 
//node 002_ReadFromFile.js
//Notice that on execution Main Program ended statement will be displayed first. 
//Then the output of http server file will be displayed 
//Reason behind this is asychronous programming using callback