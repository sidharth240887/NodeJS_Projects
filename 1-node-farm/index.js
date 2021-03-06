const fs = require('fs');
//Blocking sunchornous way

/* const textinput = fs.readFileSync('./starter/txt/input.txt', 'utf-8');

console.log(textinput);

const textoutput = `This is what we know of avocado : ${textinput}.\n Created on ${Date.now()}`;

fs.writeFileSync('./starter/txt/output.txt',textoutput);

console.log('File written'); */


//Non blocking async way

fs.readFile('./starter/txt/start.txt','utf-8',(err, data1) =>{
    console.log(data1);
    fs.readFile(`./starter/txt/${data1}.txt`,'utf-8',(err, data2) =>{
        console.log(data2);
        fs.readFile('./starter/txt/append.txt','utf-8',(err, data3) =>{
            console.log(data3);

            fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`,'utf-8', err => {
                console.log("Your file has been written :---)");
                console.log(err);
            })
        } );
    } );
} );

console.log('reading file....');






