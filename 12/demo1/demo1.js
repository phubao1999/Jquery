$(document).ready(function () {
    TweenMax.from($('.logo'),2,{scale:1.5, opacity:0});
    TweenMax.from($('.tieude'), 1,{y:80, opacity:0, delay:0.5});
    TweenMax.from($('.gioithieu'), 1,{y:80, opacity:0, delay:1});
    TweenMax.from($('.keduoi'), 1,{x:-2000, delay:1.5});
    TweenMax.staggerFrom($('.motkhoi'), 1,{y:-100, opacity:0, delay:2}, 0.5);
});