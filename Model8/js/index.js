$(document).ready(function(){
  $(".form-wrapper .button").click(function(){
	  var buttons = $(this);
	  for (var i = 0; i < buttons.length; i++) {
		  
		  var button = buttons[i];
		  var currentSection = buttons.parents(".form-wrapper .section");
		  var currentSectionIndex = currentSection.index();
		  
		  if (button.name == "message"){
				currentSection.removeClass("is-active").next().addClass("is-active");
				
            }if(button.name == "billing"){				
				currentSection.removeClass("is-active").next().next().addClass("is-active");
				}
		  }
	
	if(currentSectionIndex === 1){
		if(button.name =="submit"){
		currentSection.removeClass("is-active");
		$(document).find(".form-wrapper .section").last().addClass("is-active");
		
		}
		}
	if(currentSectionIndex === 2){
		if(button.name =="submit"){
		currentSection.removeClass("is-active");
		$(document).find(".form-wrapper .section").last().addClass("is-active");
		}
		}
	
    if(currentSectionIndex === 3){
		currentSection.removeClass("is-active");
      $(document).find(".form-wrapper .section").first().addClass("is-active");
    }
  });
 
   $(".form-wrapper").submit(function(e) {
      e.preventDefault();
    });
});