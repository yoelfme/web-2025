const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("inputName").value;
    const email = document.getElementById("inputEmail").value;
    const message = document.getElementById("inputMessage").value;

    // TODO: send data to our server
});

// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     // const name = document.getElementById("inputName").value;
//     // const email = document.getElementById("inputEmail").value;
//     // const message = document.getElementById("inputMessage").value;

//     // console.log(name, email, message);
// });