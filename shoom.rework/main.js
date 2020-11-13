"use strict";
//блоки для корекцияя///
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.closed_menu');
let left = document.querySelector('.left');
let scroll = document.querySelector('.scroll') ;
let float = document.querySelector('.float');
let floating = document.querySelector('.floating');
let flik = document.querySelector('.flip');
let flop = document.querySelector('.flok');


///Hamburger///
hamburger.addEventListener('click', function(){
    menu.classList.toggle('active');
    hamburger.classList.toggle('right') ;
});
///тут бургер кончился////
float.addEventListener('click', function(){

    this.classList.add('passive');
    floating.classList.remove('passive');
    flik.classList.remove('passive');
    flop.classList.remove('passive');
})  ;
floating.addEventListener('click', function(){
    this.classList.add('passive');
    float.classList.remove('passive');
    flik.classList.remove('passive');
    flop.classList.remove('passive');
})   ;
flik.addEventListener('click',function(){
    this.classList.add('passive');
    float.classList.remove('passive');
    floating.classList.remove('passive');
    flop.classList.remove('passive');
})  ;
flop.addEventListener('click',function(){
    this.classList.add('passive');
    float.classList.remove('passive');
    floating.classList.remove('passive');
    flik.classList.remove('passive');
});

let lel = document.querySelector('.column50');
lel.addEventListener('mouseover',function(event,flow,adn){
    this.classList.add('animate');
});

let cleave = document.getElementsByTagName('li');
cleave.onmouseover = function(){
    this.classList.add('animate');
}  ;


function wine(){
    let btn = document.querySelector('.btn');
    btn.classList.toggle('men') ;
    let refr = document.querySelector('.refresh_bar');
    refr.classList.toggle('animate');
}
