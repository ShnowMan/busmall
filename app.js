
var imageArray = [];
var clicks = 0;
var imageNames = [];

var lable = function(){
  for (var i = 0; i < imageNames.length; i++) {
    return imageNames[i];
};

function Images (name, link) {
  this.name = name;
  this.link = link;
  this.shown = 0;
  this.clicked = 0;
  imageArray.push(this);
  imageNames.push(this.name);
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



var ctx = document.getElementById('canvas').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3, 10, 12, 6, 8, 9, 4, 6, 10, 11, 12, 2, 4, 5, 7],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1
    }]
  },
});
