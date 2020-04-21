var num = 20;
var colors = color(num);
var pill = document.querySelectorAll(".pill");
var click = colors[pick(num)];
var header = document.querySelector(".header");
var span = document.querySelector("span");
span.textContent = click;
var points = document.querySelector("p");
var point = Number(points.textContent);
var newGame = document.querySelector("#new");

newGame.addEventListener("click", function(){
    
    newGame.classList.add("hold");
    playAgain.classList.remove("hold");
    easy.classList.remove("hold");
    hard.classList.remove("hold");
    po.classList.remove("hold");
    expert.classList.remove("hold");


	call();
	for(var i=0; i<pill.length; i++)
   {
	   pill[i].style.backgroundColor = colors[i];
   }

   	header.style.backgroundColor = "#166687";

     point = 0;
     points.textContent = point;
 
});

var playAgain = document.querySelector("#again");

playAgain.addEventListener("click",function(){

    playAgain.classList.add("hold");
    newGame.classList.remove("hold");
    po.classList.add("hold");

    call();
	for(var i=0; i<pill.length; i++)
   {
	   pill[i].style.backgroundColor = colors[i];
   }

   	header.style.backgroundColor = "#166687";

})

for(var i=0; i<pill.length; i++)
{
	pill[i].style.backgroundColor = colors[i];

	pill[i].addEventListener("click", function (){
		// body...
          var clicked = this.style.backgroundColor;

          if(clicked === click)
          {
          	change();
          	header.style.backgroundColor = clicked;
            
             point += 10;

             points.textContent = point;
             po.classList.remove("hold");

          }
          else
          {
          	this.style.backgroundColor = "#02131a";
          	 point --;

             points.textContent = point;
             po.classList.add("hold");

          }
	});
}

function change(){

	for(var i=0; i<pill.length; i++)
	{
		pill[i].style.backgroundColor = click;
	}
}

function generateColors(){

	var r = Math.floor(Math.random() * 256);

	var g = Math.floor(Math.random() * 256);

	var b = Math.floor(Math.random() * 256);

	return "rgb("+ r +", "+ g +", "+ b +")";

}

function color(num){

	var arr = [];

	for(i=0; i<num; i++)
	{
		arr.push(generateColors());
	}

	return arr;
}

function pick(num){

	var n = Math.floor(Math.random() * num);

	return n;
}

var easy = document.querySelector("#easy");

easy.addEventListener("click",function(){
	num = 5;

	call();
	for(var i=0; i<pill.length; i++)
   {
   	  if(colors[i])
   	  {
	   pill[i].style.backgroundColor = colors[i];
   	  }
   	  else
   	  {
	   pill[i].style.display = "none";
   	  }
   }

   	header.style.backgroundColor = "#166687";

    easy.classList.add("hold");
    hard.classList.remove("hold");
    expert.classList.remove("hold");
     po.classList.add("hold");
});


var hard = document.querySelector("#hard");

hard.addEventListener("click",function(){
	num = 12;
    call();
	for(var i=0; i<pill.length; i++)
   {
   	  if(colors[i])
   	  {
	   pill[i].style.backgroundColor = colors[i];
	   pill[i].style.display ="block";

   	  }
   	  else
   	  {
	   pill[i].style.display = "none";
   	  }
   }

   	header.style.backgroundColor = "#166687";

    easy.classList.remove("hold");
    hard.classList.add("hold");
    expert.classList.remove("hold");
    po.classList.add("hold");
});


var expert = document.querySelector("#expert");

expert.addEventListener("click",function(){
	num = 20;

	call();

	for(var i=0; i<pill.length; i++)
   {
   	  if(colors[i])
   	  {
	   pill[i].style.backgroundColor = colors[i];
	   pill[i].style.display = "block";
   	  }
   }

   	header.style.backgroundColor = "#166687";

    easy.classList.remove("hold");
    hard.classList.remove("hold");
    expert.classList.add("hold");
    po.classList.add("hold");
});

var po = document.querySelector("#po");

function call()
{
	colors = color(num);
    
    click = colors[pick(num)];

    span.textContent = click;
}