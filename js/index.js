var mint = document.getElementById("net");

var kit = setInterval(() => {
  //   kit;
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 130) {
    mint.classList.add("mint-5");
}
if (window.pageYOffset < 20) {
      mint.classList.remove("mint-5");
  }
}, 200);
