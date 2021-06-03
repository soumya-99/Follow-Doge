var cursor = document.getElementById("cursor")
document.addEventListener("mousemove", (e) => {
	console.log(e);
	var x = e.clientX
	var y = e.clientY
	cursor.style.left = `${x}px`
	cursor.style.top = `${y}px`
})
