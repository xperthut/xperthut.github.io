/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("img").contextmenu(function(e){
    e.preventDefault();
});

var $imgs = $(".fader").find("img"),
    i = 0;

function changeImage(){
    var next = (++i % $imgs.length);
    $($imgs.get(next - 1)).fadeOut(500);
    $($imgs.get(next)).fadeIn(500);
}

//setInterval(changeImage, 2000);

