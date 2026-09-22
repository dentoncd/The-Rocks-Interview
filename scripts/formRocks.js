window.addEventListener("load", function() {
    formSetup();

    // Watch for name checkbox
    let nickNameChk = document.getElementById("sameName");
        nickNameChk.addEventListener("change", function() {
            duplicateName();
    });

    // Watch for rock interview change
    let categorySelect = document.getElementById("questions");
        categorySelect.addEventListener("change", function() {
            rockSelection(categorySelect.value);
    });

    // Validation
    let form = document.getElementsByTagName("form")[0];
    form.addEventListener("submit", function(evt) {
        evt.preventDefault();
        if (validateForm()) {
            form.submit();
        }
    });
});

function formSetup() {
    document.getElementsByTagName("select")[0].value = -1;
}

function rockSelection(rockChoice) {
    let rockCount = document.getElementById("rockCountContainer");
    let moissaniteMsg = document.getElementById("moissaniteMsg");
    let selectElement = document.getElementById("questions");

    if (rockChoice === "Moissanite") {
        moissaniteMsg.style.display = "inline-block";
        rockCount.style.display = "none";
    }
    else {
        rockCount.style.display = "inline-block";
        moissaniteMsg.style.display = "none";
    }
}

function duplicateName() {
    let sameNameChk = document.getElementById("sameName");
    let nickNameVal = document.getElementById("nickName").value;
    let petRockTxt = document.getElementById("petRock");
    if (sameNameChk.checked) {
        petRockTxt.value = nickNameVal;
    }
    else {
        petRockTxt.value = "";
    }
}

function validateForm() {
    removeErrors();
    let result = false;
    let errorContainer = document.getElementById("errorContainer");
    let errorMsg = "";

    let fnameTxt = document.getElementById("fname");
    if (document.getElementById("fname").value.length === 0) {
        errorMsg += "Missing First Name<br>";
        result = false;
        fnameTxt.style.backgroundColor = "rgb(248, 180, 180)";
    }

    let lnameTxt = document.getElementById("lname");
    if (document.getElementById("lname").value.length === 0) {
        errorMsg += "Missing Last Name<br>";
        result = false;
        lnameTxt.style.backgroundColor = "rgb(248, 180, 180)";
    }

    let nickNameTxt = document.getElementById("nickName");
    if (document.getElementById("nickName").value.length === 0) {
        errorMsg += "Missing Nickname<br>";
        result = false;
        nickNameTxt.style.backgroundColor = "rgb(248, 180, 180)";
    }

    let petRockTxt = document.getElementById("petRock");
    if (document.getElementById("petRock").value.length === 0) {
        errorMsg += "Missing Pet Rock's Name<br>";
        result = false;
        petRockTxt.style.backgroundColor = "rgb(248, 180, 180)";
    }

    let questionsTxt = document.getElementById("questions");
    if (document.getElementById("questions").value.length === 0) {
        errorMsg += "Favorite Rock<br>";
        result = false;
        questionsTxt.style.backgroundColor = "rgb(248, 180, 180)";
    }

    let ageTxt = document.getElementById("age");
    if (ageTxt.value.length === 0) {
        errorMsg += "Missing Age<br>";
        result = false;
        ageTxt.style.backgroundColor = "rgb(248, 180, 180)";
    }
    else if(isNaN(ageTxt.value)) {
        errorMsg += "Age must be a number!<br>";
        result = false;
        ageTxt.style.backgroundColor = "rgb(248, 180, 180)";
    }

    // Show errors
    errorContainer.innerHTML = errorMsg;
    return result;
}

function removeErrors() {
    let inputElems = document.getElementsByTagName("input");
    for (let i = 0; i < inputElems.length; ++i) {
        inputElems[i].style.backgroundColor = "white";
    }
}