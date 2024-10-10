function signup() {
  const userdata = {};

  userdata.username = document.getElementById("username").value;
  userdata.fullname = document.getElementById("fullname").value;
  userdata.email_mobile = document.getElementById("email_mobile").value;
  userdata.password = document.getElementById("password").value;
  userdata.confirmpassword = document.getElementById("confirmpassword").value;

  if (
      userdata.username &&
      userdata.fullname &&
      userdata.email_mobile &&
      userdata.password &&
      userdata.confirmpassword
  ) {
      if (!userdata.email_mobile.includes("@")) {
          let mailer = document.getElementById("mailer");
          mailer.textContent = "Wrong Email";
          return;
      }

      if (userdata.password.length < 8) {
          alert("Password must be at least 8 characters long");
          return;
      }

      if (userdata.password !== userdata.confirmpassword) {
          let real = document.getElementById("real");
          real.textContent = "Passwords do not match. Please check.";
          return;
      }

      // Store user data in localStorage
      localStorage.setItem("userdata", JSON.stringify(userdata));
      alert("Signup Successful!");
      window.location.href="./login.html";
  } else {
      let display = document.getElementById("display");
      display.textContent = "Please enter all fields.";
  }
}

function login() {
  const userlogin = {};

  userlogin.email = document.getElementById("email").value;
  userlogin.pass = document.getElementById("pass").value;

  const storedUser = JSON.parse(localStorage.getItem("userdata"));

  if (storedUser) {
      if (
          storedUser.email_mobile === userlogin.email &&
          storedUser.password === userlogin.pass
      ) {
          alert("Login Successful!");
          window.location.href = "./portal.html";
      } else {
          alert("Incorrect email or password");
          window.location.href="./signup.html";
      }
  } else {
      alert("No user found. Please sign up first.");
      
  }
}

function press() {
  const password = document.getElementById("password");

  // Toggle password visibility
  if (password.type === 'password') {
      password.type = 'text';
  } else {
      password.type = 'password';
  }
}
