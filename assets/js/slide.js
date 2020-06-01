function slideUpdate(id)
{
    var slide = document.getElementById(id);
    var str_val = id + "_value";

    var val = document.getElementById(str_val);
    giuditta_controls[id] = parseInt(slide.value);
    val.innerHTML = slide.value + "%";

    console.log(id + " = " + slide.value + "%");
    sendData(id, slide.value);
}