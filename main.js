// var listItems = document.querySelectorAll(".list-item");

// var app = document.querySelector(".app");

// var overLay = document.querySelector(".overlay");

// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].addEventListener("click", () => {
//     overLay.style.display = "block";
//   });
// }

// overLay.addEventListener("click", () => {
//   overLay.style.display = "none";
// });

// click navbar-toggle để mở navbar-right
var navbarRight = document.getElementById("navbar-right");
var navbarToggle = document.getElementById("navbar-toggle");

navbarToggle.onclick = function () {
    var isOpen = navbarRight.style.display === "block";
    if (isOpen) {
    navbarRight.style.display = "none";
    } else {
    navbarRight.style.display = "block";
    }
};

//click một navbarItem thì đóng navbar-right
// if (screen.width <= 767) {
var navbarItems = document.querySelectorAll("#navbar li");

for (var i = 0; i < navbarItems.length; i++) {
    var navbarItem = navbarItems[i];

    navbarItem.onclick = function () {
        if (navbarRight.style.display != "")
        navbarRight.style.display = "none";
    };
}
// }

//click OK trên map thì đóng google-confirm
var mapOKBtn = document.getElementById("OK-btn");
var ownConfirm = document.getElementById("own-confirm");

mapOKBtn.onclick = function () {
ownConfirm.style.display = "none";
};

//bật class is-sticky của navbar
var navbar = document.querySelector("#navbar");

document.onscroll = function () {
    var pos = navbar.getBoundingClientRect();
    if (pos.top == 0) {
        navbar.classList.add("is-sticky");
    } else {
        navbar.classList.remove("is-sticky");
    }
};

//cuộn scroll đến section nào thì active phần đó trên navbar
var homeNavbarItem = document.querySelector("#home-navbar-item");
var portfolioNavbarItem = document.querySelector("#portfolio-navbar-item");
var servicesNavbarItem = document.querySelector("#services-navbar-item");
var aboutNavbarItem = document.querySelector("#about-navbar-item");
var testimonialNavbarItem = document.querySelector("#testimonial-navbar-item");
var blogNavbarItem = document.querySelector("#blog-navbar-item");
var contactNavbarItem = document.querySelector("#contact-navbar-item");

document.onscroll = function () {
var homePos = document.querySelector("#home").getBoundingClientRect();
var portfolioPos = document
    .querySelector("#portfolio")
    .getBoundingClientRect();
var servicesPos = document
    .querySelector("#services")
    .getBoundingClientRect();
var aboutPos = document.querySelector("#about").getBoundingClientRect();
var testimonialPos = document
    .querySelector("#testimonial")
    .getBoundingClientRect();
var blogPos = document.querySelector("#blog").getBoundingClientRect();
var footerPos = document
    .querySelector("#footer")
    .getBoundingClientRect();

if (homePos.top <= 0) {
    homeNavbarItem.classList.add("active");
    portfolioNavbarItem.classList.remove("active");
} else {
    homeNavbarItem.classList.remove("active");
}

if (portfolioPos.top <= 70) {
    homeNavbarItem.classList.remove("active");
    portfolioNavbarItem.classList.add("active");
    servicesNavbarItem.classList.remove("active");
} else {
    portfolioNavbarItem.classList.remove("active");
}

if (servicesPos.top <= 70) {
    portfolioNavbarItem.classList.remove("active");
    servicesNavbarItem.classList.add("active");
    aboutNavbarItem.classList.remove("active");
} else {
    servicesNavbarItem.classList.remove("active");
    
}

if (aboutPos.top <= 70) {
    servicesNavbarItem.classList.remove("active")
    aboutNavbarItem.classList.add("active");
    testimonialNavbarItem.classList.remove("active");
} else {
    aboutNavbarItem.classList.remove("active");
}

if (testimonialPos.top <= 70) {
    aboutNavbarItem.classList.remove("active");
    testimonialNavbarItem.classList.add("active");
    blogNavbarItem.classList.remove("active");
} else {
    testimonialNavbarItem.classList.remove("active");
}

if (blogPos.top <= 70) {
    testimonialNavbarItem.classList.remove("active");
    blogNavbarItem.classList.add("active");
    contactNavbarItem.classList.remove("active");
} else {
    blogNavbarItem.classList.remove("active");
}

if (footerPos.bottom - 1 < screen.height) {
    blogNavbarItem.classList.remove("active");
    contactNavbarItem.classList.add("active");
} else {
    contactNavbarItem.classList.remove("active");
}
};


//khi mouseover va mouse out o portfolio item
var portfolioItems = document.querySelectorAll('#portfolio .list-items-container .list-item');
var figcaptionItems = document.querySelectorAll('#portfolio .list-items-container .list-item .figcaption');

for (let item = 0; item < portfolioItems.length; item++) {
    portfolioItems[item].onmouseover = function() {
        figcaptionItems[item].classList.add("figcaption-hover");
    }
    portfolioItems[item].onmouseout = function() {
        figcaptionItems[item].classList.remove("figcaption-hover");
    }
}


//filter ảnh ở portfolio section
// var $portfolioContainer = $('.list-item-container');
// console.log(portfolioContainer);

// $('#portfolio .filter li').on('click', function (e) {
//   e.preventDefault;

//   $('#portfolio .filter li').removeClass('active');
//   $(this).addClass('active');

//   var group = $(this).attr('data-group');
//   var groupName = $(this).attr('data-group');

//   $portfolioContainer.shuffle('shuffle', groupName);
// });

// var Shuffle = window.Shuffle;
// var element = document.querySelector(".list-items-container");

// var shuffleInstance = new Shuffle(element, {
//   itemSelector: ".list-item",
// });

// console.log(shuffleInstance.filter('slideshow'));