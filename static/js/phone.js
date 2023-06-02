// var part1 = "123-456";
// var part2 = "7890";
//
// function showPhone() {
//     var phone = part1 + "" + part2;
//     document.getElementById("phone").innerHTML = phone;
// }
var part1 = "34756";
var part2 = "41518";

function showPhone() {
    var phone = part1 + part2;
    var phoneLink = '<a href="tel:' + phone + '"><i class="fa fa-phone"></i> ' + phone + '</a>';
    phoneLink += '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</nbsp><a href="https://wa.me/39' + phone + '"><i class="fa fa-whatsapp"></i> WhatsApp </a>';
    document.getElementById("phone").innerHTML = phoneLink;
    document.getElementById("show-phone").style.display = "none";
}