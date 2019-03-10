$(document).ready(
	function() {
		$("#colourbutton").click(function (event) {
			var c = $('#primary_color');
			var colour = c.val();
			var id = document.getElementById("primary_color").getAttribute("name");
			$.ajax({
				url:'/users/change_colour/'+ id,
				type:'PATCH',
				data:{'colour':colour},
				success:function(response){
					var msg = response.success;
					swal({
						position:'top-end',
						type:'success',
						title:msg,
						text:"User Colour Changed!",
						showConfirmButton: true,
						timer:1500
					})
				},
						error: function(errMsg) {
                    					swal(
                                            			'Oops...',
                                            			errMsg.responseJSON.body,
                                            			'error'
                    					)
                				}

			});
		});
	}	
);