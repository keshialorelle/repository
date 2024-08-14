const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox2.jpg") {
    myImage.setAttribute("src", "images/firefox2jpg");
  } else {
    myImage.setAttribute("src", "images/firefox2jpg");
  }
};
