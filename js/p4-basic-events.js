// Mouseover, Click and Load
function message(msg)
{
	document.getElementById('output').innerHTML = msg + " event";
}

// Change style
function closeMe(){
      x=document.getElementById("magic");
      x.className="closed";
  }

  function openMe(){
      x=document.getElementById("magic");
      x.className="open";
  }


// Date
function displayDate(){
	document.getElementById("showDate").innerHTML=Date();
}