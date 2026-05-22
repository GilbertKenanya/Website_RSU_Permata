/**
 * Template Name: Medilab
 * Template URL: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Frequently Asked Questions Toggle
   */
  document
    .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
    .forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        faqItem.parentNode.classList.toggle("faq-active");
      });
    });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim(),
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener("load", function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);

  // Ambil elemen modal (kotak pop-up)
  var modal = document.getElementById("myModal");

  // Ambil tombol pemicu menggunakan ID baru
  var btn = document.getElementById("openPopupBtn");

  // Ambil elemen tombol silang
  var span = document.getElementsByClassName("close-btn")[0];

  // Untuk MCU

  // Ambil elemen modal (kotak pop-up)
  var modal = document.getElementById("myModalMCU");

  // Ambil tombol pemicu menggunakan ID baru
  var btn = document.getElementById("openPopupBtnMCU");

  // Ambil elemen tombol silang
  var span = document.getElementsByClassName("close-btn")[0];

  // 1. Ketika tombol "Learn More" diklik, tampilkan modal
  const btn = document.getElementById("openPopupBtn");

  if (btn) {
    btn.onclick = function (e) {
      e.preventDefault();
      modal.style.display = "block";
    };
  }

  // 2. Ketika tombol silang (x) diklik, sembunyikan modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // 3. Ketika pengguna mengklik di luar modal, tutup modal
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
})();

// Animasi teks muncul dari kanan setelah halaman di-load
window.addEventListener("load", function () {
  document.querySelector(".animate-text").classList.add("show");
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".btn-orange");

  button.addEventListener("mouseenter", () => {
    button.style.boxShadow = "0 10px 25px rgba(255,98,0,0.3)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.boxShadow = "none";
  });
});

const syringe = document.querySelector(".syringe");

syringe.addEventListener("mouseenter", () => {
  syringe.style.animationDuration = "2s";
});

syringe.addEventListener("mouseleave", () => {
  syringe.style.animationDuration = "8s";
});

document.addEventListener("DOMContentLoaded", function () {
  // Dapatkan elemen tombol menggunakan ID khusus IBS
  const ibsLearnMoreButton = document.getElementById("ibs-learn-more");

  // Periksa apakah tombol ada sebelum menambahkan event listener
  if (ibsLearnMoreButton) {
    ibsLearnMoreButton.addEventListener("click", function (event) {
      // Jika tombol tersebut adalah tautan (#), cegah perilaku default untuk mengarahkan
      // event.preventDefault();

      // Contoh fungsionalitas: Menampilkan pesan saat tombol diklik
      console.log("Navigasi ke halaman detail Instalasi Bedah Sentral...");
      // Anda dapat menambahkan kode untuk analisis (misalnya, Google Analytics) di sini
    });
  }

  console.log("Script khusus Instalasi Bedah Sentral telah dimuat.");
});
