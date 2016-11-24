/**
 * Created by admin on 11/24/16.
 */

    $(document).ready(function(){

        $("#div1").delay(400).css('left', function(){ return $(this).offset().left; })
            .animate({"left":"0px"}, "slow");

    });
