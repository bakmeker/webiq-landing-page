`use strict`;

const navLinks = document.getElementById(`navLinks`);
const exit = document.getElementById(`exit`);
const bar = document.getElementById(`bar`);

exit.addEventListener(`click`, function () {
  navLinks.style.right = `-200px`;
});

bar.addEventListener(`click`, function () {
  navLinks.style.right = `0px`;
});

const button1 = document.getElementById(`changeImageButton1`);
const button2 = document.getElementById(`changeImageButton2`);
const button3 = document.getElementById(`changeImageButton3`);

button1.addEventListener(`click`, function () {
  console.log("click");
  img1.src = "images/zenithWeb.jpg";
  img2.src = "images/logo11.jpg";
  img3.src = "images/visit10.jpg";
});

button2.addEventListener(`click`, function () {
  console.log("click");
  img1.src = "images/web2.jpg";
  img2.src = "images/logo12.jpg";
  img3.src = "images/visit12.jpg";
});

button3.addEventListener(`click`, function () {
  console.log("click");
  img1.src = "images/web3.jpg";
  img2.src = "images/logo20.jpg";
  img3.src = "images/visit20.jpg";
});
