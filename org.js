const express = require('express');
const  app = express();
const path = require('path')
var fs = require('fs');
const readline = require('readline');
app.listen(3000);

//var date = new Date();

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

//console.log(split);
        var date = new Date();
        //  date.setFullYear(split[0]);
        // date.setMonth(split[1]);
        // date.setDate(split[2]);
        //  date.setHours(split[3]);
        //  date.setMinutes(split[4]);
        //  date.setSeconds(split[5]);
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
        //parsedLines.push({date,temperature})

    });
    return parsedLines;
}


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
        for(i=0;i<split.length;i++){
            if(split[i]==='?'){
                split[i] = null;
            }

        }

        //console.log(split);
        var date = new Date();
        //  date.setFullYear(split[0]);
        // date.setMonth(split[1]);
        // date.setDate(split[2]);
        //  date.setHours(split[3]);
        //  date.setMinutes(split[4]);
        //  date.setSeconds(split[5]);
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
        //parsedLines.push({date,temperature})

    });
    return parsedLines;
}








let all = [];
let result = [];
function openfolder(foldername) {


    var filename = fs.readdirSync(foldername);

    /*
        for(var i = 0;i<filename.length;i++){
            var data = Txtparse(filename[i]);
          all.push(data);
        }
        return all;*/
    for (i = 0; i < filename.length; i++) {
        /* if(filename[i].split('.').pop()==='TXT') {

             let soub = filename[i];
             app.get('/graph/filedata', function (req, res) {
                 res.send(soub);
             });


                 var data = Txtparse(filename[i]);
                 all.push(data);
                 return all;
 */
        /* const
             results = filename.map(filename => Txtparse(soub));*/

        //}

        switch (filename[i].split('.').pop()) {

            case 'TXT': {
                let soub = filename[i];
                app.get('/graph/filedata', function (req, res) {
                    res.send(soub);
                });

                /*const
                    results = filename.map(filename => Txtparse(soub));
                return results;*/
                var data = Txtparse(filename[i]);
                all.push(data);
                return all;
                break;
            }
            case 'ALL':
                let soub = filename[i];
                app.get('/graph/filedata', function (req, res) {
                    res.send(soub);
                });


                var data = Allparse(filename[i]);
                all.push(data);
                return all;
                break;

        }
        //  return all;
    }
    //return all;
}
let ne = openfolder('data');
app.get('/graph/data', function (req, res) {
    res.send(ne);
});



/* var readStream = fs.createReadStream(path.join(__dirname, '/data/') + filename, 'utf8');
 let data ;
 readStream.on('data', function (chunk) {
     data += chunk;
 }).on('end', function () {
     app.get('/graph/data', function (req, res) {
         res.send(readStream);
     });

});
}
*/


/*
class Line{
    constructor(date,temperature){
        this.date = date;
        this.temperature = temperature

    }


}


//main
//open folder
function openfolder(foldername) {


    var filename = fs.readdirSync(foldername);



    for(var i = 0;i<filename.length;i++){
       var data = Txtparse(filename[i]);

    }
}


var c = 'ahoj';
app.get('/graph', function (req, res) {
    res.send(c);
});
*/
/*

 app.get('/graph', function(req, res){
        res.send(filename);
    });



openfolder("data");//?otevreni slozky a cteni souboru
while(true){
    let fileName;
    switch (fileName.split('.').pop());{
    case 'txt'
        new TxtParser(fileName).parse();
        break;
    }
}


class TxtParser{
    constructor(fileName) {
        this.filename = fileName;
    }
    array <Line> parse() {    //?array tak aby byl vysledek tridy line
        i = 0;
        let result = [];
        while (myFile.good()){ /// myFile
            let line;
            //nacteni dat
            i++;
            if(i==1){
                continue;}
            let split = line.split('').filter(item=>){return item !== ' '});
    Line::date = Date(); // soubory sly do tridy line
    date.setYear(split[0]);
    date.setMonth(split[1]);
    date.setDate(split[2]);
    date.setHours(split[3],split[4],split[5])
    Line::temperature = split[6]
    result.push({date,temperature})
}
}

app.get('/graph/temperature', function(req, res){
    res.send(result);
});
}

class Line{
    constructor(){
        this.date;
        this.temperature;
    }
}*/
