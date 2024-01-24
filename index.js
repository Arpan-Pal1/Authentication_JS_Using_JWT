import app from './app.js'
import connectDB from './src/database/db.connection.js';

connectDB()
.then(()=>{
    app.listen(8000, ()=>{
        console.log(`server is running on 8000`)
    })
})
.catch((err)=>{
    console.log(`DATABASE CONNECTION ERROR`);
})