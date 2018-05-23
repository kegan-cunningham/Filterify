let video = document.getElementById('video');

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    video.srcObject = stream;
    video.play();
  });
}

let videoFilters = [
  { filterName: "monochrome", filterCss: "grayscale(0%)" },
  { filterName: "blur", filterCss: "blur(0px)" },
  { filterName: "brightness", filterCss: "brightness(100%)" },
  { filterName: "opacity", filterCss: "opacity(100%)" },
  { filterName: "saturate", filterCss: "saturate(100%)" },
  { filterName: "sepia", filterCss: "sepia(0%)" },
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

let monochrome = document.getElementById("monochrome");
let monochromevalue = document.getElementById("monochromevalue");
monochromevalue.innerHTML = monochrome.value;

monochrome.oninput = function() {
  monochromevalue.innerHTML = this.value;
  videoFilters.find(el => el.filterName === 'monochrome').filterCss = `grayscale(${this.value}%)`
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

let opacity = document.getElementById("opacity");
let opacityvalue = document.getElementById("opacityvalue");
opacityvalue.innerHTML = opacity.value;

opacity.oninput = function() {
  opacityvalue.innerHTML = this.value;
  videoFilters.find(el => el.filterName === 'opacity').filterCss = `opacity(${this.value}%)`
  addFilter();
}

let saturation = document.getElementById("saturation");
let saturationvalue = document.getElementById("saturationvalue");
saturationvalue.innerHTML = saturation.value;

saturation.oninput = function() {
  saturationvalue.innerHTML = this.value;
  videoFilters.find(el => el.filterName === 'saturate').filterCss = `saturate(${this.value}%)`
  addFilter();
}

let sepia = document.getElementById("sepia");
let sepiavalue = document.getElementById("sepiavalue");
sepiavalue.innerHTML = sepia.value;

sepia.oninput = function() {
  sepiavalue.innerHTML = this.value;
  videoFilters.find(el => el.filterName === 'sepia').filterCss = `sepia(${this.value}%)`
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
