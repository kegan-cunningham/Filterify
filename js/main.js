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
  { filterName: "hue-rotate", filterCss: "hue-rotate(0deg)" },
  { filterName: "rotate", filterCss: "rotate(0deg)" },
  { filterName: "skewX", filterCss: "skewX(0deg)" },
  { filterName: "skewY", filterCss: "skewY(0deg)" }
];

// Deep-dup video filters
let defaultValues = JSON.parse(JSON.stringify(videoFilters));

let masterFilter;
let masterTransform;

function addFilter() {
  masterFilter = '';
  masterTransform = '';
  videoFilters.forEach(fltr => {
    if(fltr.filterName === "rotate" || fltr.filterName === "skewX" || fltr.filterName === "skewY"){
      masterTransform += (fltr.filterCss);
      video.style.transform = masterTransform;
    } else {
      masterFilter += (fltr.filterCss + ' ');
      video.style.filter = masterFilter;
    }
  });
}

function resetAll(){
  masterFilter = '';
  masterTransform = '';
  // Again, deep dup the default values
  videoFilters = JSON.parse(JSON.stringify(defaultValues));
  defaultValues.forEach(fltr => {
    if(fltr.filterName === "rotate" || fltr.filterName === "skewX" || fltr.filterName === "skewY"){
      masterTransform += (fltr.filterCss);
      video.style.transform = masterTransform;
    } else {
      masterFilter += (fltr.filterCss + ' ');
      video.style.filter = masterFilter;
    }
  });

  // Resetting the individual filters. This is something I'd DRY up with continued development.
  let monochrome = document.getElementById("monochrome");
  monochrome.value = 0;
  document.getElementById("monochromevalue").innerHTML = monochrome.value;

  let blur = document.getElementById("blur");
  blur.value = 0;
  document.getElementById("blurvalue").innerHTML = blur.value;

  let brightness = document.getElementById("brightness");
  brightness.value = 100;
  document.getElementById("brightnessvalue").innerHTML = brightness.value;

  let opacity = document.getElementById("opacity");
  opacity.value = 100;
  document.getElementById("opacityvalue").innerHTML = opacity.value;

  let saturation = document.getElementById("saturation");
  saturation.value = 100;
  document.getElementById("saturationvalue").innerHTML = saturation.value;

  let sepia = document.getElementById("sepia");
  sepia.value = 0;
  document.getElementById("sepiavalue").innerHTML = sepia.value;

  let invert = document.getElementById("invert");
  invert.value = 0;
  document.getElementById("invertvalue").innerHTML = invert.value;

  let contrast = document.getElementById("contrast");
  contrast.value = 100;
  document.getElementById("contrastvalue").innerHTML = contrast.value;

  let huerotate = document.getElementById("huerotate");
  huerotate.value = 0;
  document.getElementById("huerotatevalue").innerHTML = huerotate.value;

  let rotate = document.getElementById("rotate");
  rotate.value = 0;
  document.getElementById("rotatevalue").innerHTML = rotate.value;

  let skewX = document.getElementById("skewX");
  skewX.value = 0;
  document.getElementById("skewXvalue").innerHTML = skewX.value;

  let skewY = document.getElementById("skewY");
  skewY.value = 0;
  document.getElementById("skewYvalue").innerHTML = skewY.value;
}

// Initial add of default values
addFilter();

// Functions handling oninput for different filters; with more time I'd DRY these up
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

let rotate = document.getElementById("rotate");
let rotatevalue = document.getElementById("rotatevalue");
rotatevalue.innerHTML = rotate.value;

rotate.oninput = function() {
  rotatevalue.innerHTML = this.value;
  videoFilters.find(el => el.filterName === 'rotate').filterCss = `rotate(${this.value}deg)`
  addFilter();
}

let skewX = document.getElementById("skewX");
let skewXvalue = document.getElementById("skewXvalue");
skewXvalue.innerHTML = skewX.value;

skewX.oninput = function() {
  skewXvalue.innerHTML = this.value;
  videoFilters.find(el => el.filterName === 'skewX').filterCss = `skewX(${this.value}deg)`
  addFilter();
}

let skewY = document.getElementById("skewY");
let skewYvalue = document.getElementById("skewYvalue");
skewYvalue.innerHTML = skewY.value;

let resetButton = document.getElementById("reset-button");
resetButton.onclick = function() {
  resetAll();
}

skewY.oninput = function() {
  skewYvalue.innerHTML = this.value;
  videoFilters.find(el => el.filterName === 'skewY').filterCss = `skewY(${this.value}deg)`
  addFilter();
}
