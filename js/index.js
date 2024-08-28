$(".icon").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("active");
  $('.links').animate({
    height: 'toggle'
  }, 500);
});

$(window).resize(function () {
  if ($(window).width() > 641) {
    $('.links').show();
  }
});

$('#checkbox').on('click', function () {
  if ($('#home p span.bb').is(':hidden')) {
    $('#home p span.bb').show();
    $('.working').addClass('strike');
  } else {
    $('#home p span.bb').hide();
    $('.working').removeClass('strike');
  }

});

const menuItems = document.querySelectorAll('.links a');
const sections = Array.from(menuItems).map(link => document.querySelector(link.getAttribute('href')));

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = menuItem.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', function () {
  const fromTop = window.scrollY + window.innerHeight / 3;

  let currentSection = sections.find(section => {
    return section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop;
  });

  menuItems.forEach(menuItem => {
    menuItem.parentElement.classList.remove('active');
    if (currentSection && menuItem.getAttribute('href') === `#${currentSection.id}`) {
      menuItem.parentElement.classList.add('active');
    }
  });
});



// contact form
var $contactForm = $('#contact-form');
$contactForm.submit(function (e) {
  e.preventDefault();
  $.ajax({
    url: 'https://formspree.io/vincent@scotto.ws',
    method: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
    beforeSend: function () {
      $contactForm.append('<div class="alert alert--loading">Sending message...</div>');
    },
    success: function (data) {
      $contactForm.find('.alert--loading').hide();
      $contactForm.append('<div class="alert alert--success">Message sent!</div>');
    },
    error: function (err) {
      $contactForm.find('.alert--loading').hide();
      $contactForm.append('<div class="alert alert--error">Oops, there was an error. Please send me an email instead: <a href="mailto:vincent@scotto.ws">vincent @ scotto.ws</a>. Thanks!</div>');
    }
  });
});
