import express from 'express';


const app = express()
app.set('view engine', 'ejs')



// home route
import { homeRouter } from './src/router/home.route.js';

app.use('/', homeRouter)

export default app