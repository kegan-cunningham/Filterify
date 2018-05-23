let video = document.getElementById('video');

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    video.srcObject = stream;
    video.play();
  });
}

let videoFilters = [
  { filterName: "oldtimey", filterCss: "grayscale(0%)" },
  { filterName: "blur", filterCss: "blur(0px)" },
  { filterName: "brightness", filterCss: "brightness(100%)" },
  { filterName: "invert", filterCss: "invert(0%)" },
  { filterName: "contrast", filterCss: "contrast(100%)" },
  { filterName: "hue-rotate", filterCss: "hue-rotate(0deg)" }
];

let masterFilter;

function addFilter() {
  masterFilter = '';
  videoFilters.forEach(fltr => {
    masterFilter += (fltr.filterCss + ' ');
  });
  applyFilters(masterFilter)
}

addFilter();

function applyFilters(masterFilter) {
  console.log(masterFilter)
  video.style.filter = masterFilter;
  console.log(video.style.filter)
}

// functions handling different filters

let oldtimey = document.getElementById("oldtimey");
let oldtimeyvalue = document.getElementById("oldtimeyvalue");
oldtimeyvalue.innerHTML = oldtimey.value;

oldtimey.oninput = function() {
  oldtimeyvalue.innerHTML = this.value;
  videoFilters.find(el => el.filterName === 'oldtimey').filterCss = `grayscale(${this.value}%)`
  addFilter();
}

let blur = document.getElementById("blur");
let blurvalue = document.getElementById("blurvalue");
blurvalue.innerHTML = blur.value;

blur.oninput = function() {
  blurvalue.innerHTML = this.value;
  videoFilters.find(el => el.filterName === 'blur').filterCss = `blur(${this.value}px)`
  addFilter();
}

let brightness = document.getElementById("brightness");
let brightnessvalue = document.getElementById("brightnessvalue");
brightnessvalue.innerHTML = brightness.value;

brightness.oninput = function() {
  brightnessvalue.innerHTML = this.value;
  videoFilters.find(el => el.filterName === 'brightness').filterCss = `brightness(${this.value}%)`
  addFilter();
}

let invert = document.getElementById("invert");
let invertvalue = document.getElementById("invertvalue");
invertvalue.innerHTML = invert.value;

invert.oninput = function() {
  invertvalue.innerHTML = this.value;
  videoFilters.find(el => el.filterName === 'invert').filterCss = `invert(${this.value}%)`
  addFilter();
}

let contrast = document.getElementById("contrast");
let contrastvalue = document.getElementById("contrastvalue");
contrastvalue.innerHTML = contrast.value;

contrast.oninput = function() {
  contrastvalue.innerHTML = this.value;
  videoFilters.find(el => el.filterName === 'contrast').filterCss = `contrast(${this.value}%)`
  addFilter();
}

let huerotate = document.getElementById("huerotate");
let huerotatevalue = document.getElementById("huerotatevalue");
huerotatevalue.innerHTML = huerotate.value;

huerotate.oninput = function() {
  huerotatevalue.innerHTML = this.value;
  videoFilters.find(el => el.filterName === 'hue-rotate').filterCss = `hue-rotate(${this.value}deg)`
  addFilter();
}
