function sendEmail(name, email, message) {
  emailjs.send("service_l5eto4e", "template_2fgi6ym", {
    to_name: email,
    from_name: name,
    message: message,
  });
}

function error(title="Oh No... Something is wrong! 😥",text="Please verify if some field is empty") {
  swal({
    title: title,
    text: text,
    icon: "error",
  });
}

function success() {
  swal({
    title: "Email Sent Successfuly!",
    text: "I will try to reply in 24 hours 😎",
    icon: "success",
  });
}



const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validateForm() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let message = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener("click", (e) => {
    //console.log("Cliquei");
    // Evitar que o formulário seja enviado para o endpoint em action
    e.preventDefault();

    if (name.value == "" || email.value == "" || message.value == "") {
      error();
    }
    else if(!validateEmail(email.value)  || email.value == ""){
      error(text="Your email its not a valid one!");
    }
    else {
      sendEmail(name.value, email.value, message.value);
      // Reseta os campos do formulário
      name.value="";
      email.value="";
      message.value="";
      success();
    }
  });
}

validateForm();
