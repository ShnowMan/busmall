
var imageArray = [];
var clicks = 0;

function Images (name, link) {
  this.name = name;
  this.link = link;
  this.shown = 0;
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

var imageSection = document.getElementById('clear');
var centerImage = document.getElementById('imgElementTwo');
var rightImage = document.getElementById('imgElementThree');
var leftImage = document.getElementById('imgElementOne');
var instruction = document.getElementById('instruction');
var table = document.getElementById('hidden_table');

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
  leftImage.name = imageArray[imageOne].name;
  centerImage.name = imageArray[imageTwo].name;
  rightImage.name = imageArray[imageThree].name;
}

function clickCounter(event) {
  if (clicks < 15){
    clicks++;
    console.log('clicks = ',clicks);
    for (var i = 0; i < imageArray.length; i++){
      if (event.target.name === imageArray[i].name) {
        imageArray[i].clicked++;
      }
    }
    randomImages();
  } else{
    imageSection.innerHTML = '';
    instruction.textContent = 'Here are your results!';
  }
};

leftImage.addEventListener('click',clickCounter);
centerImage.addEventListener('click',clickCounter);
rightImage.addEventListener('click',clickCounter);


//table
// function buildTable() {
//   var trEL = document.createElement('tr');
//   var blankThEl = document.createElement('th');
//   trEL.appendChild(blankThEl);
//   for (var i = 0; i > imageArray.length; i++){
//     var imageNames = document.createElement('th');
//     imageNames.textContent = imageArray[i].name;
//     trEL.appendChild(imageNames);
//   };
//   table.appendChild(trEL);
// };

function buildTableHeader() {
  var trElNames = document.createElement('tr');
  var blankThEl = document.createElement('th');
  trElNames.appendChild(blankThEl);

  for (var i = 0; i < imageArray.length; i++) {
    var hoursThEl = document.createElement('th');
    hoursThEl.textContent = imageArray[i].name;
    trElNames.appendChild(hoursThEl);
  }
  table.appendChild(trElNames);
};

function buildTableBody() {
  var trEl = document.createElement('tr');
  var clicksThEl = document.createElement('th');
  clicksThEl.textContent = 'Number of Clicks';
  trEl.appendChild(clicksThEl);
  for (var i = 1; i < imageArray.length + 1; i++){
    var thEl = document.createElement('th');
    thEl.textContent = 'test';
    trEl.appendChild(thEl);
  }
  table.appendChild(trEl);
}




randomImages();
buildTableHeader();
buildTableBody();
