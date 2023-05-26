function callme()
{
    var str = document.getElementById('name').value;

    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let bag = "";
    for(let i=str.length-1; i>=0; i--)
    {
        bag += str.charAt(i);
	}

    if(str.trim() === bag.trim())
    {
        document.getElementById('result').innerHTML = "true";
    }else{
        document.getElementById('result').innerHTML = "false";
    }
  }