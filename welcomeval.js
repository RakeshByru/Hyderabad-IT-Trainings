// <!-- Welcome to Hyderabad IT Trainings body section -->
function validation() {
  let username = document.getElementById("Name").value;
  let setname = false;
  const nameAlph = /^[a-zA-Z " "]+$/;

  let Mail = document.getElementById("mail").value;
  let setmail = false;
  const emailexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let Mobile = document.getElementById("mobile").value;
  let setmobile = false;
  const mobileexp = /^[0-9]+$/;

  //   name
  if (username == "") {
    document.getElementById("valname").innerHTML = "Please enter your name";
    setname = false;
  } else {
    document.getElementById("valname").innerHTML = " ";
    setname = true;
    if (username.match(nameAlph)) {
      document.getElementById("valname").innerHTML = "";
      setname = true;
    } else {
      document.getElementById("valname").innerHTML = " Only char allow";
      setname = false;
    }
  }

  //   email

  if (Mail == "") {
    document.getElementById("valmail").innerHTML = "Please enter your mail";
    setmail = false;
  } else {
    document.getElementById("valmail").innerHTML = " ";
    setmail = true;
    if (Mail.match(emailexp)) {
      document.getElementById("valmail").innerHTML = "";
      setmail = true;
    } else {
      document.getElementById("valmail").innerHTML =
        "Please enter validate mail ";
      setmail = false;
    }
  }

  //mobile
  if (Mobile == "") {
    document.getElementById("valmobile").innerHTML = "Enter your number";
    setmobile = false;
  } else {
    document.getElementById("valmobile").innerHTML = " ";
    setmail = true;
    if (Mobile.match(mobileexp)) {
      if (Mobile.length == 10) {
        document.getElementById("valmobile").innerHTML = " ";
        setmail = true;
      } else {
        document.getElementById("valmobile").innerHTML =
          "Please enter 10 digits";
        setmail = false;
      }
    } else {
      document.getElementById("valmobile").innerHTML = "only Digits allow ";
      setmail = false;
    }
  }

  //   console
  if (setname === true && setmail === true && setmobile === true) {
    return true;
  } else {
    return false;
  }
}
