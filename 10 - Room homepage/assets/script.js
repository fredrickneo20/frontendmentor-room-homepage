const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const logo = document.getElementById('logo');
const navMenu = document.getElementById('nav-menu');
const navHeader = document.getElementById('nav');
const title = document.getElementById('title');
const paragraph = document.getElementById('paragraph');
const buttonNext = document.getElementById('right');
const buttonBefore = document.getElementById('left');
const heroImage = document.querySelector('#hero');

const titleArray = ['Discover innovative ways to decorate', 'We are available all across the globe', 'Manufactured with the best materials'];

const paragraphArray = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.", 
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
]

// Navigation Script
const popUp = () => {
    close.style.display = 'inline';
    navMenu.style.display = 'inline';
    hamburger.style.display = 'none';
    logo.style.display = 'none';
    navHeader.style.backgroundColor = 'hsl(0, 0%, 100%)';
}
const closeUp = () => {
    close.style.display = 'none';
    navMenu.style.display = 'none';
    hamburger.style.display = 'inline';
    logo.style.display = 'inline';
    navHeader.style.backgroundColor = 'transparent';
}

let desktopImage = ['url(/images/desktop-image-hero-1.jpg)', 'url(/images/desktop-image-hero-2.jpg)', 'url(/images/desktop-image-hero-3.jpg)'];
let mobileImage = ['url(/images/mobile-image-hero-1.jpg)', 'url(/images/mobile-image-hero-2.jpg)', 'url(/images/mobile-image-hero-3.jpg)'];
// Next Button Script
const next = () => {
    if(title.innerHTML === titleArray[0]){
        title.innerHTML = titleArray[1];
        paragraph.innerHTML = paragraphArray[1];
        heroImage.style.backgroundImage = 'url(/images/desktop-image-hero-2.jpg)'; 
    } else if (title.innerHTML === titleArray[1]){
        title.innerHTML = titleArray[2];
        paragraph.innerHTML = paragraphArray[2];
        heroImage.style.backgroundImage = 'url(/images/desktop-image-hero-3.jpg)';
    } else {
        title.innerHTML = titleArray[0];
        paragraph.innerHTML = paragraphArray[0];
        heroImage.style.backgroundImage = 'url(/images/desktop-image-hero-1.jpg)';
    }
}

// Before Button Script
const before = () => {
    if(title.innerHTML === titleArray[2]){
        title.innerHTML = titleArray[1];
        paragraph.innerHTML = paragraphArray[1];
        heroImage.style.backgroundImage = 'url(/images/desktop-image-hero-2.jpg)';
    } else if (title.innerHTML === titleArray[1]){
        title.innerHTML = titleArray[0];
        paragraph.innerHTML = paragraphArray[0];
        heroImage.style.backgroundImage = 'url(/images/desktop-image-hero-1.jpg)';
    } else {
        title.innerHTML = titleArray[2];
        paragraph.innerHTML = paragraphArray[2];
        heroImage.style.backgroundImage = 'url(/images/desktop-image-hero-3.jpg)';
    }
}

hamburger.onclick = popUp;
close.onclick = closeUp;
buttonNext.onclick = next;
buttonBefore.onclick = before;