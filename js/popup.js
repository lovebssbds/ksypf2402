$(function(){
       //bbox modal
   let $closeScrollTop
   $(".bbox-ani span").each(function(){
      $(this).click(function(){
        $(".img-modal").show();
        $(".img-modal-body h2").text( $(this).find("h2").text() );
        $(".img-modal-body .img").html( $(this).find("p").html() );
        $(".img-modal-body .link-close a").attr("href", $(this).find("p img").attr("src"))
        $(".section").off();
        $(".img-modal-body .img").scrollTop(0);
        $('html,body').css('overflow','hidden')
        $("html,body").scrollTop($scrollTop);
        $closeScrollTop=$scrollTop;
        })
    })
    $(".bbox-slide span").each(function(){
        $(this).click(function(){
            $(".img-modal").show();
            $(".img-modal-body h2").text( $(this).find("h2").text() );
            $(".img-modal-body .img").html( $(this).find("p").html() );
            $(".img-modal-body .link-close a").attr("href", $(this).find("p img").attr("src"))
            $(".section").off();
            $(".img-modal-body .img").scrollTop(0);
            $('html,body').css('overflow','hidden')
            $("html,body").scrollTop($scrollTop)
            $closeScrollTop=$scrollTop
        })
    })
    $(".img-modal-close").click(function(){
        $(".img-modal").hide();
        $('html,body').css('overflow','inherit')
        $("html,body").scrollTop($closeScrollTop)
        wheel();
    })
})