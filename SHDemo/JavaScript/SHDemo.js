document.getElementById('date').innerHTML = new Date().toDateString();

const form = document.getElementById('form');
const msgInput = document.getElementById('msgInput');
const hidden = document.getElementById("hidden");

form.addEventListener("submit", (e) => {
  e.preventDefault();
	// console.log("submittion received");
  
  // check if input matches expected
  if (msgInput.value != "ATL"){
  	//console.log("wrong input");
    alert("Not really... Try again");
  	location.reload();
  } else {
    // console.log("right input")
  	hidden.style.opacity = 1;
  }
});
