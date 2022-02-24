function register(data) {
    console.log(data.target)    
    data.preventDefault()
    
    var user = document.getElementById("username").value

    var number = document.getElementById("phone").value
    console.log(number);

    var email = document.getElementById("email").value
    console.log(email);

    var password = document.getElementById("password").value
    console.log(password);

    var password2 = document.getElementById("password2").value
    console.log(password2);


    let userData = {
        "name": user,
        "number": number,
        email: email,
        "password": password,
        
        

    }
    console.log(userData)
    localStorage.setItem("user",JSON.stringify(userData),"number",JSON.stringify(userData),"email",JSON.stringify(userData),"password",JSON.stringify(userData))
}

