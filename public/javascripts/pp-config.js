function activatePP()
{
    jQuery("a[rel^='lightbox']").prettyPhoto({show_title: false});
    jQuery("a[rel^='prettyPhoto']").prettyPhoto({show_title: false});
}
jQuery('a[href*="youtu"], a[href*="vimeo"], a[href*="watch?v="]').attr('rel', 'prettyPhoto');
jQuery('a[href$=".gif"], a[href$=".jpg"], a[href$=".png"], a[href$=".bmp"]').each(function() {
    if (!jQuery(this).attr('rel')) {
        jQuery(this).attr('rel', 'prettyPhoto');
    }
    if (jQuery(this).next('.wp-caption-text')) {
        caption = jQuery(this).next('.wp-caption-text').html();
        jQuery(this).attr('title', caption);
    }
});
activatePP();