const express = require("express");
const upload = require("express-fileupload");
const Jimp = require("jimp");

const app = express();

app.use(upload());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  if (req.files) {
    var file = req.files.file;
    var fileName = file.name;

    file.mv("./Uploads/" + fileName, function (err) {
      if (err) {
        res.send(err);
      } else {
        Jimp.read(`Uploads/${fileName}`).then((image) => {
          if (fileName.match(/\.(jpg|jpeg)$/i)) {
            (async () => {
              await image.writeAsync(
                `Uploads/${fileName
                  .replace(/\.jpg$/, ".png")
                  .replace(/\.jpeg$/, ".png")}`
              );
              await res.download(
                `Uploads/${fileName
                  .replace(/\.jpg$/, ".png")
                  .replace(/\.jpeg$/, ".png")}`
              );
            })();
          } else
            (async () => {
              await image.writeAsync(
                `Uploads/${fileName.replace(/\.png$/, ".jpeg")}`
              );
              await res.download(
                `Uploads/${fileName.replace(/\.png$/, ".jpeg")}`
              );
            })();
        });
      }
    });
  }
});

app.listen(8080);
