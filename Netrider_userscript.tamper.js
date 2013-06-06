// ==UserScript==
// @name       Netrider hacks
// @namespace  https://github.com/TJC/Netrider-UserScript/
// @version    0.1
// @description Make Netrider suitable for browsing in the workplace
// @match      http://netrider.net.au/*
// @match      http://*.netrider.net.au/*
// @copyright  2013+, Toby Wintrmute
// @downloadURL https://raw.github.com/TJC/Netrider-UserScript/master/Netrider_userscript.tamper.js
// @updateURL https://raw.github.com/TJC/Netrider-UserScript/master/Netrider_userscript.tamper.js
// ==/UserScript==


$(document).ready(function() {
    $("#logo").hide();
    $("body").css("background", "rgb(255, 255, 255)");
    $(".avatar").css("background", "rgb(255,255,255)");
    $(".avatar").css("background-image", "");
    $(".avatar").find("img").hide();
    $(".avatar").find("span.img").hide();
    $("div.male").removeClass("male");
    $("div.female").removeClass("female");
});
