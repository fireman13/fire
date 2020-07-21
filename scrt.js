var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var str = " wishes Neeraj a very Happy Birthday"

function inputLength()
{
	return input.value.length;
}

function createListElement()
{
	var li = document.createElement("li");
	var p = document.createElement("p");
	p.innerHTML = str;
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	ul.appendChild(p);
	input.value = "";
}

function addListAfterClick()
{
	if(inputLength() > 0) {
	    createListElement();
	}
}

//function addListAfterKeypress(event)
//{
//	if(inputLength() > 0 && event.keyCode == 13) {
//	    createListElement();
//	}
//}
input.addEventListener("keypress", function(event) {
	if(input.value.length > 0 && event.which === 13)
	{
		createListElement();
	}
})

button.addEventListener("click", addListAfterClick);

//button.addEventListener("keypress", addListAfterKeypress);