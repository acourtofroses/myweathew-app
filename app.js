function series() {
  let name = prompt("What is your name?");
  let age = prompt("How old are you?");
  let site = prompt("What website do you want to watch on?");
  if (age >= "18") {
    alert(
      name + ",you can watch House of the Dragon" + " " + "on " + site + "😁"
    );
  } else {
    alert(
      "Unfortunately," +
        name +
        " " +
        "you cannot watch due to age restriction" +
        "🥺"
    );
  }
}
let watch = document.querySelector("button");
watch.addEventListener("click", series);
