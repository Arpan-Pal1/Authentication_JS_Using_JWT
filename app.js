import express from 'express';
import bodyParser from 'body-parser';


const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended : true}))



// home route
import { homeRouter } from './src/router/home.route.js';

app.use('/', homeRouter)

// user route
import userRoute from './src/router/user.route.js';

app.use('/api/v1/user', userRoute)

export default app