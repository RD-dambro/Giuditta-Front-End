function toggle(id)
{
    var btn = document.getElementById(id);
    var val = btn.value;

    if(val === "OFF")
    {
        btn.className += " on";
        btn.innerHTML = btn.innerHTML.replace("OFF", "ON");
        btn.value= "ON";
        giuditta_controls[id] = "ON";
    }

    else if(val === "ON")
    {
        btn.className = btn.className.replace(" on", "");
        btn.innerHTML = btn.innerHTML.replace("ON", "OFF");
        btn.value= "OFF";
        giuditta_controls[id] = "OFF";
    }

    console.log(id + " " + giuditta_controls[id]);
    sendData(id, giuditta_controls[id]);
} 