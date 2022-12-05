const inputJpeg = document.getElementById("jpegInput");
const inputPng = document.getElementById("pngInput");

inputJpeg.addEventListener("change", () => {
  inputPng.value = "";
});

inputPng.addEventListener("change", () => {
  inputJpeg.value = "";
});
