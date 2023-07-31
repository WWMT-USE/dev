$(document).ready(function () {
  // menu toggle
  $('.menu-bar').on('click', function () {
    $('.menu-bar,.menu,.overlay').toggleClass('active')
    $('body,html').toggleClass('noscroll')
  })

  $('.menu nav a').on('click', function (e) {
    e.preventDefault()

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    }, 300)
  })

  $('.menu nav a,.overlay').on('click', function () {
    $('.menu-bar,.menu,.overlay').removeClass('active')
    $('body,html').removeClass('noscroll')
  })
})

