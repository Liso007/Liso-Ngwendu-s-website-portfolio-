const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();


const nodemailer = require("nodemailer");




function sendmail(name, email, text){

  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: "zumakhamna@gmail.com",
      pass: "oijhuoyrf45" 
    }
  });

  // Mail Sender transport object
  transporter.sendMail({
    from: "zumakhamna@gmail.com", 
    to: "ngwenduliso@gmail.com", 
    subject: "Firebase Message",
    html: `
    <p><strong>Name</strong></p>
    ${name}
    <p><strong>Email</strong></p>
    ${email}
    <p><strong>Message</strong></p>
    ${text}
     
    `
  });

 
}


exports.makeUppercase = functions.database.ref('/messages/{pushId}')
    .onCreate((snapshot, context) => {

      const original = snapshot.val();
      var name = original.name;
      var email = original.email;
      var text = original.text;

      sendmail( name, email, text);
      return null;
    });
