var firebaseConfig = {
    apiKey: "AIzaSyAAQbSs-mZyvtUWtvLWPiZQ4wZ-SenHT-E",
    authDomain: "contactform-896d8.firebaseapp.com",
    databaseURL: "https://contactform-896d8.firebaseio.com",
    projectId: "contactform-896d8",
    storageBucket: "",
    messagingSenderId: "47609510581",
    appId: "1:47609510581:web:3ab5be42cc49463c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Reference messages collection
var messagesRef = firebase.database().ref("messages");
// Listen for form submit 
document.getElementById('contactForm').addEventListener('submit', submitForm);
// submit form 
function submitForm(e) {
    e.preventDefault();
    //Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var text = getInputVal('text');
    // Save message 	
    saveMessage(name, email, text);
    document.getElementById('contactForm').reset();
}
//Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}
// Save message to firebase
function saveMessage(name, email, text) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        text: text
    });
}

function recaptcha_callback() {
    var submitbutton = document.querySelector('#submit');
    submitbutton.removeAttribute('disabled');
    submitbutton.getElementsByClassName.cursor = 'pointer';
    
}
