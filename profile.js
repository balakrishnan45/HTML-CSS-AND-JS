
function onClickResetBtn() {
    // Basic Information reset
    document.getElementById("empid").value = "";
    document.getElementById("emailAdd").value = "";
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("fullName").value = "";
    document.getElementById("otherEmail").value = "";
    document.getElementById("nickName").value = "";

    // Personal Details reset
    document.getElementById("dateOfBirth").value = "";
    document.getElementById("perMobNum").value = "";
    document.getElementById("perEmailID").value = "";
    document.getElementById("EmerContNum").value = "";
    document.getElementById("emerContPerson").value = "";
    document.getElementById("fatherName").value = "";
    document.getElementById("motherName").value = "";
    document.getElementById("Gender").value = "";
    document.getElementById("MaritalStatus").value = "";
    document.getElementById("PANNumber").value = "";
    document.getElementById("AadhaarNumber").value = "";
    document.getElementById("NameAsPerAadhaar").value = "";
    document.getElementById("Resume").value = "";
    document.getElementById("PresentAddress").value = "";
    document.getElementById("PermanentAddress").value = "";

    // Bank Information reset
    document.getElementById("bankName").value = "";
    document.getElementById("nameasperBankPassbook").value = "";
    document.getElementById("IFSCCode").value = "";
    document.getElementById("CancelledChequeOrPassbook").value = "";
}


function onClickSubmitBtn() {
    if (basicInformation() && personalDetails() && bankInformation()) {
        // onClickResetBtn();
        alert("All validations successful!");
        location.reload();
        
    } else {
        alert("Some fields are invalid. Please check again.");
    }
}


// Basic Information

function basicInformation() {
    let valid = true;
    if (!isValidEmployeeID("empid")) valid = false;
    // // if (!isValidEmail("emailAdd")) valid = false;
    if (!isValidName("fName")) valid = false;
    if (!isValidName("lName")) valid = false;
    // if (!isValidName("fullName")) valid = false;
    // if (!isValidEmail("otherEmail")) valid = false;
    // if (!isValidName("nickName")) valid = false;
    return valid;
}


//Personal Details

function personalDetails() {
    let valid = true;
    if (!isNotEmpty("dateOfBirth")) valid = false;
    if (!isValidMobile("perMobNum")) valid = false;
    if (!isValidEmail("perEmailID")) valid = false;
    if (!isValidMobile("EmerContNum")) valid = false;
    if (!isNotEmpty("emerContPerson")) valid = false;
    if (!isValidName("fatherName")) valid = false;
    if (!isValidName("motherName")) valid = false;
    if (!isValidName("Gender")) valid = false;
    if (!isValidName("MaritalStatus")) valid = false;
    if (!isValidPAN("PANNumber")) valid = false;
    if (!isValidAadhaar("AadhaarNumber")) valid = false;
    if (!isValidName("NameAsPerAadhaar")) valid = false;
    if (!isNotEmpty("Resume")) valid = false;
    if (!isNotEmpty("PresentAddress")) valid = false;
    if (!isNotEmpty("PermanentAddress")) valid = false;
    return valid;
}


// Bank Information

function bankInformation() {
    let valid = true;
    if (!isValidName("bankName")) valid = false;
    if (!isValidName("nameasperBankPassbook")) valid = false;

    if (!isValidIFSC("IFSCCode")) valid = false;
    if (!isNotEmpty("CancelledChequeOrPassbook")) valid = false;
    if (!isValidBankAccountNumber("BankAccountNumber")) valid = false;
    return valid;
}

function isValidBankAccountNumber(id){
    //State Bank of India (SBI)                         -   11 or 15    
    //Indian Overseas Bank (IOB)                        -   15
    //Corporation Bank                                  -   15
    //Axis Bank                                         -   15 or 16
    //Punjab National Bank (PNB), Bank of Baroda (BOB)  -    14
    //Canara Bank, Kotak Mahindra Bank, IDBI Bank
    //HDFC Bank                                         - 14 or 16
    //Yes Bank                                          -   16
    //Union Bank of India                               -       12

    //ICICI Bank                                        -    12 or 16 digits
    //Central Bank of India                             -     10 or 12 digits
    //Indian Bank                                       -    9 to 15 digits
    //
    //

    console.log(id);
    // if(document.getElementById(id).value == num) return false;
    // console.log(document.getElementById(id).value);
    
    var bankAccountNumber = document.getElementById(id).value;  
    var bankName = document.getElementById("bankName").value;

    if(bankName == "StateBankofIndia"){
        if(isValidDigit(bankAccountNumber,11) || isValidDigit(bankAccountNumber,15)) return true;
        document.getElementById(id).value = "";
        return false
    }
    else if(bankName == "IndianOverseasBank" || bankName == "Corporation Bank"){
        if(isValidDigit(bankAccountNumber,15)) return true;
        document.getElementById(id).value = "";
        return false
    }
    else if(bankName == "Axis Bank"){
        if(isValidDigit(bankAccountNumber,15) || isValidDigit(bankAccountNumber,16)) return true;
        document.getElementById(id).value = "";
        return false
    }
    else if(bankName == "PunjabNationalBank" || bankName == "BankofBaroda" || bankName == "CanaraBank" || bankName == "KotakMahindraBank" || bankName == "IDBIBank"){
        if(isValidDigit(bankAccountNumber,14)) return true;
        document.getElementById(id).value = "";
        return false
    }
    else if(bankName == "HDFCBank"){
        if(isValidDigit(bankAccountNumber,14) || isValidDigit(bankAccountNumber,16)) return true;
        document.getElementById(id).value = "";
        return false
    }
    else if(bankName == "YesBank"){
        if(isValidDigit(bankAccountNumber,16)) return true;
        document.getElementById(id).value = "";
        return false
    }
    else if(bankName == "UnionBankofIndia"){
        if(isValidDigit(bankAccountNumber,12)) return true;
        document.getElementById(id).value = "";
        return false
    }
    else if(bankName == "ICICIBank"){
        if(isValidDigit(bankAccountNumber,12) || isValidDigit(bankAccountNumber,16)) return true;
        document.getElementById(id).value = "";
        return false
    }
    else if(bankName == "CentralBankofIndia"){
        if(isValidDigit(bankAccountNumber,10) || isValidDigit(bankAccountNumber,12)) return true;
        document.getElementById(id).value = "";
        return false
    }
    else if(bankName == "IndianBank"){
        if(isValidDigit(bankAccountNumber,9) || isValidDigit(bankAccountNumber,15)) return true;
        document.getElementById(id).value = "";
        return false
    }
}
function isValidDigit(accountNumber,digit){
    if(accountNumber.length == digit) return true;
    return false;
}

