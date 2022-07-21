import express from "express";
import bodyParser from "body-parser";
import exphbs from 'express-handlebars'
import userRoutes from './routes/users.js'
import employees from './routes/employee.js'
// const userRoutes = require('./routes/users')

const app = express();
const PORT = process.env.PORT || 5000;

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//db
// import db from './database.js'
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.use('/emp',employees)

app.use('/users', userRoutes)

app.get('/',(req, res)=>
    res.send('<h1>My Index Page..</h1>')
)

app.listen(PORT , () => console.log(`server is listening at http://localhost:${PORT}`))