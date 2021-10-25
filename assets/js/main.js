
const openJsBar = document.querySelector('.js-show-menu');
const menuChild2Container = document.querySelector('.js-menu-child2-container');
const menuChild2 = document.querySelector('.js-menu-child2');
const openJsMes = document.querySelector('.js-show-messenger');
const mesChild2Container = document.querySelector('.js-messenger-child2-container');
const mesChild2 = document.querySelector('.js-messenger-child2');
const openJsNotify = document.querySelector('.js-show-notify');
const notifyChild2Container = document.querySelector('.js-notify-child2-container');
const notifyChild2 = document.querySelector('.js-notify-child2');
const openJsAcc = document.querySelector('.js-show-acc');
const accChild2Container = document.querySelector('.js-acc-child2-container');
const accChild2 = document.querySelector('.js-acc-child2');
const openJsFooterChildSecond = document.querySelector('.js-show-slider__footer');
const footerChildSecond = document.querySelector('.js__footer__second-child');



openJsBar.addEventListener('click', function() {
    accChild2Container.classList.remove('open');
    mesChild2Container.classList.remove('open');
    notifyChild2Container.classList.remove('open');
    menuChild2Container.classList.add('open');
    openJsMes.classList.remove('primary');
    openJsNotify.classList.remove('primary');
    openJsAcc.classList.remove('primary');
    openJsBar.classList.add('primary');
});

menuChild2Container.addEventListener('click', function() {
    menuChild2Container.classList.remove('open');
    openJsBar.classList.remove('primary');
});

menuChild2.addEventListener('click', function(e) {
    e.stopPropagation();
});

openJsBar.addEventListener('click', function(e) {
    e.stopPropagation();
});

openJsMes.addEventListener('click', function() {
    accChild2Container.classList.remove('open');
    menuChild2Container.classList.remove('open');
    notifyChild2Container.classList.remove('open');
    mesChild2Container.classList.add('open');
    openJsNotify.classList.remove('primary');
    openJsBar.classList.remove('primary');
    openJsAcc.classList.remove('primary');
    openJsMes.classList.add('primary');
});

mesChild2Container.addEventListener('click', function() {
    mesChild2Container.classList.remove('open');
    openJsMes.classList.remove('primary');
});

mesChild2.addEventListener('click', function(e) {
    e.stopPropagation();
});

openJsMes.addEventListener('click', function(e) {
    e.stopPropagation();
});

openJsNotify.addEventListener('click', function() {
    accChild2Container.classList.remove('open');
    menuChild2Container.classList.remove('open');
    mesChild2Container.classList.remove('open');
    notifyChild2Container.classList.add('open');
    openJsBar.classList.remove('primary');
    openJsAcc.classList.remove('primary');
    openJsMes.classList.remove('primary');
    openJsNotify.classList.add('primary');
});

notifyChild2Container.addEventListener('click', function() {
    notifyChild2Container.classList.remove('open');
    openJsNotify.classList.remove('primary');
});

notifyChild2.addEventListener('click', function(e) {
    e.stopPropagation();
});

openJsNotify.addEventListener('click', function(e) {
    e.stopPropagation();
});


openJsAcc.addEventListener('click', function() {
    menuChild2Container.classList.remove('open');
    mesChild2Container.classList.remove('open');
    notifyChild2Container.classList.remove('open');
    accChild2Container.classList.add('open');
    openJsBar.classList.remove('primary');
    openJsNotify.classList.remove('primary');
    openJsMes.classList.remove('primary');
    openJsAcc.classList.add('primary');
});

accChild2Container.addEventListener('click', function() {
    accChild2Container.classList.remove('open');
    openJsAcc.classList.remove('primary');
});

accChild2.addEventListener('click', function(e) {
    e.stopPropagation();
});

openJsFooterChildSecond.addEventListener('click', function() {
    footerChildSecond.classList.toggle('open');
});