function isValidIFSC(id){
    var IFSCValue = document.getElementById(id).value;
    var regex = /^[A-Z]{4}0[0-9]{6}/
    if(regex.test(IFSCValue)){
        return true;
    }
    document.getElementById(id).value = "";
    return false;
}

function isNotEmpty(id) {
    var val = document.getElementById(id).value;
    if (val.trim().length == 0) {
        document.getElementById(id).value = "";
        return false;
    }
    return true;
}

function isValidEmployeeID(id) {
    // ZS-INC-6543/21
    var val = document.getElementById(id).value;
    if (val.length !== 14) {
        document.getElementById(id).value = "";
        return false;
    }
    if (val.substr(0, 7) !== "ZS-INC-") {
        document.getElementById(id).value = "";
        return false;
    }
    for (var i = 7; i <= 10; i++) {
        if (!(val.charAt(i) >= '0' && val.charAt(i) <= '9')) {
            document.getElementById(id).value = "";
            return false;
        }
    }
    if (val.charAt(11) !== '/') {
        document.getElementById(id).value = "";
        return false;
    }
    if (!(val.charAt(12) >= '0' && val.charAt(12) <= '9') || !(val.charAt(13) >= '0' && val.charAt(13) <= '9')) {
        document.getElementById(id).value = "";
        return false;
    }
    return true;
}

function isValidName(id) {
    var name = document.getElementById(id).value;
    if (name.trim().length == 0) {
        document.getElementById(id).value = "";
        return false;
    }
    for (var i = 0; i < name.length; i++) {
        if (!((name.charAt(i) >= 'a' && name.charAt(i) <= 'z') || 
              (name.charAt(i) >= 'A' && name.charAt(i) <= 'Z') || 
              name.charAt(i) === ' ')) {
            document.getElementById(id).value = "";

            return false;
        }
    }
    return true;
}

function isValidEmail(id) {
    // var email = document.getElementById(id).value;
    // if (email.indexOf('@') < 1 || email.lastIndexOf('.') < email.indexOf('@') + 2 || email.lastIndexOf('.') >= email.length - 1) {
    //     document.getElementById(id).value = "";
    //     return false;
    // }
    // const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // if(!regex.test(email)){
    //     return false;
    // }
    return true;
}

function isValidMobile(id) {
    var mobile = document.getElementById(id).value;
    if (mobile.length !== 10) {
        document.getElementById(id).value = "";
        alert("Mobile number must be 10 digits", "error");
        return false;
    }
    if (!(mobile.charAt(0) === '6' || mobile.charAt(0) === '7' || mobile.charAt(0) === '8' || mobile.charAt(0) === '9')) {
        document.getElementById(id).value = "";
        alert("Mobile number must start with 6, 7, 8, or 9", "error");
        return false;
    }
    return true;
}

function isValidPAN(id) {
    var pan = document.getElementById(id).value;
    var regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}/;
    if (pan.length !== 10) {
        document.getElementById(id).value = "";
        return false;
    }
    else if(!regex.test(pan)){
        document.getElementById(id).value = "";
        return false;
    }
    return true;
}

function isValidAadhaar(id) {
    var aadhaar = document.getElementById(id).value;
    if (aadhaar.length !== 12) {
        document.getElementById(id).value = "";
        return false;
    }
    return true;
}





function showCustomAlert(message) {
    document.getElementById("customAlertMsg").innerText = message;
    document.getElementById("customAlert").style.display = "flex";
}

function closeCustomAlert() {
    document.getElementById("customAlert").style.display = "none";
}


