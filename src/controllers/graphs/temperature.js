import {parseTxtFile} from "../../parsers";

export const fetchTemperature = (request, result) => {
    /**
     * Tady jsem vypsal seznam vsech nazvu souboru, ktere budes chtit parsovat.
     */
    const filenames = [
        'in.txt',
    ];


    const results = filenames.map(filename => parseTxtFile(filename));


    result.send('asd');
};
