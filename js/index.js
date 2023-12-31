`use strict`;

const navLinks = document.getElementById(`navLinks`);
const exit = document.getElementById(`exit`);
const bar = document.getElementById(`bar`);


const button1 = document.getElementById(`changeImageButton1`);
const button2 = document.getElementById(`changeImageButton2`);
const button3 = document.getElementById(`changeImageButton3`);


function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

if (isMobile()) {
  button1.addEventListener(`click`, function () {
    console.log("mobile");
    mobileimg.src = "images/combo1.jpg";
  });
  
  button2.addEventListener(`click`, function () {
    console.log("mobile");
    mobileimg.src = "images/combo2.jpg";
  });
  
  button3.addEventListener(`click`, function () {
    console.log("mobile");
    mobileimg.src = "images/combo3.jpg";
  
  })
} else {

button1.addEventListener(`click`, function () {
  console.log("pc");
  img1.src = "images/zenithWeb.jpg";
  img2.src = "images/logo11.jpg";
  img3.src = "images/visit10.jpg";
});

button2.addEventListener(`click`, function () {
  console.log("pc");
  img1.src = "images/web2.jpg";
  img2.src = "images/logo12.jpg";
  img3.src = "images/visit12.jpg";
  
});

button3.addEventListener(`click`, function () {
  console.log("pc");
  img1.src = "images/web3.jpg";
  img2.src = "images/logo20.jpg";
  img3.src = "images/visit20.jpg";

});

}