import express from 'express'
import { fetchTemperature } from './controllers/graphs/temperature'

const app = express();
app.listen(3000);

/**
 * Tady jsem zaregistroval novou URL, ten callback - funkci jsem namisto jsem umistil do zvlast souboru, at se to nemicha
 * dohromady. Jmenuje se fetchTemperature a najdes ji tak, ze udelas CTRL + click na nazev te funkce :)
 */
app.get('/graph/temperature', fetchTemperature);
