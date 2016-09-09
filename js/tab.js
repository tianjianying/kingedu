 $(function(){
    $(".Age a").first().addClass("curri_active");
    $(".Age a").click(function(){
      $(this).addClass("curri_active").siblings(".Age a").removeClass("curri_active");
      var sum=$(this).index();
      $(".curri_main .curri_content").eq(sum).fadeIn().siblings(".curri_main .curri_content").hide();
      return false;
    });
  });