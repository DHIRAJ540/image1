var canvas = new fabric.Canvas("canvas");

document.getElementById("img").addEventListener("change", (e) => {
  console.log("hiii");
  var reader = new FileReader();
  reader.onload = function (event) {
    var imgObj = new Image();
    imgObj.src = event.target.result;

    imgObj.onload = function () {
      canvas.setHeight(this.height);
      canvas.setWidth(this.width);
      var image = new fabric.Image(imgObj);
      image.set({
        angle: 0,
        padding: 10,
        cornersize: 10,
      });
      canvas.centerObject(image);
      canvas.add(image);
      canvas.renderAll();
    };
  };
  reader.readAsDataURL(e.target.files[0]);
});


