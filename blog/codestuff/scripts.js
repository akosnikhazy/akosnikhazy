"use strict"
var lights = 1;

const lightswitch = document.getElementById('darkmode');
const onoff = lightswitch.firstElementChild;
const html 	= document.getElementsByTagName('html');
const imgTags = document.querySelectorAll('img');

function invertImgs(l){
	if(0 == imgTags.length) return; // why bother when there are no images
	
	if(1 == l)
	{
		imgTags.forEach(function(item,i){
			imgTags[i].classList.add('lightsoff');
		});
		return;
	}
	
	imgTags.forEach(function(item,i){
		imgTags[i].classList.remove('lightsoff');
	});
}

lightswitch.addEventListener("click", function()
{
	if(1 == lights)
	{
		onoff.textContent = "on";
		html[0].classList.add('lightsoff');
		invertImgs(1);
		lights = 0;
		return;
	}
	
	onoff.textContent = "off";
	html[0].classList.remove('lightsoff');
	invertImgs(0);
	lights = 1;
			
});
