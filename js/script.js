/* onload, use kutejs to add transitions for the text elemens h1, p and buttons */
window.onload = function() {
    KUTE.fromTo('h1', {translateY: -100, opacity: 0}, {translateY: 0, opacity: 1}, {duration: 1000, easing: 'easingIn', delay: 1000}).start();
    KUTE.fromTo('.summary', {translateY: -100, opacity: 0}, {translateY: 0, opacity: 1}, {duration: 1000, easing: 'easingIn', delay: 1000}).start();
    KUTE.fromTo('.menu', {translateY: -100, opacity: 0}, {translateY: 0, opacity: 1}, {duration: 1000, easing: 'easingIn', delay: 1000}).start();
    KUTE.fromTo('.socials', {translateY: -100, opacity: 0}, {translateY: 0, opacity: 1}, {duration: 1000, easing: 'easingIn', delay: 1000}).start();

    

}   


/* use kutejs to move container to the right by 500px */
$('.menu a').on('click', function() {
    KUTE.to('.container', {translateX: -400}).start();
    
});