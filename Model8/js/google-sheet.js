// Variable to hold request
$(document).ready(function(){
  $(".form-wrapper .button, .link").click(function(event){	  
	  // setup some local variables
	  var buttons = $(this);
	  var URL_address;
	  /*var uname = document.getElementById(".form-wrapper .section.is-active #Employee_Name");
  	  var uid = document.getElementById(".form-wrapper .section.is-active #Employee_ID");*/
	  var $form = $(".form-wrapper .section.is-active");
	  var $inputs = $form.find("input, radio, select, textarea");
	  
  		
	  for (var i = 0; i < buttons.length; i++) {
		  var button = buttons[i];
		  var currentSection = buttons.parents(".form-wrapper .section");
		  var currentSectionIndex = currentSection.index();
		  
		  if (button.name == "message"){
				currentSection.removeClass("is-active").next().addClass("is-active");
				
            }if(button.name == "billing"){				
				currentSection.removeClass("is-active").next().next().addClass("is-active");
				}
				if(button.name == "back"){
					currentSection.removeClass("is-active");
					$(document).find(".form-wrapper .section").first().addClass("is-active");
					}
		  }
	
	if(currentSectionIndex === 1){
		if(button.name =="submit"){
				if($('.form-wrapper .section.is-active textarea').val() == ""){
							console.log("text box not filled");
							return false;
							}else{
								/*if(allLetter(uname)){
									if(allnumeric(uid)){*/
								submitForm(currentSectionIndex, URL_address);
								currentSection.removeClass("is-active");
								$(document).find(".form-wrapper .section").last().addClass("is-active");
								return true;
								}
				/*	}
				}*/
			}
		}
	if(currentSectionIndex === 2){
		if(button.name =="submit"){
			if($('.form-wrapper .section.is-active textarea').val() == ""){
				console.log("text box not filled");
				return false;
				}else{
					submitForm(currentSectionIndex, URL_address);
					currentSection.removeClass("is-active");
					$(document).find(".form-wrapper .section").last().addClass("is-active");
			}
		}
	}
    if(currentSectionIndex === 3){
		currentSection.removeClass("is-active");
      $(document).find(".form-wrapper .section").first().addClass("is-active");
    }
  });
 
   $(".form-wrapper").submit(function(e) {
	   //submitForm(e);
      event.preventDefault();
    });
});

function allLetter(uname){
	var letters = /^[A-Za-z]+$/;
	if(uname.value.match(letters)){
		return true;
		} else {
			alert('Username must have alphabet characters only');
			uname.focus();
			return false;
			}  
}
function allnumeric(uid){
	var letters = /^[A-Ba-b0-9]+$/;
	if(uid.value.match(letters)){
		return true;
		} else {
			alert('User_ID must have Numeric only');
			uid.focus();
			return false;
			}  
}

				
function submitForm(currentSectionIndex, URL_address){
	
	var request;
	var URL_address;	
	// Abort any pending request
    if (request) {		
        request.abort();
    }

	console.log(currentSectionIndex);
    // Let's select and cache all the fields
	var $form = $(".form-wrapper .section.is-active");
	var $inputs = $form.find("input, radio, select, textarea");
   
    // Serialize the data in the form
    var serializedData = $form.serialize();
	//console.log(serializedData);
    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
   $inputs.prop("disabled", true);
	
    // Fire off the request to /form.php
	var messageUrl = "https://script.google.com/macros/s/AKfycbwEccvbFUevMaRJ52VTXqAu5RoN2skJ8K8JIAee7UvriG7DGt0/exec";
	var billingUrl = "https://script.google.com/macros/s/AKfycbxbr3ReeA7mlbmhltzNteu5OJmiuZ9cbNkF3ueGV_-UsNlYyaQ/exec";
	
	function sendAjaxURL(){		
		if(currentSectionIndex === 2){
			URL_address = billingUrl;
		} else {
			URL_address = messageUrl;
			}
		};
		
	sendAjaxURL();	
    request = $.ajax({		
		//path:"AKfycbwEccvbFUevMaRJ52VTXqAu5RoN2skJ8K8JIAee7UvriG7DGt0",	
        url:URL_address,
        type: "POST",
        data: serializedData, 
		/*success: function(){
			if(typeof data !== 'undefined'){
                jQuery('.count').text(data.count)
                console.log(data.count);
			}
		}*/
    });
	
    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hi, it worked!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
		return false;
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
   // event.preventDefault();
	
}