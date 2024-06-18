$(function () {

  var $goToTop = $('#vaccine-footer a.go-to-top');
  var $navBar = $('nav#vaccine-main-nav');

  // Back to button script.
  var backToTop = function () {
    $goToTop.on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    })
  };

  // Toggle main navigation script.
  var toggleFixedNavBar = function () {
    $navBar.toggleClass('fixed', $(window).scrollTop() > 100);
  };

  // Date picker script for date field.
  var datePicker = function () {
    var $dateField = $('input[id="date"]');
    var $container = $('#signup-form');

    if ($container.length == 0) {
      $container = 'body'
    }

    $dateField.datepicker({
      format: 'dd/mm/yyyy',
      startDate: '01/01/2017',
      container: $container,
      todayHighlight: true,
      autoclose: true,
      orientation: 'bottom'
    });
  };

  // Toggle main navigation on scroll.
  $(window).on('scroll', function () {
    toggleFixedNavBar();
  });

  // Hamburger menu toogle script.
  var hamburgerBurgerMenu = function () {
    $('.js-fh5co-nav-toggle').on('click', function (event) {
      event.preventDefault();
      var $this = $(this);
      if ($('body').hasClass('offcanvas')) {
        $this.removeClass('active');
        $('body').removeClass('offcanvas');
      } else {
        $this.addClass('active');
        $('body').addClass('offcanvas');
      }
    });
  };

  // Click outside of offcanvas.
  var mobileMenuOutsideClick = function () {
    $(document).click(function (e) {
      var container = $('#fh5co-aside, .js-fh5co-nav-toggle');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas')) {
          $('body').removeClass('offcanvas');
          $('.js-fh5co-nav-toggle').removeClass('active');
        }
      }
    });

    $(window).scroll(function () {
      if ($('body').hasClass('offcanvas')) {
        $('body').removeClass('offcanvas');
        $('.js-fh5co-nav-toggle').removeClass('active');
      }
    });
  };

  // Validate password and confirm password.
  var validatePassword = function () {
    var $password = $('#password');
    var $confirmPassword = $('#confirmpassword');

    if (!$password.length) {
      return false;
    }

    if ($password.val() !== $confirmPassword.val()) {
      document.getElementById('notmatched').innerHTML = '<div class="alert alert-danger alert-dismissable fade in" style="font-size:22px;"><a href="#" class="close" data-dismiss="alert" aria-label="close" title="close" style="font-size:32px;margin-top:3px;">&times;</a><strong>Your passwords do not matched!</strong> Please try again.</div>';
      document.getElementById('confirmpassword').focus();
      return false;
    }
    else {
      document.getElementById('notmatched').innerHTML = '';
    }
  }

  // Toggle respective form in profile form.
  var profileFormToggle = function () {
    $('.vaccine-info .col-md-6 .profile #edit-name').click(function () {
      $('.vaccine-info .edit-name').show(300);
    });
    $('.vaccine-info #cancle-name').click(function () {
      $('.vaccine-info .edit-name').hide(300);
    });
    $('.vaccine-info .col-md-6 .profile #edit-birthdate').click(function () {
      $('.vaccine-info .edit-birthdate').show(300);
    });
    $('.vaccine-info #cancle-birthdate').click(function () {
      $('.vaccine-info .edit-birthdate').hide(300);
    });
    $('.vaccine-info .col-md-6 .profile #edit-gender').click(function () {
      $('.vaccine-info .edit-gender').show(300);
    });
    $('.vaccine-info #cancle-gender').click(function () {
      $('.vaccine-info .edit-gender').hide(300);
    });
    $('.vaccine-info .col-md-6 .profile #edit-contact').click(function () {
      $('.vaccine-info .edit-contact').show(300);
    });
    $('.vaccine-info #cancle-contact').click(function () {
      $('.vaccine-info .edit-contact').hide(300);
    });
    $('.vaccine-info .col-md-6 .profile #change-password').click(function () {
      $('.vaccine-info .change-password').show(300);
    });
    $('.vaccine-info #cancle-change-password').click(function () {
      $('.vaccine-info .change-password').hide(300);
    });
  }

  backToTop();
  toggleFixedNavBar();
  datePicker();
  hamburgerBurgerMenu();
  mobileMenuOutsideClick();
  validatePassword();
  profileFormToggle();
});
