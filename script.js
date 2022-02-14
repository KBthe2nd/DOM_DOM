document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  let btnText = document.createTextNode("Add Square");
  button.appendChild(btnText);
  document.body.appendChild(button);

  let divButton = document.querySelector(".button");
  let numCount = 0;

  const colorArr = [
    "black",
    "pink",
    "purple",
    "gold",
    "goldenrod",
    "red",
    "blue",
    "yellow",
  ];

  button.addEventListener("click", function () {
    let newDiv = document.createElement("div");
    document.body.appendChild(newDiv);

    newDiv.style.background = "Black";
    newDiv.classList.add("Bbox");
    numCount++;

    newDiv.setAttribute("id", numCount);
    let displaynum = document.createTextNode(numCount);
    newDiv.appendChild(displaynum);
    newDiv.addEventListener("mouseover", function () {
      newDiv.style.color = "white";
      newDiv.style.textAlign = "center";
      newDiv.addEventListener("mouseleave", function () {
        newDiv.style.color = "black";
        newDiv.addEventListener("click", setRandomColor);
        newDiv.addEventListener("dblclick", function () {
          let childTwo = newDiv.nextElementSibling;

          if (newDiv.textContent % 2 == 0 || newDiv.textContent % 2 == 1) {
            childTwo.remove();
          } else{
            alert("No more boxes");
          }
        });
      });
    });
  });
  function setRandomColor() {
    const randomNum = Math.floor(Math.random() * colorArr.length);
    event.target.style.background = colorArr[randomNum];
  }
});
