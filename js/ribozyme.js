// wiki
$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=ribozyme&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
            $('#ribozymewikisection0').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
});

$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=1&page=ribozyme&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
            $('#ribozymewikisection1').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
});

$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=2&page=ribozyme&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
            $('#ribozymewikisection2').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
});

$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=3&page=ribozyme&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
            $('#ribozymewikisection3').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
});

$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&page=ribozyme&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
            $('#wikiarticle').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
});

// VS_ribozyme
$(document).ready(function(){
 
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=1&page=VS_ribozyme&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
            $('#VS_ribozymewikisection1').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });
});
