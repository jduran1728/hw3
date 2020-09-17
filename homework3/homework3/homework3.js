var el_down = document.getElementById("yes");
var el_up = document.getElementsByClassName("mine");



function generateP() {
    var pass = '';
    var str = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$`;
    
    for (i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random()
            * str.length + 1);

        pass += str.charAt(char)
    }

    return pass;
}

function gfg_Run() {
    el_down.innerHTML = generateP();
} 