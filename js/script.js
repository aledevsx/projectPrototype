//<![CDATA[
  $(window).on('load', function () {
    $('.preloader .inner').fadeOut();
    $('.preloader').delay(10).fadeOut('slow');
    $('body').delay(10).css({ 'overflow': 'visible' });
  })
  
  let section = document.querySelectorAll("header#home,section#about,section#projects,section#contact");
  let menu = document.querySelectorAll("nav a");
  
  window.onscroll = () => {
    section.forEach((i) => {
      let top = window.scrollY;
      let offset = i.offsetTop - 250;
      let height = i.offsetHeight;
      let id = i.getAttribute("id");
  
      if (top >= offset && top < offset + height) {
        menu.forEach((link) => {
          link.classList.remove("active");
          document
            .querySelector("nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };//]]>
  
  
  