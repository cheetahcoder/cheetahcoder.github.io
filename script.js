let first = "sv.vwrp.ir";
let second = "https://discord.gg/NjwFqRCbzJ";
let third = "ts.vwrp.ir:1153";
let download = "https://s32.picofile.com/file/8479443942/MTA_Game_Vinewood_RP.rar.html";

function copyText(text) {
    if (text == "first") {
        var input = document.createElement('input');
        input.setAttribute('value', second);
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand('copy');
        document.body.removeChild(input)
        return result;
    }
    if (text == "second") {
        var input = document.createElement('input');
        input.setAttribute('value', second);
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand('copy');
        document.body.removeChild(input)
        return result;
    }
    if (text == "third") {
        var input = document.createElement('input');
        input.setAttribute('value', third);
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand('copy');
        document.body.removeChild(input)
        return result;
    }
     if (text == "download") {
        var input = document.createElement('input');
        input.setAttribute('value', download);
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand('copy');
        document.body.removeChild(input)
        return result;
    }
}

function openLink(value) {
    if (value == "first") {
         window.location.href = "mtasa://sv.vwrp.ir:22003";
    }
    if (value == "second") {
        window.location.href = "https://discord.gg/NjwFqRCbzJ";
    }
    if (value == "third") {
        window.location.href = "ts3server://ts.vwrp.ir:1153";
    }
    if (value == "start") {
        window.location.href = "index.html";
    }
    if (value == "about") {
        window.location.href = "about.html";
    }
    if (value == "contact") {
        window.location.href = "contact.html";
    }
    if (value == "apply") {
        window.location.href = "apply.html";
    }
    if (value == "imprint") {
        window.location.href = "imprint.html";
    }
    if (value == "partner") {
        window.location.href = "partner.html";
    }
    if (value == "rules" || value == "whitelist") {
        alert('Not Implemented yet!')
    }
}

setTimeout(function() {
    startTime();
}, 50);

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementsByClassName('sec1time')[0].innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

function aboutSlide(value) {
    if (value == 1) {
        document.getElementsByClassName('intext')[0].style.transition = "all 1s";
        document.getElementsByClassName('intext')[0].style.right = "0vw";
        document.getElementsByClassName('about-title1')[0].style.borderBottom = "0.2vw solid rgb(60, 169, 24)";
        document.getElementsByClassName('about-title2')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title3')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title4')[0].style.borderBottom = null;
    }
    if (value == 2) {
        document.getElementsByClassName('intext')[0].style.transition = "all 1s";
        document.getElementsByClassName('intext')[0].style.right = "40vw";
        document.getElementsByClassName('about-title1')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title2')[0].style.borderBottom = "0.2vw solid rgb(60, 169, 24)";
        document.getElementsByClassName('about-title3')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title4')[0].style.borderBottom = null;
    }
    if (value == 3) {
        document.getElementsByClassName('intext')[0].style.transition = "all 1s";
        document.getElementsByClassName('intext')[0].style.right = "80vw";
        document.getElementsByClassName('about-title1')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title2')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title3')[0].style.borderBottom = "0.2vw solid rgb(60, 169, 24)";
        document.getElementsByClassName('about-title4')[0].style.borderBottom = null;
    }
    if (value == 4) {
        document.getElementsByClassName('intext')[0].style.transition = "all 1s";
        document.getElementsByClassName('intext')[0].style.right = "120vw";
        document.getElementsByClassName('about-title1')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title2')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title3')[0].style.borderBottom = null;
        document.getElementsByClassName('about-title4')[0].style.borderBottom = "0.2vw solid rgb(60, 169, 24)";
    }
}

function selectRang(value) {
    console.log(value);
    if (value == "Developer") {
        document.getElementsByClassName('dev')[0].style.display = "block";
    } else {
        document.getElementsByClassName('dev')[0].style.display = "none";
    }

    if (value == "Supporter") {
        document.getElementsByClassName('sup')[0].style.display = "block";
    } else {
        document.getElementsByClassName('sup')[0].style.display = "none";
    }

    if (value == "Concept") {
        document.getElementsByClassName('kon')[0].style.display = "block";
    } else {
        document.getElementsByClassName('kon')[0].style.display = "none";
    }

    if (value == "others") {
        document.getElementsByClassName('son')[0].style.display = "block";
    } else {
        document.getElementsByClassName('son')[0].style.display = "none";
    }
}
