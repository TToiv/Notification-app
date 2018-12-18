var notification_count=0;

$(document).on('pageinit', function() {

	$('#dialogButton').on('click', function() {
		createDialog();
	});

});

function createDialog() {

	navigator.notification.confirm({
    	'Are you hungry?',  // message
        dialogDismissed,         // callback
        'Breaktime request',            // title
        ['Yes', 'No']                  // buttons
    });

}