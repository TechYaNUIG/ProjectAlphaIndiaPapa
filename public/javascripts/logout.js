$(document).ready(
	function() {
		$("#sign-out-button").click(function (event) {
			localStorage.setItem("currentTeam", "");
			$.ajax({
				url:'/users/logout',
				type:'GET',
				data:{name:name},
				success:function(response){
					var msg = response.success;
					swal({
						position:'top-end',
						type:'success',
						title:msg,
						text:"Redirecting to Log In",
						showConfirmButton: true,
						timer:1500
					})
					var x = setTimeout(function(){$(location).attr('href','/users/login')},1500);
				}
			});
		});
	}	
);