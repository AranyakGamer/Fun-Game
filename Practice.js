
function login() {
  var username = document.getElementById("UserName").value.trim();
  var password = document.getElementById("password").value.trim();   
  var passlength = password.length  
  if (username === "" ) { 
      alert("Please enter the Username");
  } else { 
    if (password === "") { 
        alert("Please enter the Password");
    } else {  
       if (passlength < 8) { 
          alert("password length should not be less than 8")
        }
        else {
       alert("Hello " + username);
        localStorage.setItem("Password", password)
        window.location.replace("Main_Home.html");   
        }
      }
    }   
  } 
 
  function Show_Instruction() 
  { 
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    
  }
function Game4() 
{ 
  window.location.replace("Game4.html");

}
function Home() {
  window.location.replace("Main_Home.html")
} 

function Game3() 
{ 
  window.location.replace("Game3.html");

}  

function Game2() 
{ 
  window.location.replace("Game2.html");

} 