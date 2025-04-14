// ex 1

// grab the event

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed";
  });

// ex 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    if (citiesList.firstElementChild.classList.contains("highlight")) {
      citiesList.firstElementChild.classList.remove("highlight");
    } else {
      citiesList.firstElementChild.classList.add("highlight");
    }
  });

// Ex 3

document.getElementById("changeOrder").addEventListener("click", function () {
  let order = document.getElementById("coffeeType");
  order.textContent = "Espresso";
  order.style.backgroundColor = "brown";
  order.style.padding = "5px";
});

//Ex 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

// Ex 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    document.getElementById("taskList").lastElementChild.remove();
  });

// Ex 6

document
  .getElementById("clickMeButton")
  .addEventListener("click", function showCustomAlert() {
    Swal.fire({
      title: "Custom Alert!",
      text: "This is a stylish alert box!",
      icon: "success",
      confirmButtonText: "Cool",
      background: "#222",
      color: "#fff",
    });
  });

// Ex 7
document
  .getElementById("teaList")
  .addEventListener("click", function showCustomAlert(event) {
    if (event.target && event.target.matches(".teaItem")) {
      Swal.fire({
        title: "Tea selected",
        text: `You have chosen ${event.target.textContent}`,
        icon: "success",
        confirmButtonText: "Cool",
        background: "#222",
        color: "#fff",
      });
    }
  });

// example 8

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is: ${feedback}`;
  });

// Ex 9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

// Ex 10

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    document.getElementById("descriptionText").classList.toggle("highlight");
  });
