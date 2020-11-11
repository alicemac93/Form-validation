
// bottom


const email = document.getElementById("phone");
const telError = document.getElementById("errorTel");
const cardNo = document.getElementById("cardNo");
const cardError = document.getElementById("errorCard")

email.addEventListener("input", function (event) {
    if (email.validity.valid | email.value === "") { //true means it doesnt match the email type so it adds messageto the element
        telError.innerHTML = "";
    } else {
        telError.innerHTML = "Please provide a number with the international prefix '+' and country code, without any spaces or additional characters";
    }
  });

  cardNo.addEventListener("input", function (event) {
    if (cardNo.validity.valid | cardNo.value === "") { //true means it doesnt match the email type so it adds messageto the element
        cardError.innerHTML = "";
    } else {
        cardError.innerHTML = "Please provide a 16 digit card number, without any spaces or additional characters";
    }
  });

