
document.forms["emailform"].onsubmit = function sendMail(){    
    var label =  ("[" + document.querySelector('input[name="subject"]:checked').value + "] ");
    var subject = label + document.getElementById("targy").value.trim();
    var body = document.getElementById("tartalom").value.trim();

    var final = "mailto:email@adress.com?subject=" + subject + "&body=" + body;

    window.location.href = final;
};
