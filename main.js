const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox im.jfif") {
    myImage.setAttribute("src", "images/firefox im.jfif");
  } else {
    myImage.setAttribute("src", "images/firefox im.jfif");
  }
};