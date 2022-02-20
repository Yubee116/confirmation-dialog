function confirmationDialog(message) {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get modal content message element
    var dialogMessage = document.getElementsByClassName("dialogMessage")[0];
    // Get the yes button
    var yes = document.getElementById("yes");
    // Get the cancel button
    var cancel = document.getElementById("cancel");

    // Display the modal
    dialogMessage.innerHTML = message;
    modal.style.display = "block";

    // When the user clicks on yes, close the modal
    yes.onclick = function () {
        modal.style.display = "none";
        mainPage(this.value);
    }

    // When the user clicks on cancel, close the modal
    cancel.onclick = function () {
        modal.style.display = "none";
        mainPage(this.value);
    }
}

function mainPage(result) {
    // Define text
    var confirmationText = "You just clicked ";

    // Get the paragraph element
    var screenText = document.getElementById("screenText");

    // Set the result to the paragraph element
    screenText.innerHTML = confirmationText + "\"" + result + "\"";
}