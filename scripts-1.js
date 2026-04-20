function callDateTime() {
    var currentDate = (new Date()).toDateString();
    var currentTime = (new Date()).toLocaleTimeString();
    document.getElementById('date').innerHTML = `${currentDate} - ${currentTime}`;

}
setInterval(callDateTime, 1000);

const painSlider = document.getElementById('painLevel');
let painNumber = painSlider.value;
painSlider.addEventListener("input", painSliderUpdater);

function painSliderUpdater(){
painNumber = painSlider.value;
document.getElementById('painNumber').innerText = painNumber;
}

function openModal() {
    document.getElementById("reviewModal").style.display = "block";
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let mint = document.getElementById('mint').value;
    document.getElementById('fnameR').innerText = "First Name: "+ fname;
    document.getElementById('lnameR').innerText = "Last Name: "+ lname;
    document.getElementById('mintR').innerText = "Middle Int: "+ mint;
    let dob = document.getElementById('dob').value;
    let ssn = document.getElementById('ssn').value;
    document.getElementById('dobR').innerText = "Date of Birth: "+ dob;
    document.getElementById('ssnR').innerText = "SSN: "+ ssn;
    let phone = document.getElementById('Phone').value;
    let email = document.getElementById('Email').value;
    let optin = document.getElementById('Opt-in').value;
    document.getElementById('PhoneR').innerText = "Phone: "+ phone;
    document.getElementById('EmailR').innerText = "E-Mail: "+ email;
    document.getElementById('OptinR').innerText = "Opt-In for texts: "+ optin;
    let add1 = document.getElementById('addLine1').value;
    let add2 = document.getElementById('addLine2').value;
    let city = document.getElementById('City').value;
    let state = document.getElementById('State').value;
    let zip = document.getElementById('Zip').value;
    document.getElementById('addLine1R').innerText = "Address Line 1: "+ add1;
    document.getElementById('addLine2R').innerText = "Address Line 2: "+ add2;
    document.getElementById('CityR').innerText = "City: "+ city;
    document.getElementById('StateR').innerText = "State: "+ state;
    document.getElementById('ZipR').innerText = "Zip: "+ zip;
    let painLevel = document.getElementById('painLevel').value;
    let payment = document.getElementById('payment').value;
    let sex = document.getElementById('sex').value;
    let userID = document.getElementById('UserID').value;
    document.getElementById('painLevelR').innerText = "Pain Level: "+ painLevel;
    document.getElementById('userIDR').innerText = "UserID: "+ userID;
    document.getElementById('sexR').innerText = "Sex: "+ sex;
    document.getElementById('paymentR').innerText = "Payment Method: "+ payment;
}

function closeModal() {
    document.getElementById("reviewModal").style.display = "none";
}

function handleReview() {
  const form = document.querySelector('form');

  if (form.checkValidity()) {
    openModal(); // only open if valid
  } else {
    form.reportValidity(); // shows browser errors
  }
}