var button = document.querySelector('#button');
var display = document.querySelector('.block');
var myTemplate = document.querySelector('#myTemplate');
var temp = Handlebars.compile(myTemplate.innerHTML);
var output = document.querySelector('.output')

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
          size : 6
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



button.addEventListener('click',function(){



})
