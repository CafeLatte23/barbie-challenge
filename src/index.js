function enterBarbieland() {
  let name = prompt("What is your name?");
  let age = prompt("How old are you?");
  if (age < 18) {
    alert(
      "Sorry, you can't get into Barbieland. You have to be 18 and above 😭"
    );
  } else {
    let email = prompt("What is your email address?");
    alert(
      "Thanks " +
        name +
        ", we've sent you directions to Barbieland! 💖 Look forward to seeing you there! 🤩"
    );
  }
}
let barbieButton = document.querySelector(".primary-button");
barbieButton.addEventListener("click", enterBarbieland);
