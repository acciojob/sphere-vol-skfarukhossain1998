function volume_sphere() {
    /* const radius=document.getElementById('radius');
	const volume=document.getElementById('volume');
	let rad=radius.value;
	let vol=((4/3)*(22/7)*rad*rad*rad);
	
	volume.value=vol; */
	event.preventDefault();
  var radius = document.getElementById("radius").value;
	 var volume = (4/3) * Math.PI * Math.pow(radius, 3);
	  document.getElementById("volume").value = volume;
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
/* const form=document.getElementById('MyForm');
form.addEventListner('submit',()=>{
	volume_sphere();
});
 */



