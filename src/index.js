import express from 'express'
import { fetchTemperature } from './controllers/graphs/temperature'

const app = express();
app.listen(3000);

app.get('/graph/temperature', fetchTemperature);
