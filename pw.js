function myFunction() {
    var x = document.getElementById("Password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    var x = document.getElementById("Password1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }