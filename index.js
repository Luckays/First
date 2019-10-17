/**
 * Nainstaloval jsem ti tu veci, abys mohl pouzivat nove veci z JS tak, jak jsem ti je ukazoval. Takze klidne misto tohohle
 * pis tohle:
 *
 * import express from 'express'
 */
const express = require('express');
const  app = express();

/**
 * Tenhle modul path se nikde nepouziva, klidne ten radek muzes smazat.
 */
const path = require('path')

/**
 * Tenhle endpoint (URL /) potrebovat nebudes, muzes to smazat :)
 */
app.get('/', function(req, res){
    res.send("Hello world!");
});
app.listen(3000);

let fileName;


/**
 * Vesmes dobry az na chyby v syntaxi. Jen zatim neres typ souboru, klidne zatim pocitej s tim, ze je jen jeden.
 * Jo a pozor na to while(true).. ten while se provadi do ty doby, dokud ta hodnota v nem nebude false, takze se ti to takhle
 * bude provaded porad :D
 */
//main
openfolder("data");//?otevreni slozky a cteni souboru
while(true){
    let fileName;
    switch (fileName.split('.').pop());{
        case 'txt'
        /**
         * Kdyz jsem pak nad tim premyslel, vytvaret objekt pro kazdy soubor je zbytecne.. bude to zrat pamet akorat.
         * takze bude stacit, pokud to bude jen funkce nebo vytvorit objekt TxtParser pro vsechy soubory pred whilem
         * a parametr filename dat do metody parse.
         */
        new TxtParser(fileName).parse();
            break;
    }
    }


class TxtParser{
    constructor(fileName) {
        this.filename = fileName;
    }

    /**
     * V JS se nedefinujou typy, ktere budou na vystupu, muzes tam tim padem mit cokoliv. Jen jak jsem ti rikal, ikdyz
     * tu muzes mit cokoliv, chovej se jako bys mohl mit na vystupu jen jeden typ. Takze syntaxe bude jen parse()
     */
    array <Line> parse() {    //?array tak aby byl vysledek tridy line
        /**
         * Chybi let
         */
        i = 0;
        let result = [];

        /**
         * Kdyz budu brat v potaz, ze vse funguje jako v C++, tak good vraci, jestli je soubor v poradku, necte kazdy radek.
         * Takze pokud soubor napr. nebude existovat while nikdy neprobehne a hned se ukonci, pokud bude soubor v poradku,
         * bude cyklus probihat donekonecna.
         */
        while (myFile.good()){ /// myFile
            let line;
            //nacteni dat
            i++;
            if(i==1){
                continue;}

            /**
             * Dobry, jen to chces rozdelit podle mezery a ve split mas prazdny string, takze by ti to rozsekalo string
             * na kazdy znak do pole :D.
             *
             * Syntaxe funkce v JS je (param) => { udelejNeco(param) }, takze pro tebe (item) => { return item !== ' '}
             * Nebo zkracene, abys nemusel psat zbytecne ten return, da se napsat (item) => item !== ' '
             * A nakonec, kdyz mas jeden parametr, nemusi se davat do zavorky, takze muzes mit klidne jen item => item !== ' '
             */
            let split = line.split('').filter(item=>){return item !== ' '});

            /**
             * Pozor na to :: .. tady ti to asi ani fungovat nebude, hlavne je to pristup ke statickym vecem ze trid, radim
             * nepouzivat nikde. Pokud to neni opravdu treba. Je to cesta jak si udelat v kodu pekny bordel a spoustu chyb.
             *
             * Hlavne, pokud to budes chtit naskladat do Line, mel by sis vytvorit novy objekt line do promene nebo konstanty..
             * const parsedLine = new Line()
             *
             * A pak do ni strkat ty parametry
             * parsedLine.date = Date()
             * parsedLine.date.setYear(split[0])
             */
            Line::date = Date(); // soubory sly do tridy line
            date.setYear(split[0]);
            date.setMonth(split[1]);
            date.setDate(split[2]);
            date.setHours(split[3],split[4],split[5])
            Line::temperature = split[6]
            result.push({date,temperature})
            }

        /**
         * Tu promenou result, do ktere si vysypal vsechny zparsovane radky, bys mel dat na vystup te funkce parse.
         * Takze dat sem return results. Tohle pak cely zavolas v te funkci co mas tady hned pod tim :)
         */
        }

app.get('/graph/temperature', function(req, res){
    /**
     * Jak jsem psal vys, parse() by ti melo vratit ten results. Tady bys mel mit to cteni radku, zalozeni noveho objektu txtparser
     * a ten vystup z parse dat do toho res.send. Takhle ti to bude hazet chybu, ze result neexistuje.
     */
    res.send(result);
});
        }

class Line{
    /**
     * Mas prazdny konstruktor - zadne parametry.
     *
     * constructor(date, temperature) {
     *     this.date = date;
     *     this.temperature = temperature;
     * }
     */
    constructor(){
        this.date;
        this.temperature;
            }
    }
