$(function(){
     /*SMOOTH SCROLL*/
     $("[data-scroll]").on("click",function(event){
      event.preventDefault()

      let elementID = $(this).data('scroll');
      let elemetnOffset = $(elementID).offset().top;
      console.log(elemetnOffset);

      $("html,body").animate( {
      	scrollTop:elemetnOffset - 50
      }, 700)

     });

	});
 