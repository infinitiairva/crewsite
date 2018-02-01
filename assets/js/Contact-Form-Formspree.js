var $contactForm = $(".contactform");

$contactForm.submit(function(e) {
    e.preventDefault();
    $.ajax({
        url:    "https://formspree.io/contact@rueckgrat-oberursel.de", 
        method: "POST",
        data:   $(this).serialize(),
        dataType: "json",
        beforeSend: function() {
            $contactForm.children(".form-group").last().children(".help-block").first().addClass("alert info");
            $contactForm.children(".form-group").last().children(".help-block").first().text("Sending your message");
            $contactForm.children(".form-group").last().children(".btn-primary").first().prop("disabled", true);
        },
        success: function(data) {
            $contactForm.children(".form-group").last().children(".help-block").first().addClass("alert success");
            $contactForm.children(".form-group").last().children(".help-block").first().text("Thanks for your message!");
            $contactForm.children(".form-group").last().children(".btn-primary").first().removeAttr('disabled');
        },
        error: function(err) {
            $contactForm.children(".form-group").last().children(".help-block").first().removeClass("info").addClass("alert error");
            $contactForm.children(".form-group").last().children(".help-block").first().text("Something's gone wrong");
            $contactForm.children(".form-group").last().children(".btn-primary").first().removeAttr('disabled');
        }
    });
});