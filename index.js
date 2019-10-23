const express = require('express');
const  app = express();
const path = require('path')
var fs = require('fs');
const readline = require('readline');
app.listen(3000);

//Funkce TXtparse
function Txtparse(filename) {
    let temperature;
const readInterface = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, '/data/', filename)),
    output: process.stdout,
    console: false
});
let parsedLines = [];
let i = 0;
readInterface.on('line',(line)=>{
    i++;

    if (i===1){
        return;
    }

let split = line.split(' ').filter( item => item !== '');

  var date = new Date();
    let year = split[0];
    let month = split[1];
    let day = split [2];
    let hours = split [3];
    let minutes = split [4];
    let seconds = split [5];
    date.setFullYear(year,month,day);
    date.setHours(hours,minutes,seconds);
    temperature = split[6];

    parsedLines.push({year,month,day,hours,minutes,seconds,temperature})

});
return parsedLines;
}

//funkce Allparse
function Allparse(filename) {
    let temperature;
    const readInterface = readline.createInterface({
        input: fs.createReadStream(path.join(__dirname, '/data/', filename)),
        output: process.stdout,
        console: false
    });
    let parsedLines = [];
    let i = 0;
    readInterface.on('line',(line)=>{

        let split = line.split(' ').filter( item => item !== '');
        for(i=0;i<split.length;i++) {
            if (split[i] === '?') {
                split[i] = null;
            }

        }
        var date = new Date();
        let year = split[0];
        let month = split[1];
        let day = split [2];
        let hours = split [3];
        let minutes = split [4];
        let seconds = split [5];
        date.setFullYear(year,month,day);
        date.setHours(hours,minutes,seconds);
        temperature = split[8];
        parsedLines.push({year,month,day,hours,minutes,seconds,temperature})
    });
    return parsedLines;
}
//funkce Budparse
function Budparse(filename) {
    let temperature;
    const readInterface = readline.createInterface({
        input: fs.createReadStream(path.join(__dirname, '/data/', filename)),
        output: process.stdout,
        console: false
    });
    let parsedLines = [];
    let i = 0;
    readInterface.on('line',(line)=>{

        let split = line.split(' ').filter( item => item !== '');
        for(i=0;i<split.length;i++) {
            if (split[i] === '?') {
                split[i] = null;
            }

        }
        var date = new Date();
        let year = split[0];
        let month = split[1];
        let day = split [2];
        let hours = split [3];
        let minutes = split [4];
        let seconds = split [5];
        date.setFullYear(year,month,day);
        date.setHours(hours,minutes,seconds);
        temperature = split[8];
        parsedLines.push({year,month,day,hours,minutes,seconds,temperature})
    });
    return parsedLines;
}
//funkce Molparse
function Molparse(filename) {
    let temperature;
    const readInterface = readline.createInterface({
        input: fs.createReadStream(path.join(__dirname, '/data/', filename)),
        output: process.stdout,
        console: false
    });
    let parsedLines = [];
    let i = 0;
    readInterface.on('line',(line)=>{

        let split = line.split(' ').filter( item => item !== '');
        for(i=0;i<split.length;i++) {
            if (split[i] === '?') {
                split[i] = null;
            }

        }
        var date = new Date();
        let year = split[0];
        let month = split[1];
        let day = split [2];
        let hours = split [3];
        let minutes = split [4];
        let seconds = split [5];
        date.setFullYear(year,month,day);
        date.setHours(hours,minutes,seconds);
        temperature = split[8];
        parsedLines.push({year,month,day,hours,minutes,seconds,temperature})
    });
    return parsedLines;
}




class Line{
    constructor(first,second,third){
        this.first = first;
        this.second = second;
        this.third = third;
    }
}


let filetxt = [];
let fileall = [];
let filebud = [];
let filemol = [];
function openfolder(foldername) {


    var filename = fs.readdirSync(foldername);

    for (i = 0; i < filename.length; i++) {

        switch (filename[i].split('.').pop()) {

            case 'TXT': {
                let soub = filename[i];
                app.get('/graph/filedata1', function (req, res) {
                    res.send(soub);
                });

                var data = Txtparse(filename[i]);
                filetxt.push(data);
                break;
            }
            case 'ALL': {

                let soub = filename[i];
                app.get('/graph/filedata2', function (req, res) {
                    res.send(soub);
                });


                var data = Allparse(filename[i]);
                fileall.push(data);
                break;
        }
            case 'BUD': {

                let soub = filename[i];
                app.get('/graph/filedata3', function (req, res) {
                    res.send(soub);
                });


                var data = Budparse(filename[i]);
                filebud.push(data);
                break;
            }
            case 'MOL': {

                let soub = filename[i];
                app.get('/graph/filedata3', function (req, res) {
                    res.send(soub);
                });


                var data = Molparse(filename[i]);
                filemol.push(data);
                break;
            }
        }

    }
    return [filetxt,fileall,filebud,filemol]
}



let ne = openfolder('data');
app.get('/graph/TXT', function (req, res) {
    res.send(ne[0]);
});
app.get('/graph/ALL', function (req, res) {
    res.send(ne[1]);
});
app.get('/graph/DUB', function (req, res) {
    res.send(ne[2]);
});
app.get('/graph/Mol', function (req, res) {
    res.send(ne[3]);
});
