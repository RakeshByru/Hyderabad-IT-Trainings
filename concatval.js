// <!-- Welcome to Hyderabad IT Trainings body section -->
function Validation() {
  let studentname = document.getElementById("StudentName").value;
  let setstudentname = false;
  const studentAlph = /^[a-zA-Z " "]+$/;

  let studentemail = document.getElementById("StudentMail").value;
  let setstudtmail = false;
  const studexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // subject
  let subject = document.getElementById("StudSubject").value;
  let setsubject = false;
  const subtAlph = /^[a-zA-Z " "]+$/;
  //mobile
  let StdPhone = document.getElementById("StudMobile").value;
  let setPhone = false;
  const Phoneexp = /^[0-9]+$/;
  // message

  let StdMessage = document.getElementById("Studmessage").value;
  let setmessage = false;

  //   name
  if (studentname == "") {
    document.getElementById("valStudentname").innerHTML =
      "Please enter your name";
    setstudentname = false;
  } else {
    document.getElementById("valStudentname").innerHTML = " ";
    setstudentname = true;
    if (studentname.match(studentAlph)) {
      document.getElementById("valStudentname").innerHTML = "";
      setstudentname = true;
    } else {
      document.getElementById("valStudentname").innerHTML = " Only char allow";
      setstudentname = false;
    }
  }

  //   email

  if (studentemail == "") {
    document.getElementById("valStudentmail").innerHTML =
      "Please enter your mail";
    setstudtmail = false;
  } else {
    document.getElementById("valStudentmail").innerHTML = " ";
    setstudtmail = true;
    if (studentemail.match(studexp)) {
      document.getElementById("valStudentmail").innerHTML = "";
      setstudtmail = true;
    } else {
      document.getElementById("valStudentmail").innerHTML =
        "Please enter validate mail ";
      setstudtmail = false;
    }
  }

  //  subject
  if (subject == "") {
    document.getElementById("valsubject").innerHTML =
      "Please enter your subject";
    setsubject = false;
  } else {
    document.getElementById("valsubject").innerHTML = " ";
    setsubject = true;
    if (subject.match(subtAlph)) {
      document.getElementById("valsubject").innerHTML = " ";
      setsubject = true;
    } else {
      document.getElementById("valsubject").innerHTML = " Only char allow";
      setsubject = false;
    }
  }

  //mobile

  if (StdPhone == "") {
    document.getElementById("valstdphone").innerHTML = "Please enter number";
    setPhone = false;
  } else {
    document.getElementById("valstdphone").innerHTML = " ";
    setPhone = true;
    if (StdPhone.match(Phoneexp)) {
      if (StdPhone.length == 10) {
        document.getElementById("valstdphone").innerHTML = " ";
        setPhone = true;
      } else {
        document.getElementById("valstdphone").innerHTML =
          "Enter only 10 digits ";
        setPhone = false;
      }
    } else {
      document.getElementById("valstdphone").innerHTML = "Allow Only Number ";
      setPhone = true;
    }
  }

  // message
  if (StdMessage == "") {
    document.getElementById("valstdmessage").innerHTML =
      "Please, leave us a message.";
    setmessage = false;
  } else {
    document.getElementById("valstdmessage").innerHTML = " ";
    setmessage = true;
  }

  //   console
  if (
    setstudentname === true &&
    setstudtmail === true &&
    setPhone === true &&
    setsubject === true &&
    setmessage === true
  ) {
    return true;
  } else {
    return false;
  }
}
