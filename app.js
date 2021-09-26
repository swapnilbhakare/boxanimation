const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const boxes = document.querySelectorAll(".box");


boxes.forEach((box) => {
  let set_interval
  function animate(){
    box.style.cssText = `
   transform:ScaleY(${Math.random()});
   transition: all .8s ease-in-out;`;
 }

  start.addEventListener("click", (e) => {
    e.preventDefault()
    set_interval = setInterval(animate, 1000);
    console.log("heyy")
  });
  stop.addEventListener("click", (e) => {
    console.log('hey');
    e.preventDefault()
    box.style.cssText = `transform:ScaleY(1)`;
    clearInterval(set_interval);
  });
  // clearInterval(set_interval);


  
});

