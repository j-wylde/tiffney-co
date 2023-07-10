function sendEmail(){
const senderName = document.querySelector("#name").value;
const email = document.querySelector("#email").value;
const phone = document.querySelector("#tel").value;
const msg = document.querySelector("#msg").value;
let reply = document.querySelector(".responseText");

Email.send({
  secureToken: "d71db374-5c65-4aae-a2c5-346496b28438",
  Host: "smtp.elasticemail.com",
  Username: "declan@tiffney.co.uk",
  Password: "D1ECAF838C44510625D7C603A10658A87D4C",
  To: 'declan@tiffney.co.uk',
  From: email,
  Subject: "New Contact Form Message From tiffney.co.uk",
  Body: `Name: <b>${senderName}</b>\nEmail: <b>${email}</b>\nPhone: <b>${phone}</b>\n\n<em>${msg}</em>`,
}).then(
message => alert(message)
);
}