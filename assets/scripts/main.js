$(function() {

    // Burger menu
    let navigation = $('.navigation');
    let burger_icon = navigation.find('.burger-icon');

    burger_icon.click(function() {

    });

    let hero_stay_connected = $('#stay-connected form');

    hero_stay_connected.validate({ // initialize the plugin
        rules: {
            email: {
                required: true,
                email: true
            }
        }
    });
})