function logIn(data){
  data.preventDefault()  

  var email = document.getElementById("mail").value;

  var password = document.getElementById("word").value;

  let loginData = {
    "email": email,
    "word": password,
  }
  let registerdata = localStorage.getItem("user")
  registerdata = JSON.parse(registerdata)
  console.log(registerdata)
  console.log(registerdata.name)
  

   if (email == registerdata.email && password == registerdata.password) {
     console.log("email is present")
     alert("User is logged in successfully")  
     location.href = "http://127.0.0.1:5500/index.html";
  }
   else (
     alert("invalid Username or Password")
  )

  

  localStorage.setItem(
    "loginUser", JSON.stringify(loginData)
  )


}
