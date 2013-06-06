// ==UserScript==
// @name       Netrider hacks
// @namespace  http://netrider.hacks.dryft.net/
// @version    0.1
// @description Make Netrider suitable for browsing in the workplace
// @match      http://*netrider.net.au/*
// @copyright  2013+, Toby Wintrmute
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