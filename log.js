function logIn(data){
  data.preventDefault()  

  var email = document.getElementById("mail").value;
  console.log(email);

  var password = document.getElementById("word").value;
  console.log(password);

  let loginData = {
    "email": email,
    "word": password,
  }
  let registerdata = localStorage.getItem("user")

  console.log(registerdata)

   if (email == registerdata.email) {
    console.log("email is present")
   }

  localStorage.setItem(
    "loginUser", JSON.stringify(loginData)
  )


}
