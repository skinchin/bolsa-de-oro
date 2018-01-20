$('ul').on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(){
	if(event.which === 13){
var newTodo = $(this).val();
	$(this).val("");
	//create new li & add to ul
	$('ul').append("<li><span><i class='fa fa-trash-o'></i></span> " + newTodo + "</li>")
	}
});

$(".fa-pencil-square-o").click(function(){
	$("input[type='text']").fadeToggle();
});