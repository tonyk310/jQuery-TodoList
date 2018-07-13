// check off specific todos by clicking

$("ul").on('click', "li", function(){
	$(this).toggleClass("completed");
});


// click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// add listener to input which fires when we hit enter
$("input[type=text]").on("keypress", function(event){
	if(event.which === 13){
		// console.log($(this).val());
		// take the entered text extract it
		var todoText = $(this).val();
		// create a new li and add to ul with the text
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+todoText+"</li>");
		// clear the value of input
		$(this).val("");
	}
});

$("#fa-edit").on("click", function(){
	console.log("clicked");
	$("input[type=text]").fadeToggle();
});