import readline from 'readline'
import fs from 'fs'
import path from 'path'

export const parseTxtFile = filename => {
    /**
     * Timhle nejakou zabudovanou funkci otevru novy stream pro soubor z parametru. Stream je neco co ti cte nebo zapisuje
     * soubor postupne, treba po radku, jako to chceme my.
     */
    const readInterface = readline.createInterface({
        input: fs.createReadStream(path.join(__dirname, '/../data/', filename)),
        output: process.stdout,
        console: false
    });

    /**
     * Sem bys mel ukladat zparsovane liny.
     */
    let parsedLines = [];

    /**
     * Tohle je iterace radku, ktera probehla na streamu. Ten callback - funkce s parametrem line se provede na kazdy radek v souboru.
     * Jelikoz neumi rikat cisla radku, musel jsem udelat promennou i predem a tu zvysovat kazdym cyklem o 1. Misto continue je tu return,
     * protoze je to funkce a continue funguje jen v cyklech jako while,for,...
     */
    let i = 0;
    readInterface.on('line', (line) => {
        i++;
        if (i === 1) {
            return
        }

        let split = line.split(' ').filter(item => item !== '');
        console.log(split)

        //Parsovat radek a vlozit do parsedLines
    });

    return parsedLines
};
