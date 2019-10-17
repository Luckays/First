const express = require('express');
const  app = express();
const path = require('path')
app.get('/', function(req, res){
    res.send("Hello world!");
});
app.listen(3000);

let fileName;


/*
//main
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
