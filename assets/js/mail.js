// function sendMail() {
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value
//     };
    
    
    
//     emailjs.send("service_oranos07","template_oranos07", params)
//         .then(res=>{
//             document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("message").value = "";
//             window.scrollTo({top: 0,behavior: 'smooth'});
    
//         }).catch(err=>console.log(err));
    
    
    
//     }
    
    
    
//     // check the email validity
//     function isValidEmail(email) {
//         const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if(!pattern.test(email)){
//             return false;
//         }else{
//             return true;
//         }
//     }
//     // check the inputs if they are filled
//     function isInputFilled(Name,email,message) {
//         if (Name !== "" && email !== "" && message !== ""){
//             return true;
//         }else{
//             return false;
//         }
//     }
    
//     function disableSubmitBtn() {
//         const Name = document.getElementById("name").value;
//         const email = document.getElementById("email").value;
//         const message = document.getElementById("message").value;
//         const submitBtn = document.getElementById("submitBtn");
    
//         if (isInputFilled(Name,email,message) && isValidEmail(email)) {
//             submitBtn.removeAttribute("disabled");
//         } else {
//             submitBtn.setAttribute("disabled", "");
//         }
//     }
//     // the inputs has to be checked if it"s filled or not so i used input/oninput event, so everytime the input change it will be checked!
//     document.getElementById("name").addEventListener("input", disableSubmitBtn);
//     document.getElementById("message").addEventListener("input", disableSubmitBtn);
//     document.getElementById("email").addEventListener("input", disableSubmitBtn);
    
//     // Initially disable the button
//     disableSubmitBtn();








function sendMail(event) {
    // Prevent the default form submission behavior (it scrolls a bit to the top when i submitttt)
    event.preventDefault();
    
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    
    emailjs.send("service_oranos07", "template_oranos07", params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            window.location.reload();
        }).catch(err => console.log(err));
}

// Check the email validity
function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// Check if the inputs are filled
function isInputFilled(Name, email, message) {
    return Name !== "" && email !== "" && message !== "";
}

// Disable the submit button if inputs are not valid
function disableSubmitBtn() {
    const Name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const submitBtn = document.getElementById("submitBtn");
    
    if (isInputFilled(Name, email, message) && isValidEmail(email)) {
        submitBtn.removeAttribute("disabled");
    } else {
        submitBtn.setAttribute("disabled", "");
    }
}

// the inputs has to be checked if it"s filled or not so i used input/oninput event, so everytime the input change it will be checked!     
document.getElementById("name").addEventListener("input", disableSubmitBtn);
document.getElementById("message").addEventListener("input", disableSubmitBtn);
document.getElementById("email").addEventListener("input", disableSubmitBtn);

// Add event listener to the form submit event
document.getElementById("footerForm").addEventListener("submit", sendMail);


disableSubmitBtn();

