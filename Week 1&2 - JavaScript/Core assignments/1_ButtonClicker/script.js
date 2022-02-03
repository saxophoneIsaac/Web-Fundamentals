console.log("Testing...");

var logIn = false;

function logInOut(element) {

    if (logIn == false) {
        element.innerText = "Log Out";
        logIn = true;
    } else {
        element.innerText = "Log In";
        logIn = false;
    }
    return;
}