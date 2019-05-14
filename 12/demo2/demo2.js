$(document).ready(function () {
    moveAnimation = new TimelineMax();

    moveAnimation
    .to($('.nut1'),1,{x:-300})
    .to($('.nut1'),1,{y:300})
    .to($('.nut1'),1,{x:0})
    .to($('.nut1'),1,{rotationX: 360})
    .to($('.nut1'),1,{rotationX: 0, y:0})

    $('.nutstop').click(function (e) { 
        e.preventDefault();
        moveAnimation.stop();
    });
    $('.nutplay').click(function (e) { 
        e.preventDefault();
        moveAnimation.play();
    });
    $('.nutreverse').click(function (e) { 
        e.preventDefault();
        moveAnimation.reverse();
    });
});