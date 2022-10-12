const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();


//seccion de middlewares

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


//data a utilizar



app.use(express.static(path.join(__dirname, 'public')));



// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  
  res.render('index', {
    beerImage : "./images/beer.png"
    })
});

app.get("/beers", (req,res)=>{
  
  punkApi.getBeers()
  .then((beersInfo)=>{
    console.log(beersInfo)
    })
  .catch((error)=>{
    console.log(error)
  })
  res.render("beers", {
    
   


  })
})

app.get("/random-beer",(req,res)=>{

  res.render("random-beer",{

  })
})





app.listen(3000, () => console.log('🏃‍ on port 3000'));



