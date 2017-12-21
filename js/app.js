$(document).foundation();

$('.hero-img' ).mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 50);
    var amountMovedY = (e.pageY * -1 / 50);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
    console.log(amountMovedX);
});

$(document).ready(function(){
    
        var search = $('#char-name');
    
        // Search
        //
    
        function doSearch() {
            var value = $(search).val();
            
            var split_url = value.split('/');
            if (split_url.length = 1) {
                window.location.href = '../' + value;
            } else {
                window.location.href = value ;
            }
        }
        
    
        $(search).keyup(function(e) {
            if ( e.which == 13 ) {
                doSearch();
            }
        });
    
        $(search).autocomplete({
            source: characterJson
        });
    
        $('ul.ui-autocomplete').on("click", "li.ui-menu-item", function() {
            doSearch();
        });
        
        var targetPos = $(document).width() > 500 ? "right+15px top-15px" : "left bottom";
    
        $( 'img' ).tooltip({
            position: {
                my: "left top",
                at:	targetPos
            },
            content: function() {
                var element = $(this);
    
                var content = $(this).attr('title');
                if ( !content ) {
                    content = "No tooltip found.";
                }
    
                content = content.replace(/([\d]+)/g, "<span class='number'>$1</span>");
    
                return "<div>" + content + "</div>";
            },
            show: false,
            hide: false
        });
    
        $('#images').on("click", "img", function() {
    
            var title = $(this).attr('data-name');
    
            $('#search input').val(title);
            doSearch();
        });
    });