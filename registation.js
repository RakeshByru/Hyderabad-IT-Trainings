function validation() {
  let reginame = document.getElementById("Rname").value;
  let setrname = false;
  const studenrAlph = /^[a-zA-Z " "]+$/;
  // cource
  let regicourse = document.getElementById("Coueses").value;
  let setrcourse = false;
  const courseAlph = /^[a-zA-Z " "]+$/;

  // Training courses

  let regitraining = document.getElementById("Training").value;
  let setrtining = false;

  // email
  let regiemail = document.getElementById("Rmail").value;
  let setregmail = false;
  const regemailexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // subject
  let regsubject = document.getElementById("Rsubject").value;
  let setregsubject = false;
  const subregAlph = /^[a-zA-Z " "]+$/;

  //   resgistration MOBILE

  let Regphone = document.getElementById("Regmobile").value;
  let setregiPhone = false;
  const regiPhoneexp = /^[0-9]+$/;

  // Regestation
  let regMessage = document.getElementById("Rmessage").value;
  let setregregmessage = false;

  // regitration name
  if (reginame == "") {
    document.getElementById("Regname").innerHTML = "Name is required.";
    setrname = false;
  } else {
    document.getElementById("Regname").innerHTML = " ";
    setrname = true;
    if (reginame.match(studenrAlph)) {
      document.getElementById("Regname").innerHTML = " ";
      setrname = true;
    } else {
      document.getElementById("Regname").innerHTML = " Only char allow";
      setrname = false;
    }
  }
  // cource
  if (regicourse == "") {
    document.getElementById("Regcourses").innerHTML = "Name is required.";
    setrcourse = false;
  } else {
    document.getElementById("Regcourses").innerHTML = " ";
    setrname = true;
    if (regicourse.match(courseAlph)) {
      document.getElementById("Regcourses").innerHTML = " ";
      setrcourse = true;
    } else {
      document.getElementById("Regcourses").innerHTML = " Only char allow";
      setrcourse = false;
    }
  }

  //   Training courses

  if (regitraining == "") {
    document.getElementById("Regtrining").innerHTML = " ";
    setrtining = false;
  } else {
    document.getElementById("Regtrining").innerHTML = " ";
    setrtining = true;
  }

  // registration  email

  if (regiemail == "") {
    document.getElementById("Regmail").innerHTML = "Valid email is required.";
    setregmail = false;
  } else {
    document.getElementById("Regmail").innerHTML = " ";
    setregmail = true;
    if (regiemail.match(regemailexp)) {
      document.getElementById("Regmail").innerHTML = "";
      setregmail = true;
    } else {
      document.getElementById("Regmail").innerHTML =
        "Please enter validate mail ";
      setregmail = false;
    }
  }

  //   resgistration subject
  if (regsubject == "") {
    document.getElementById("RegSubject").innerHTML = "Subject is required.";
    setregsubject = false;
  } else {
    document.getElementById("RegSubject").innerHTML = " ";
    setregsubject = true;
    if (regsubject.match(subregAlph)) {
      document.getElementById("RegSubject").innerHTML = " ";
      setregsubject = true;
    } else {
      document.getElementById("RegSubject").innerHTML = " Only char allow";
      setregsubject = false;
    }
  }

  //   resgistration MOBILE

  if (Regphone == " ") {
    document.getElementById("RegPhone").innerHTML = "Phone is required.";
    setregiPhone = false;
  } else {
    document.getElementById("RegPhone").innerHTML = " ";
    setregiPhone = true;
    if (Regphone.match(regiPhoneexp)) {
      if (Regphone.length == 10) {
        document.getElementById("RegPhone").innerHTML = " ";
        setregiPhone = true;
      } else {
        document.getElementById("RegPhone").innerHTML = "Enter only 10 digits ";
        setregiPhone = false;
      }
    } else {
      document.getElementById("RegPhone").innerHTML = "Allow Only Number ";
      setregiPhone = true;
    }
  }

  // meaasge
  if (regMessage == "") {
    document.getElementById("Regmessage").innerHTML =
      "Please,leave us a message.";
    setregregmessage = false;
  } else {
    document.getElementById("Regmessage").innerHTML = " ";
    setregregmessage = true;
  }

  //   working

  if (
    setrname === true &&
    setrcourse === true &&
    setrtining === true &&
    setregmail === true &&
    setregsubject === true &&
    setregiPhone === true &&
    setregregmessage === true
  ) {
    return true;
  } else {
    return false;
  }
}
