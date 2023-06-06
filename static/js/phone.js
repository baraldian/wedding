// var part1 = "123-456";
// var part2 = "7890";
//
// function showPhone() {
//     var phone = part1 + "" + part2;
//     document.getElementById("phone").innerHTML = phone;
// }
var part1 = "34756";
var pao1 = '320940';
var part2 = "41518";
var pao2 = '7877';


function showPhone() {
    var phone = part1 + part2;
    var phone2 = pao1 + pao2;
    var phoneLink = '<br>Andrea<br><a href="tel:' + phone + '"><i class="fa fa-phone"></i> ' + phone + '</a>';
    phoneLink += '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</nbsp><a href="https://wa.me/39' + phone + '"><i class="fa fa-whatsapp"></i> WhatsApp </a>';
    phoneLink += '<br>Vittoria: <br><a href="tel:' + phone2 + '"><i class="fa fa-phone"></i> ' + phone2 + '</a>';
    phoneLink += '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</nbsp><a href="https://wa.me/39' + phone2 + '"><i class="fa fa-whatsapp"></i> WhatsApp </a>';
    document.getElementById("phone").innerHTML = phoneLink;
    document.getElementById("show-phone").style.display = "none";

}

