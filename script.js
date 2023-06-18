function volume_sphere() {
    const radius=document.getElementById('radius');
	const volume=document.getElementById('volume');
	let rad=radius.value;
	let vol=((4/3)*(22/7)*rad*rad*rad);
	
	volume.value=vol;

	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
