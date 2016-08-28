
var ImageArray = [];

function Images (name, link) {
  this.name = name;
  this.link = link;
  this.clicked = 0;
  ImageArray.pics.push(this);
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
new Images('sweep','images/sweep.jpg');
new Images('tauntaun','images/tauntaun.jpg');
new Images('unicorn','images/unicorn.jpg');
new Images('usb','images/usb.jpg');
new Images('water-can','images/water-can.jpg');
new Images('wine-glass','images/wine-glass.jpg');

// var centerImage = document.getElementById('center');
// var rightImage = document.getElementById('right');
// var leftImage = document.getElementById('left');

function randomNum(){
  return Math.floor(Math.random() * ImageArray.pics.length);
};

function displayImages(){
  var one = randomNum();
  var two = randomNum();
  var three = randomNum();
  while (one === two){
    two = randomNum();
  }
  while (one === three || two === three) {
    three = randomNum();
  }
};
