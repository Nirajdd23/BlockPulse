function sendImage() {
  const file = document.getElementById("imageInput").files[0];

  if (!file) {
    alert("Please select an image");
    return;
  }

  const reader = new FileReader();

  reader.onloadend = function () {
    const base64 = reader.result.split(',')[1];

    fetch("http://127.0.0.1:5000/test")
      .then(res => res.json())
      .then(data => {
        document.getElementById("output").innerText = data.message;
      });
  };

  reader.readAsDataURL(file);
}
