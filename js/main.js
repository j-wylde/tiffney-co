(function() {
  emailjs.init('VfVJqHx5OvuAN819r');
})();

document.querySelector("#contact-form").onsubmit = function(e){
  e.preventDefault();
  
  let reply = document.querySelector("#responseText");
  const serviceID = "service_sqfdgfo";
  const templateID = "template_zxgcnhl";

  // send the email here
  emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
      reply.textContent = "SUCCESS!", response.status, response.text;
      alert("Message Sent!")
    },
    (error) => {
      reply.textContent = "FAILED...", error;
      alert("Please, Try Again")
    }
  );
};