$(".icon").click(function(e) {
  e.preventDefault();
  $(this).toggleClass("active");
  $('.links').animate({
    height: 'toggle'
  }, 500);
});

$(window).resize(function() {
  if ($(window).width() > 641) {
    $('.links').show();
  }
});

$('#checkbox').on('click', function() {
  if ($('#home p span.bb').is(':hidden')) {
    $('#home p span.bb').show();
    $('.working').addClass('strike');
  } else {
    $('#home p span.bb').hide();
    $('.working').removeClass('strike');
  }

});

var lastId,
  mainMenu = $(".links"),
  mainMenuHeight = mainMenu.outerHeight(),
  menuItems = mainMenu.find("a"),

  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

menuItems.click(function(e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - 35;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 1000);
  e.preventDefault();
});

$(window).scroll(function() {
  var fromTop = $(this).scrollTop() + mainMenuHeight;

  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop)
      return this;
  });

  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;

    menuItems
      .parent().removeClass("active")
      .end().filter("[href='#" + id + "']").parent().addClass("active");
  }
});

// contact form
var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
  e.preventDefault();
  $.ajax({
    url: 'https://formspree.io/vincent@scotto.ws',
    method: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
    beforeSend: function() {
      $contactForm.append('<div class="alert alert--loading">Sending message...</div>');
    },
    success: function(data) {
      $contactForm.find('.alert--loading').hide();
      $contactForm.append('<div class="alert alert--success">Message sent!</div>');
    },
    error: function(err) {
      $contactForm.find('.alert--loading').hide();
      $contactForm.append('<div class="alert alert--error">Ops, there was an error. Please send me an email instead: <a href="mailto:vincent@scotto.ws">vincent @ scotto.ws</a>. Thanks!</div>');
    }
  });
});
