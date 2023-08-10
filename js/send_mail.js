function send_mail(){
    window.Email.send({
    Host : "smtp.elasticemail.com",
    Username : "vasettisatish@gmail.com",
    Password : "03F085010ED813A909D3EDCEC3FAFBDABCC0",
    To : 'raipurguesthouses@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Message from a customer to book "+document.getElementById("farmhouse").value,
    Body : "Hello Owner," +"<br><br>" + "You got a new message from "+document.getElementById("name").value +" "+ "("+document.getElementById("email").value +"):"+ "<br>"+ "Farmhouse: " + document.getElementById("farmhouse").value+"<br>"+"  Phone Number: "+ document.getElementById("phno").value+"<br>"+" Best Wishes "+"<br>"+document.getElementById("name").value,
    }).then(
        document.getElementById("email").value = "",
        document.getElementById("farmhouse").value ="SELECT FARMHOUSE",
        document.getElementById("name").value="",
        document.getElementById("phno").value="",
        document.getElementById("alert1").style.display="block"
    );
   
}

function send_mail_bottom(){
    window.Email.send({
    Host : "smtp.elasticemail.com",
    Username : "vasettisatish@gmail.com",
    Password : "03F085010ED813A909D3EDCEC3FAFBDABCC0",
    To : 'raipurguesthouses@gmail.com',
    From : document.getElementById("email_bottom").value,
    Subject : "New Message from a customer to book "+document.getElementById("farmhouse_bottom").value,
    Body : "Hello Owner," +"<br><br>" + "You got a new message from "+document.getElementById("name_bottom").value +" "+ "("+document.getElementById("email_bottom").value +"):"+ "<br>"+ "Farmhouse: " + document.getElementById("farmhouse_bottom").value+"<br>"+"  Phone Number: "+ document.getElementById("phno_bottom").value+"<br>"+" Best Wishes "+"<br>"+document.getElementById("name_bottom").value,
    }).then(
        document.getElementById("email_bottom").value = "",
        document.getElementById("farmhouse_bottom").value ="SELECT FARMHOUSE",
        document.getElementById("name_bottom").value="",
        document.getElementById("phno_bottom").value="",
        document.getElementById("alert2").style.display="block"
    );
    
}

function btn_close() {
    document.getElementById("alert1").style.display="none";    
}

function btn_close_bottom() {
    document.getElementById("alert2").style.display="none";
}