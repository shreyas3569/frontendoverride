(function($) {
  $(document).ready(function() {
    $('.field-content').addClass('custom-article-class');
  });
})(jQuery);


(function($, Drupal, drupalSettings) {
  Drupal.behaviors.addArticleClass = {
    attach: function(context, settings) {
      $('.field-content', context).addClass('custom-article-class-2');
    }
  };
})(jQuery, Drupal, drupalSettings);
