let btnItems=document.querySelectorAll(".item .btn-item");
let items=document.querySelectorAll(".item");

for(let i=0;i<btnItems.length;i++){
   btnItems[i].addEventListener("click",function(e){

	let btn=e.target;
	if(btn.className=="btn-item active"){
	  hideOptions();
	 }
	else{
	 removeClass();
	  items[i].classList.remove("inactive");
	  btnItems[i].classList.add("active");
	}

	})

}

function removeClass(){
	for(let i=0;i<btnItems.length;i++){
		items[i].classList.add("inactive");
	  btnItems[i].classList.remove("active");
	   
	  
	}
}


function hideOptions(){
	for(let i=0;i<btnItems.length;i++){
	  btnItems[i].classList.remove("active");
	  items[i].classList.remove("inactive");
	  
	}

}