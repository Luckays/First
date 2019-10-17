import { parseTxtFile } from "../../parsers";

export const fetchTemperature = (request, result) => {
    /**
     * Tady jsem vypsal seznam vsech nazvu souboru, ktere budes chtit parsovat.
     */
    const filenames = [
        'in.txt',
    ];

    /**
     * Tady jsem vzal soubory, projel jsem je funkci map, ktera ti bude iterovat cele pole souboru, na kazdym souboru zavola parseTxtFile
     * a nazev souboru nahradi vystupem parseTxtFile, coz by mel byt seznam uz nejak strukturovanych line. Takze v results bys mel mit pole,
     * ktere bude obsahovat dalsi pole, ve kterem budou parsovane liny.
     */
    const results = filenames.map(filename => parseTxtFile(filename));

    /**
     * Timhle na vystup do prohlizece odeslu pole poli tech parsovanych line. (Samozrejme az budou vsechny parsovane :D)
     */
    result.send(results);
};
