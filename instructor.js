function validation() {
  let instraname = document.getElementById("Inname").value;
  let setintraname = false;
  const inexp = /^[a-zA-Z " "]+$/;

  //   mail
  let instramail = document.getElementById("Inemali").value;
  let setinstramail = false;
  const inmailexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // skills
  let instrskills = document.getElementById("Inskills").value;
  let setintraskills = false;
  const inskillexp = /^[a-zA-Z " " , .]+$/;

  //   phone
  let instrphone = document.getElementById("Inphone").value;
  let setintraphone = false;
  const instraphoneexp = /^[0-9]+$/;

  // file
  let instrfile = document.getElementById("Infile").value;
  let setintrafilexpe = false;
  const instrafile = /^[\.jpg|\.jpeg|\.bmp|\.gif|\.png]+$/;

  //   SUBJECT
  let instrssubject = document.getElementById("Insubject").value;
  let setintrasubject = false;
  const instasubexp = /^[a-zA-Z " " , .]+$/;
  // message
  let studentmessage = document.getElementById("Inmassage").value;
  let setstudentmessage = false;

  //   instractor name
  if (instraname == "") {
    document.getElementById("valinname").innerHTML = "Name is required.";
    setintraname = false;
  } else {
    document.getElementById("valinname").innerHTML = " ";
    setintraname = true;
    if (instraname.match(inexp)) {
      document.getElementById("valinname").innerHTML = "";
      setintraname = true;
    } else {
      document.getElementById("valinname").innerHTML = "Only enter char";
      setintraname = false;
    }
  }

  //   mail

  if (instramail == "") {
    document.getElementById("valinemail").innerHTML =
      "Valid email is required.";
    setinstramail = false;
  } else {
    document.getElementById("valinemail").innerHTML = " ";
    setstudtmail = true;
    if (instramail.match(inmailexp)) {
      document.getElementById("valinemail").innerHTML = " ";
      setinstramail = true;
    } else {
      document.getElementById("valinemail").innerHTML = "mail invalid";
      setinstramail = false;
    }
  }

  //   skills
  if (instrskills == "") {
    document.getElementById("valinskills").innerHTML = "Skills is required.";
    setintraskills = false;
  } else {
    document.getElementById("valinskills").innerHTML = " ";
    setintraskills = true;
    if (instrskills.match(inskillexp)) {
      document.getElementById("valinskills").innerHTML = " ";
      setintraskills = true;
    } else {
      document.getElementById("valinskills").innerHTML = "Only enter char";
      setintraskills = false;
    }
  }
  //   phone

  if (instrphone == "") {
    document.getElementById("valinphone").innerHTML = "Phone is required.";
    setintraphone = false;
  } else {
    document.getElementById("valinphone").innerHTML = " ";
    setintraphone = true;
    if (instrphone.match(instraphoneexp)) {
      if (instrphone.length == 10) {
        document.getElementById("valinphone").innerHTML = " ";
        setintraphone = true;
      } else {
        document.getElementById("valinphone").innerHTML =
          "Enter only 10 digits ";
        setintraphone = false;
      }
    } else {
      document.getElementById("valinphone").innerHTML = "Allow Only Number";
      setintraphone = true;
    }
  }

  // file

  if (instrfile == "") {
    document.getElementById("valinexperince").innerHTML = "File is required.";
    setintrafilexpe = false;
  } else {
    document.getElementById("valinexperince").innerHTML = " ";
    setintrafilexpe = true;
    if (instrfile.match(instrafile)) {
      document.getElementById("valinexperince").innerHTML = " ";
      true;
    } else {
      document.getElementById("valinexperince").innerHTML = " ";
      setintrafilexpe = false;
    }
  }

  //   SUBJECT

  if (instrssubject == "") {
    document.getElementById("valinsubject").innerHTML = "Subject is required.";
    setintrasubject = false;
  } else {
    document.getElementById("valinsubject").innerHTML = " ";
    setintrasubject = true;
    if (instrssubject.match(instasubexp)) {
      document.getElementById("valinsubject").innerHTML = " ";
      setintrasubject = true;
    } else {
      document.getElementById("valinsubject").innerHTML = "Only enter char";
      setintrasubject = false;
    }
  }
  //   message
  if (studentmessage == "") {
    document.getElementById("valinmassage").innerHTML =
      "Please,leave us a message.";
    setstudentmessage = false;
  } else {
    document.getElementById("valinmassage").innerHTML = " ";
    setstudentmessage = true;
  }

  //    working
  if (
    setintraname === true &&
    setinstramail === true &&
    setintraskills === true &&
    setintraphone === true &&
    setintrafilexpe === true &&
    setintrasubject === true &&
    setstudentmessage == true
  ) {
    return true;
  } else {
    return false;
  }
}
