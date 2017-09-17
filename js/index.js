$("document").ready (function (){
	$("#oppAccess").click(function (e) {
		// $.getJSON('https://jsonplaceholder.typicode.com/posts/1/comments', function (data) {
		// 	console.log (data);
		// });

		$.ajax ({
			url: 'https://jsonplaceholder.typicode.com/posts/1/comments',
			method: 'get',
			type : 'json',
			cache : false,
			success: function (data) {
				console.log (data);
				$('#accessDiv').empty();
				$('#accessDiv').append ('<h3>Access Info </h3>');
				$(data).each (function (index, value) {
					$('#accessDiv').append(data[index].name + '<br>');
					//console.log (data[index].name);
				});
			}
		});
  		
	});

	/*$("navbar navbar-inverse a").click(function (e) {
  		e.preventDefault();  
    	$(this).tab('show');
	});*/

	$("ul.nav-pills a").click(function (e) {
  		e.preventDefault();
    	$(this).tab('show');
	});

});