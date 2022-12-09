const inputJpeg = document.getElementById("jpegInput");
const inputPng = document.getElementById("pngInput");
const jpegName = document.getElementById("jpegName");
const pngName = document.getElementById("pngName");

inputJpeg.addEventListener("change", () => {
  inputPng.value = "";
  jpegName.textContent = inputJpeg.value;
  pngName.textContent = inputPng.value;
});

inputPng.addEventListener("change", () => {
  inputJpeg.value = "";
  pngName.textContent = inputPng.value;
  jpegName.textContent = inputJpeg.value;
});
