var backdrop = document.querySelector('.backdrop');
var mobileLinks = document.querySelectorAll('.mobile-navbar a');
var toggleBtn = document.querySelector('.mobile-header__hamburger');
var mobileNav = document.querySelector('.mobile-navbar');

console.log('mobileLinks');
console.log(mobileLinks);

for (let i = 0; i < mobileLinks.length; i++) {
    const mobileLink = mobileLinks[i];
    console.log("Here");
    mobileLink.addEventListener('click', function () {
        console.log("Clicked");
        mobileNav.classList.remove('open');
        backdrop.classList.remove('open');
    });
}

backdrop.addEventListener('click', function () {
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
});

toggleBtn.addEventListener('click', function () {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})

