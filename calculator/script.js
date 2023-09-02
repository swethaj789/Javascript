
let input='';
let output=document.getElementById("out");
output.style="font-size:40px;";
function calculate(e){
	if(input==='')
		input=e.target.value;
	else
		input+=e.target.value;
	output.innerHTML = input;
}
function res(e){
	output.innerHTML = eval(input);
}
function clear(){
	input='';
	console.log(input);
	output.innerHTML = input;
}


