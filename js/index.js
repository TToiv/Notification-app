var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});


});



//
//section 1
//
function createMessage(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'An example message.', duration: 5000}) 	
}  	

//
//section 2
//
function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'Are you hungry',  // message
        dialogDismissed,         // callback
        'Check up',            // title
        ['Yes', 'No']                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: "Take a break and eat something.", duration: 3000});
        //{
           // function createNotification()
            //{
              //  cordova.plugins.notification.local.schedule({
                //    id:     1,
                  //  title: "Break over?",
                    //text: "Back to work, peon!",
                    //trigger: { in 30000, unit: 'millisecond' }
        //        });
            //}
        //}
   	else if(buttonIndex==2) new Toast({content: 'Carry on working.', duration: 3000});

}

   
   
//
//section 3
//
function createNotification() {

        		
    			
    //
    //setup notification
    //
	cordova.plugins.notification.local.schedule({ 
    	id: 	1,
        title: 	"Hey you",
        text: 	"This is an example notification",
        trigger: { in: 10, unit: 'second' }
   	});
    
}