$(document).ready(function () {

    const mybutton = document.getElementById("top-btn");

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
    }

    window.onscroll = function() {scrollFunction()};

    function hideEducationBackground() {

        $("#Supemir").addClass( "d-none" );
        $("#alx-se").addClass( "d-none" );
        $("#volunteering").addClass( "d-none" );
    }

    function showeducationbackground(id) {
        hideEducationBackground();

        $(id).removeClass( "d-none" )
    }

    function activateButton(id) {
        if ($("#Supemir-btn").hasClass( "active-btn" )) {
            $("#Supemir-btn").removeClass("active-btn");
        }
        if ($("#alx-se-btn").hasClass( "active-btn" )) {
            $("#alx-se-btn").removeClass("active-btn");
        }
        if ($("#volunteering-btn").hasClass( "active-btn" )) {
            $("#volunteering-btn").removeClass("active-btn");
        }

        $(id).addClass("active-btn");
    }
    
    $("#Supemir-btn").click(function() {
        showeducationbackground("#Supemir");
        activateButton("#Supemir-btn");
    });

    $("#alx-se-btn").click(function() {
        showeducationbackground("#alx-se");
        activateButton("#alx-se-btn");
    });

    $("#volunteering-btn").click(function() {
        showeducationbackground("#volunteering");
        activateButton("#volunteering-btn");
    });

    showeducationbackground("#Supemir");
    activateButton("#Supemir-btn");

    function visitorsMessage() {
        $.getJSON("https://api.countapi.xyz/hit/nacereddine.github.io/pagevisitors", function(response) {
            const visits = response.value;
            $("#visits").append(`You are the <span class='sandy-brown '> ${visits}th</span> visitor. Welcome on <span class='sandy-brown '>board</span> !`);
        });
    }

    visitorsMessage();

});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
