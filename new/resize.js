        function isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        };


        function CheckSizeZoom() {
            
            console.log(screen.width);
            console.log($(window).width());
                console.log(window.screen.availWidth);
                    var minW = 1366;
            
        if ($(window).width() < minW) {
                        console.log("size small");

        var zoomLev = $(window).width() / minW;

        if (!isFirefox) {
        //$(document.body).css('zoom', zoomLev);
            $('#divWrap').css('zoom', zoomLev);
        }
        else {
        // Mozilla doesn't support zoom, use -moz-transform to scale and compensate for lost width
            
            $('#divWrap').css('-moz-transform', "scale(" + zoomLev + ")");
            $('#divWrap').width($(window).width() * zoomLev + 1);
            $('#divWrap').height($(window).height() / zoomLev + 1);

            $('#divWrap').css('position', 'absolute');
        }
        }
        else {
            console.log("size equal");
        $(document.body).css({
            zoom : '',
            position : '',
            left: "",
            top: "",
            "-moz-transform" : "",
            width : ''	
        });
        }
        };

        if (!isMobile()) {
        

            var isFirefox = typeof InstallTrigger !== 'undefined'; 
           /* 
            if (isFirefox){
                        CheckSizeZoom();
                                    $('#divWrap').css('visibility', 'visible');

            }
            else{*/
        (function() {
        CheckSizeZoom();
        $('#divWrap').css('visibility', 'visible');

        })();
            //}
 

        $(window).resize(CheckSizeZoom);

        }
