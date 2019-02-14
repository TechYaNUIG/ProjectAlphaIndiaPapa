$(document).ready(
	function() {
$('#form').submit(function(e) {
   		e.preventDefault(); 
    		    										
});
		$("#loginBtn").click(function (event) {
			var uName = $('#uName').val();
   			var password = $('#password').val(); 
    			if (uName.length < 1) {
			swal('Oops...',"You must type your username",'error');
			}
			else{
				if (password.length < 1) {
			swal('Oops...',"You must type your password",'error');
				}
				else{
					$.ajax({
						url: '/users/login',
						type: 'POST',
						data: {name: uName, password: password, loggedin: 1 },
						success: function(token){
								swal({
  									position: 'top-end',
  									type: 'success',
  									title: 'Logged In!',
									text: 'Redirecting to your Home Page',
  									showConfirmButton: false,
  									timer: 1500
								})
                     					var x = setTimeout(function(){ $(location).attr('href', '/' )},1500);
                				},
						error: function(errMsg) {
                    					swal(
                                            			'Oops...',
                                            			errMsg.responseJSON.body,
                                            			'error'
                    					)
                				}
						
					});
				}
			}
		});
	$('#uName').val("");
	$('#password').val("");

	}
);