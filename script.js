
document.getElementById('form').addEventListener('submit', function(event) {
  
var uId= document.getElementById('userName').value;
var pId= document.getElementById('psd').value;
event.preventDefault();

validateLogin(uId, pId, function(V) {
    if (V) {
    window.location.href="home.html"
    
    
    } else {
    return false;
    
    }
});
});

function validateLogin(uId, pId, callback) {
regex1=/^(admin)$/;
regex2=/^(12345)$/;
var er1=document.getElementById("error1");
var er2=document.getElementById("error2");

if(regex1.test(uId) && regex2.test(pId)){
    er1.innerText="Username is valid";
    er1.style.color="green";
    er2.innerText="Password is valid";
    er2.style.color="green";
    callback(true);
}

else{
    er1.innerText="Username is not valid ";
    er1.style.color="red";
    er2.innerText="Password is not valid";
    er2.style.color="red";
    callback(false);
}
}  

  
  