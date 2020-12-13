const express= require('express');
const morgan=require('morgan');
const apiRouter=require('./routes')
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(cors());

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api',apiRouter);



app.set('PORT', 3000);

app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});


app.listen(app.get('PORT'), () => {
    console.log(`Running on http://localhost:${app.get('PORT')}`)
})

module.exports = app;