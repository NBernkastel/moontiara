let myHeading = document.querySelectorAll('.form-control');
 for (let i = 0; i < myHeading.length; i++) {
    myHeading[i].addEventListener("input", () => {
        if (myHeading[i].value.length > 5){
        myHeading[i].setAttribute("aria-invalid", "false");
        }
        else {
        myHeading[i].setAttribute("aria-invalid", "true");
        }
});
}
for (let i = 0; i < myHeading.length; i++) {
    myHeading[i].addEventListener("change", () => {
    //    if (myHeading[i].value ==""){
        myHeading[i].removeAttribute("aria-invalid")
    //    }
    });
}
