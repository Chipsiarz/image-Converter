const inputJpeg = document.getElementById("jpegInput");
const inputPng = document.getElementById("pngInput");

inputJpeg.addEventListener("change", () => {
  console.log("działa1");
  inputPng.value = "";
});

inputPng.addEventListener("change", () => {
  console.log("działą2");
  inputJpeg.value = "";
});

console.log("działa3");
