var notification_count=0;

$(document).on('pageinit', function() {
    
	$('#notificationButton').on('click', function() {
		createNotification();
	});


});
   
function createNotification() {
        					
	cordova.plugins.notification.local.schedule({ 
    	id: 		1,
        title: 		"Hey you",
        text: 	"This is an example notification",
        trigger: { in: 10, unit: 'second' }
   	});
    
}