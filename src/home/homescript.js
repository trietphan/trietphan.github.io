import anime from 'animejs'

var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var ff = navigator.userAgent.indexOf('Firefox') > 0;
var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
if (iOS) document.body.classList.add('iOS');

var logoAnimation = function() {

    document.body.classList.add('ready');

    var setDashoffset = function(el) {
        var l = el.getTotalLength();
        el.setAttribute('stroke-dasharray', l);
        return [l,0];
    }

    var letters = anime({
        targets: '#lines path',
        strokeDashoffset: {
            value: setDashoffset,
            duration: 700,
            easing: 'easeOutQuad'
        },
        transform: ['translate(0 128)', 'translate(0 0)'],
        delay: function(el, i) {
            return 750 + (i * 120)
        },
        duration: 1800
    });

    var dotMERoll = anime({
        targets: '#dot-js',
        transform: ['translate(0 0)', 'translate(535 0)'],
        delay: letters.duration + 1200,
        duration: 4500,
        elasticity: 200
    });

    var dotMEDown = anime({
        targets: '#dot-js',
        transform: ['translate(0 -304)', 'translate(0 0)'],
        duration: 500,
        elasticity: 600,
        autoplay: false
    });

    var dotMEUp = anime({
        targets: '#dot-js',
        transform: ['translate(0 0) scale(1 3)', 'translate(0 -352) scale(1 1)'],
        duration: 800,
        easing: 'easeOutCirc',
        complete: dotMEDown.play
    });

    var MEletters = anime({
        targets: ['#line-m-2', '#line-e'],
        strokeDashoffset: setDashoffset,
        duration: 1400,
        delay: function(el, i) { return (letters.duration - 1400) + (i * 60) },
        easing: 'easeInOutQuart'
    });

    var gradients = anime({
        targets: '#fills *:not(#dot-i)',
        opacity: [0, 1],
        delay: letters.duration - 300,
        delay: function(el, i, l) {
            var mid = l/2;
            var index = (i - mid) > mid ? 0 : i;
            var delay = Math.abs(index - mid);
            return (letters.duration - 1300) + (delay * 30);
        },
        duration: 1000,
        easing: 'linear',
    });

    var showDescription = anime({
        targets: ['.logo', '.links', '.shape'],
        opacity: {
            value: 1,
            easing: 'linear',
            duration: 1000
        },
        translateY: ['1.5rem', '0rem'],
        delay: function(el, i, l) { return ((l - i) * 100) + (letters.duration); },
        duration: 2250,
        easing: 'easeOutExpo',
    });

}

document.addEventListener('DOMContentLoaded', logoAnimation, false);