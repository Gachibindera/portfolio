const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


const percent = document.querySelectorAll('.skills__progress_percent'),
      lines = document.querySelectorAll('.skills__progress_line span');

percent.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
})


$(document).ready(function(){

    


    $('#contacts').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            checkbox: {
                required: true
            }

        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: jQuery.validator.format("Enter {0} character!")
            },
            checkbox:{ 
                required:"Click to agree"
            },
            email: {
                required: "Please enter your email",
                email: "Incorrect mail address entered"
            }
        }
    });

    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        openWait();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input, textarea").val("");


            $('form').trigger('reset');
            closeWait();
            openThanks(); 
        });
        return false;
    });

    function openWait() {
        $('.overlay, #wait').fadeIn('slow');
    }
    function openThanks() {
        $('.overlay, #thanks').fadeIn('slow');
    }
    function closeWait() {
        $('.overlay, #wait').fadeOut('slow');
    }


    $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
    });

});










