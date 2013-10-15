jQuery(document).ready(function() {
    jQuery('.children').parent().mouseover(function() {
        jQuery(this).addClass('menu-sel');
    });
    jQuery('.children').parent().mouseout(function() {
        jQuery(this).removeClass('menu-sel');
    });
});
