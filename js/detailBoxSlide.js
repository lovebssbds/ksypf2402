$(function(){
    var $slideWidth=$('.dbox-slide-g').width();
    var $slideLength=$('.dbox-slide').length;
    var $slides=$('.dbox-slides')
    var $slide=$slides.children('.dbox-slide');
    var $slidePosition=0;

    function init(){
        $slideWidth=$('.dbox-slide-g').width();
        $slides.css({
            left:-$slideWidth*$slidePosition
        })
    }

    $(window).resize(function(){
        init();
    })

    function sliderForDetail(){
        function nextMove(){
            $slides.stop().animate({
                left:-$slideWidth*$slidePosition
            })
        }
        $('#detail>div:first-child .nextbt').click(function(){
            if($slidePosition>=$slideLength-1){
                $slidePosition=0;
            }else{
                $slidePosition++
            }
            nextMove();
        })
        function prevMove(){
            $slides.stop().animate({
                left:-$slideWidth*$slidePosition
            })
        }
        $('#detail>div:first-child .prevbt').click(function(){
            if($slidePosition==0){
                $slidePosition=$slideLength-1;
            }else{
                $slidePosition--;
            }
            prevMove();
        })
    }
    sliderForDetail();

   
})