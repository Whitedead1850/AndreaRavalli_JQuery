let prijsTickets
let selectedExtras;


$(document).ready(function() {
    // get # of tickets
    $('input[name="ticket"]').on('change', function() {
        let ticketKeuze = $('input[name="ticket"]:checked').val();
        console.log(`keuze is: ${ticketKeuze}`);

        prijsTickets = ticketKeuze * 11.5
        console.log('prijs tickets is: ' + prijsTickets);
        $('table tr.tickets td.result').text(prijsTickets);
        return prijsTickets;
    });

    // get # of extras
    $('input[name="extras"]').on('change', function() {
        let extras = [];
        $.each($('input[name="extras"]:checked'), function() {
            extras.push($(this).val());
        });
        // console.log("My snacks are: " + extras.join(","));
        $('table tr.extras td:first-child').text(extras);
        selectedExtras = extras;
    });

    $('button#pay').on('click', pay);
});

function pay() {
    var prijs = 0;

    //prijs berekenen tickets
    console.log('prijs tickets iside function pay:' + prijsTickets);
    prijs = prijs + prijsTickets;

    //prijs berekenen extras
    console.log('extras: ' + selectedExtras);

    selectedExtras.forEach(function(extras, index) {
        if (extras == 'popcorn') {
            prijs = prijs + 5;
            console.log(prijs)
        } else if (extras == 'cola') {
            prijs = prijs + 2.5
        } else if (extras == 'chips') {
            prijs = prijs + 3
        }
    })

    //tonen op het scherm



}