
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

var tracker = {
  imageSection: document.getElementById('clear'),
  centerImage: document.getElementById('imgElementTwo'),
  rightImage: document.getElementById('imgElementThree'),
  leftImage: document.getElementById('imgElementOne'),
  instruction: document.getElementById('instruction'),
  table: document.getElementById('hidden_table'),
  button: document.getElementById('hidden_button'),

  randomNum: function() {
    return Math.floor(Math.random() * imageArray.length);
  },

  randomImages: function(){
    var imageOne = this.randomNum();
    var imageTwo = this.randomNum();
    var imageThree = this.randomNum();
    console.log('1',imageOne);
    console.log('2',imageTwo);
    console.log('3',imageThree);
    while (imageOne === imageTwo){
      imageTwo = this.randomNum();
    }
    while(imageOne === imageThree || imageTwo === imageThree) {
      imageThree = this.randomNum();

    }

    this.leftImage.src = imageArray[imageOne].link;
    this.centerImage.src = imageArray[imageTwo].link;
    this.rightImage.src = imageArray[imageThree].link;
    this.leftImage.name = imageArray[imageOne].name;
    this.centerImage.name = imageArray[imageTwo].name;
    this.rightImage.name = imageArray[imageThree].name;
  },

  clickCounter: function(event) {
    // console.log(this);
    if (clicks < 15){
      clicks++;
      for (var i = 0; i < imageArray.length; i++){
        if (event.target.name === imageArray[i].name) {
          imageArray[i].clicked++;
        }
      }
      tracker.randomImages();
    } else{
      tracker.imageSection.innerHTML = '';
      tracker.instruction.textContent = 'Here are your results!';
      tracker.buildTableHeader();
      tracker.buildTableBody();
    }
  },

  buildTableHeader: function() {
    var trElNames = document.createElement('tr');
    var blankThEl = document.createElement('th');
    trElNames.appendChild(blankThEl);

    for (var i = 0; i < imageArray.length; i++) {
      var hoursThEl = document.createElement('th');
      hoursThEl.textContent = imageArray[i].name;
      trElNames.appendChild(hoursThEl);
    }
    this.table.appendChild(trElNames);
  },

  buildTableBody: function() {
    var trEl = document.createElement('tr');
    var clicksThEl = document.createElement('th');
    clicksThEl.textContent = 'Number of Clicks';
    trEl.appendChild(clicksThEl);
    for (var i = 0; i < imageArray.length; i++){
      var thEl = document.createElement('th');
      thEl.textContent = imageArray[i].clicked;
      trEl.appendChild(thEl);
    }
    this.table.appendChild(trEl);
  }
};

tracker.leftImage.addEventListener('click',tracker.clickCounter);
tracker.centerImage.addEventListener('click',tracker.clickCounter);
tracker.rightImage.addEventListener('click',tracker.clickCounter);



tracker.randomImages();
