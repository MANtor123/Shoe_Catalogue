//first template
var myTemplate = document.querySelector('#myTemplate');
var temp = Handlebars.compile(myTemplate.innerHTML);
var display = document.querySelector('.block');

//second template
var search = document.querySelector('#button');
var searchTemplate = document.querySelector('.searchTemplate');
var searchTemp = Handlebars.compile(searchTemplate.innerHTML);
var output = document.querySelector('.output');

//list of the shoes
var shoes = [
        {
            color : 'white',
            price : 350,
            in_stock : 5,
            brand : 'Nike',
            size : 4
        },
        {
            color : 'grey',
            price : 275,
            in_stock : 3,
            brand : 'Vans',
            size : 5
        },

        {
          color : 'black',
          price :345,
          brand : 'Allstar',
          size : 6,
          in_stock : 7
        },

        {
          color : 'white',
          price : 500,
          brand : 'Allstar',
          size : 3,
          in_stock : 7
        },
];


var colors = [];

for(var i=0; i<shoes.length; i++){
  var shoe = shoes[i]
  colors.push(shoe.color);
}

var brands = []
for(var i=0; i<shoes.length; i++){
  var shoe = shoes[i]
  brands.push(shoe.brand)
}

var size = []
for(var i=0; i<shoes.length; i++){
  var shoe = shoes[i]
  size.push(shoe.size)
}

var results = temp({shoeColorKeys:colors,shoeBrandKeys:brands,shoeSizeKeys:size})
display.innerHTML = results;



search.addEventListener('click',function(){
var searchResults = searchTemp({shoes : shoes})
output.innerHTML = searchResults;

});
