//first template
var myTemplate = document.querySelector('#myTemplate');
var temp = Handlebars.compile(myTemplate.innerHTML);
var display = document.querySelector('.block');

//second template
var all = document.querySelector('#button');
var searchTemplate = document.querySelector('.searchTemplate');
var searchTemp = Handlebars.compile(searchTemplate.innerHTML);
var output = document.querySelector('.output');

var add = document.querySelector('#add');
//list of the shoes
var shoes = [
        {
            color : 'white',
            price : 350,
            in_stock : 5,
            brand : 'Nike',
            size : 4,

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


];

function uniqBrand(){
var brands = [];
var brandMap = {};

for(var i=0; i<shoes.length; i++){
  var shoe = shoes[i]
  if(brandMap[shoe.brand] === undefined){
    brandMap[shoe.brand] = shoe.brand;
    brands.push(shoe.brand);
  }

}
return brands;
};

function uniqColor(){
var colors = [];
var colorMap = {};

for(var i=0; i<shoes.length; i++){
  var shoe = shoes[i]
  if(colorMap[shoe.color] === undefined){
    colorMap[shoe.color] = shoe.color;
    colors.push(shoe.color);
  }
}
return colors;
};

function uniqSize(){
var size = [];
var sizeMap = {};

for(var i=0; i<shoes.length; i++){
  var shoe = shoes[i]
  if(sizeMap[shoe.size] === undefined){
    sizeMap[shoe.size] = shoe.size;
    size.push(shoe.size);
  }

}
return size;
};

function populateDropDowns(){

  var brand = uniqBrand();
  var colors = uniqColor();
  var size = uniqSize();


  brand.sort(),
  size.sort(),
  colors.sort(function(a,b){
  return a - b;
    });

    //var results = temp({shoeColorKeys:colors})
  var results = temp({shoeColorKeys:colors,shoeBrandKeys:brand,shoeSizeKeys:size})
  display.innerHTML = results;

}
//calling function
populateDropDowns();

// function sort(shoes){
// var bra =[]
// var col = []
// var siz = []
//
// var brandMap = {}
// for(var i = 0; i < shoes.length; i++){
//   var brandShoe = shoes[i]
//   if(brandMap[brand.name])
// }
// }

//showing all the stock button
all.addEventListener('click',function(){
var searchResults = searchTemp({shoes : shoes})
output.innerHTML = searchResults;

});

//adding stock button
var stockMap = {}
add.addEventListener('click', function(){
var brand = document.querySelector('#brand')
var color = document.querySelector('#color')
var sizes = document.querySelector('#size')
var quantity = document.querySelector('#qty')
var price = document.querySelector('#price')

var brandName = brand.value

if(!brandName == ''){
  var names = stockMap[brandName];
  if(names == undefined){
    names ={
      brand : brand.value,
      color : color.value,
      size : sizes.value,
      price : price.value,
      in_stock : (quantity.value)
    };
    shoes.push(names);
    stockMap[brandName] = names;
  }
  else{
      names.in_stock += (qty.value)
  }
}

var searchResults = searchTemp({shoes : shoes})
output.innerHTML = searchResults;

populateDropDowns();

});
