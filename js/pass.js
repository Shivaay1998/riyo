function validate_password(){
    var pass = document.getElementById('pass').value;
    var confirm_pass = document.getElementById('confirm_pass').value;
    if( pass != confirm_pass){
        document.getElementById('wrong_pass').style.color = 'red';
        document.getElementById('wrong_pass').innerHTML
        = 'Password didn\'t match try again';
        document.getElementById('btn').disabled = true;
        document.getElementById('btn').style.opacity = (0.4);
        document.getElementById('btn').style.transition = ".8s";
    }
    else{
        console.log("yepeee");
        document.getElementById('wrong_pass').style.color = "green";
        document.getElementById('wrong_pass').innerHTML = 'Password  matched';
        document.getElementById('btn').disabled = false;
        document.getElementById('btn').style.opacity = (1);
    }
}
