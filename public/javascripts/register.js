$(document).ready(
	function () {
		$("#regBtn").click(function (event) {
			var uName = $('#RuName').val();
			var password = $('#Rpassword').val();
			var password2 = $('#Rpassword2').val();
			if (uName.length < 1) {
				swal('Oops...', "You must set a username", 'error');
			}
			else {
				if (password.length < 1) {
					swal('Oops...', "You must set a password", 'error');

				}
				else {
					if (password2.length < 1) {
						swal('Oops...', "You must re-enter your password", 'error');

					}

					else {
						if (password != password2) {
							swal('Oops...', "Passwords do not match", 'error');
						}
						else {
							$.ajax({
								url: '/users/register',
								type: 'POST',
								data: { name: uName, password: password, loggedin: 1 },
								success: function (token) {
									swal({
										position: 'top-end',
										type: 'success',
										title: 'Account Created!',
										text: 'Redirecting to your Home Page',
										showConfirmButton: false,
										timer: 1500
									})
									var x = setTimeout(function () { $(location).attr('href', '/') }, 1500);
								},
								error: function (errMsg) {
									swal(
										'Oops...',
										errMsg.responseJSON.body,
										'error'
									)
								}

							});
							console.log(uName);
						}
					}
				}
			}
		});
		$('#RuName').val("");
		$('#Rpassword').val("");
		$('#Rpassword2').val("");

	}
);