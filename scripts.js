let passwordBtn1 = document.getElementById("password-btn1")
let passwordBtn2 = document.getElementById("password-btn2")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePasswords(){
    passwordBtn1.textContent = ""
    passwordBtn2.textContent = ""
    for (i = 0; i < 15; i++){
        randomIndex = Math.floor( Math.random() * characters.length )
        passwordBtn1.textContent += characters[randomIndex]
    }
    for (i = 0; i < 15; i++){
        randomIndex = Math.floor( Math.random() * characters.length )
        passwordBtn2.textContent += characters[randomIndex]
    }
}

function copyPassword1(){
  if(passwordBtn1.textContent !== ""){
      // Copy the text inside the text field
      navigator.clipboard.writeText(passwordBtn1.textContent);

      // Alert the copied text
      alert("Senha copiada: " + passwordBtn1.textContent);
  }else{}
    
}

function copyPassword2(){
    // Copy the text inside the text field
  navigator.clipboard.writeText(passwordBtn2.textContent);

  // Alert the copied text
  alert("Senha copiada: " + passwordBtn2.textContent);
}