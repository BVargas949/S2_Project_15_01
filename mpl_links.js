"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Bryan Vargas
   Date:   04/18/19
   
   Filename: mpl_links.js

*/

//Once the window loads, an anonymous function runs that changes the URL value of the page onnce the onchange action begins. (once input is changed, so it URL of page, so the web page changes.)
window.addEventListener("load", function () {
    var allSelect = document.getElementsByTagName("select");
    for (var i = 0; i < allSelect.length; i++) {
        allSelect[i].onchange = function (e) {
            location.href = e.target.value;
        }


    }
});