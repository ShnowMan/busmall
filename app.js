
var imageArray = [];

function Images (name, link) {
  this.name = name;
  this.link = link;
  this.clicked = 0;
  imageArray.push(this);
}
new Images('bag','images/bag.jpg');
new Images('banana','images/banana.jpg');
new Images('bathroom','images/bathroom.jpg');
new Images('boots','images/boots.jpg');
new Images('breakfast','images/breakfast.jpg');
new Images('bubblegum','images/bubblegum.jpg');
new Images('chair','images/chair.jpg');
new Images('cthulhu','images/cthulhu.jpg');
new Images('dog-duck','images/dog-duck.jpg');
new Images('dragon','images/dragon.jpg');
new Images('pen','images/pen.jpg');
new Images('pet-sweep','images/pet-sweep.jpg');
new Images('scissors','images/scissors.jpg');
new Images('shark','images/shark.jpg');
new Images('sweep','images/sweep.png');
new Images('tauntaun','images/tauntaun.jpg');
new Images('unicorn','images/unicorn.jpg');
new Images('usb','images/usb.jpg');
new Images('water-can','images/water-can.jpg');
new Images('wine-glass','images/wine-glass.jpg');

var centerImage = document.getElementById('imgElementTwo');
var rightImage = document.getElementById('imgElementThree');
var leftImage = document.getElementById('imgElementOne');

function randomNum(){
  return Math.floor(Math.random() * imageArray.length);
}

function randomImages(){
  var imageOne = randomNum();
  var imageTwo = randomNum();
  var imageThree = randomNum();
  while (imageOne === imageTwo){
    imageTwo = randomNum();
  }
  while (imageOne === imageThree || imageTwo === imageThree) {
    imageThree = randomNum();
  }

  leftImage.src = imageArray[imageOne].link;
  centerImage.src = imageArray[imageTwo].link;
  rightImage.src = imageArray[imageThree].link;

  // centerImage.appendChild(imgElementOne);
  // rightImage.appendChild(imgElementTwo);
  // leftImage.appendChild(imgElementThree);
  console.log('imageArray[imageOne].link = ',imageArray[imageOne].link);
}

randomImages();
