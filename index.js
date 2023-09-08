$(".pages").on("mouseover", function () {
    $(this).css("color", "hsl(5, 85%, 63%)");
});

$(".pages").on("mouseout", function () {
    $(this).css("color", "hsl(236, 13%, 42%)");
});

$(".read-more").on("mouseover", function () {
    $(this).addClass("hover");
});

$(".read-more").on("mouseout", function () {
    $(this).removeClass("hover");
});

$(".buttom-box > .title").on("mouseover", function () {
    $(this).css("color", "hsl(5, 85%, 63%)");
});

$(".buttom-box > .title").on("mouseout", function () {
    $(this).css("color", "hsl(240, 100%, 5%)")
});

$(".new-box > .title").on("mouseover", function () {
    $(this).css("color", "hsl(35, 77%, 62%)");
});

$(".new-box > .title").on("mouseout", function () {
    $(this).css("color", "hsl(36, 100%, 99%)")
});

$(".lines").on("click", function() {
    $(".menu").addClass("show-menu");
    $(this).hide();
    $(".cross").show();
    $(".menu").show();
    $("body > *").not("body > .header").addClass("shaded");
});

$(".cross").on("click", function() {
    $(this).hide();
    $(".lines").show();
    $(".menu").hide();
    $("body > *").removeClass("shaded");
});