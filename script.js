function callme()
{
    var str = document.getElementById('name').value;

    str = str.toLowerCase().replace(" ", '');
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