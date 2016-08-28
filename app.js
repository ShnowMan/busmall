function Image(name, link) = {
  this.name = name,
  this.link = link,
  ImageData.pics.push(this),
}
var ImageData = {
  pics: [],
  display: [],
  clicks: 0,
}
new Image('Bag','images/bag.jpg'),
new Image('Banana','images/banana.jpg')
new Image('bathroom','images/bathroom.jpg')
new Image('boots','images/boots.jpg')
new Image('breakfast','images/breakfast.jpg')
new Image('bubblegum','images/bubblegum.jpg')
new Image('chair','images/chair.jpg')
new Image('cthulhu','images/cthulhu.jpg')
new Image('dog-duck','images/dog-duck.jpg')
new Image('dragon','images/dragon.jpg')
new Image('pen','images/pen.jpg')
new Image('pet-sweep','images/pet-sweep.jpg')
new Image('scissors','images/scissors.jpg')
new Image('shark','images/shark.jpg')
new Image('sweep','images/sweep.jpg')
new Image('tauntaun','images/tauntaun.jpg')
new Image('unicorn','images/unicorn.jpg')
new Image('usb','images/usb.jpg')
new Image('water-can','images/water-can.jpg')
new Image('wine-glass','images/wine-glass.jpg')
