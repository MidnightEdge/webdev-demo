const html = document.documentElement;
const fontbutton = document.querySelector("#fontsize");
const menubutton = document.querySelector("#menubutton");

function toggleBigFont(){
    if(document.cookie == "true"){
        document.cookie = "false;SameSite=Strict";
        html.removeAttribute("style");
        return;
    }

    document.cookie = "true;SameSite=Strict";
    html.style.fontSize = "80%";
}

function applyBigFont(){
    if(document.cookie == "true"){
        fontbutton.checked = true;
        html.style.fontSize = "80%";
        return;
    }
    fontbutton.checked = false;
}

window.onunload = () => {
    menubutton.checked = false;
}
applyBigFont();