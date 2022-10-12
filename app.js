const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();


//seccion de middlewares

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

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
  
  punkAPI.getBeers()
  .then((response)=>{
    //console.log(response)

    res.render("beers.hbs",{
      beersArr : response
    })

    })
  .catch((error)=>{
    console.log(error)
  })
  
})

app.get("/random-beer",(req,res)=>{

  punkAPI.getRandom()
  .then((data)=>{
    //let randomPos = Math.floor(Math.random() * data.length)
    
    //let randomBeer = data[randomPos]
    
    res.render("random-beer.hbs", {
      randomBeer : data
    })
  })
 
  .catch((error)=>{
    console.log(error)
  })
})





app.listen(3000, () => console.log('🏃‍ on port 3000'));



