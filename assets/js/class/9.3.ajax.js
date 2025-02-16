const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.npoint.io/20c6431a3f3c4d8f740c", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    const response = xhr.responseText;
    console.log("Response :", JSON.parse(response));
  } else {
    console.error("Error :", xhr.status);
  }
};

xhr.send();
