$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 150) {
      $('#donatescroll').fadeIn();
      $('#donatescroll').css('visibility','visible');
    } else {
      $('#donatescroll').fadeOut();
    }
  });

  $('#tab1').on('click', function() {
    $('#tab1').addClass('active');
    $('#tab2').removeClass('active');
    $('#tab3').removeClass('active');
    $('.tabcontent').html(`<p><b>This is something about ID Protection</b></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
            Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
            in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
            vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
            Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
            faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
            Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
            Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
            non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
            pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
            Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
            in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
            vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
            Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
            faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
            Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
            Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
            non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>`);
  });
  $('#tab2').on('click', function() {
    $('#tab1').removeClass('active');
    $('#tab2').addClass('active');
    $('#tab3').removeClass('active');
    $('.tabcontent').html(`<p><b>This is something about Corpse Repatriation</b></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, 
        auctor consequat urna. Morbi a bibendum metus.</p>`);
  });
  $('#tab3').on('click', function() {
    $('#tab1').removeClass('active');
    $('#tab2').removeClass('active');
    $('#tab3').addClass('active');
    $('.tabcontent').html(`<p><b>This is something about Assistance Programs</b></p>
        <p>Since maybe like the Middle Ages, there have been many
        differing opinions on hustle and bustle. This cannot be
        denied. It is my intention to sit down and play video games
        for several hours.</p>
        <p>First, moving around quickly, and with purpose, is a
        true sign of character. Secondarily, bustle(e.g. hustle)
        yields more product for the working types. "Hustle and bustle
        are like my right and left arms," said Li'l Spicy in his famous
        "Hustle and Bustle Are Like My Right and Left Arms" speech.
        Webster's defines bustle as "excited and often noisy activity;
        a stir." A stir, indeed. Finally, sometimes gross stuff can
        be funny.</p>
        <p>In conclusion, I, "The Yellow Dart," think I have done a
        great job illustrating the many differing opinions about hustle
        and bustle, may they both rest in peace. Also, I think Strong
        Bad should decrease The Cheat's allowance.</p>`);
  });

  $('#registerform').submit(function() {
    if (checkPassword && checkEmail && checkUsername) {
      $.post($('#registerform').attr('action'), $('#registerform').serializeArray());
      alert("You have been successfully registered");
      window.close();
      return false;
    } else {
      alert("One or more fields are incorrect");
    }
  });

  $('#loginform').submit(function() {
    $.post($('#loginform').attr('action'), $('#loginform').serializeArray());
    alert("You are now signed in");
    window.close();
    return false;
  });
});

$('.toggle-password').click(function() {
  $(this).toggleClass('fa-eye fa-eye-slash');
  if ($("#pass").attr("type") == "password") {
    $("#pass").attr("type", "text");
  } else {
    $("#pass").attr("type", "password");
  }
});

function checkEmail() {
  var elMsg = document.getElementById('efeedback');     
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value)) {  
    elMsg.textContent = '';
    $(this).removeClass("invalid");
    return true;
  } else {                                              
    elMsg.textContent = 'Must be a valid email';        
    $(this).addClass("invalid");
    return false;
  }
}

function checkUsername() {
  var elMsg = document.getElementById('ufeedback');               
  if (this.value.length > 8) {                                    
    elMsg.textContent = 'Must be 8 characters or less'; 
    $(this).addClass("invalid"); 
    return false;
  } else {                                                        
    elMsg.textContent = '';   
    $(this).removeClass("invalid");
    return true;                                    
  }
}

function checkPassword() {
  var elMsg = document.getElementById('pfeedback');     
  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{0,8}$/.test(this.value)) {  
    elMsg.textContent = '';
    $(this).removeClass("invalid");
    return true;
  } else {                                              
    elMsg.textContent = 'Must be 8 characters or less, contain one digit, one uppercase, and one lowercase letter';        
    $(this).addClass("invalid");
    return false;
  }
}

var elEmail = document.getElementById('email');     
elEmail.addEventListener('blur', checkEmail, false);

var elUsername = document.getElementById('uname');
elUsername.addEventListener('blur', checkUsername, false);

var elPassword = document.getElementById('pass');
elPassword.addEventListener('blur', checkPassword, false);