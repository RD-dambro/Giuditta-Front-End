var giuditta_sensors =
{
    "room_temperature":     30,
    "room_humidity":        80,
    "boiler_temperature":   55,
    "radiator_temperature": 70,
};


var giuditta_controls =
{
    "watering":         "OFF",
    "air_ventilation":  "OFF",
    "fog_machine":      "OFF",
    "boiler":           "OFF",
    "radiator":         "OFF",
    "white_led":        "OFF",
    "white_duty_cycle": 0,
    "blue_red_led":     "OFF",
    "br_duty_cycle":    0,
    "motor":            "OFF",
    "motor_speed":      0,
    "UV":               "OFF",
    "start":            "OFF",
};

function sendData(data_name, data)
{
    var xhttp = new XMLHttpRequest();
    var tx_string = "?"+data_name+"="+JSON.stringify(data);
    xhttp.open("GET", tx_string, true);
    xhttp.send();
};

function createRecipe()
{
    var name = document.getElementById("recipe_name");
    var val = name.value;

    if (checkNameRule(val))
    {
        var xhttp = new XMLHttpRequest();
        var tx_string = "create/?q="+val;
        xhttp.open("GET", tx_string, true);
        xhttp.send();
    }
}

function editRecipe(name)
{

    var xhttp = new XMLHttpRequest();
    var tx_string = "edit/?q="+name;
    xhttp.open("GET", tx_string, true);
    xhttp.send();
}

function editRecipeById(id)
{

    console.log(id[id.selectedIndex].value);
}
/*
var w = window.outerWidth;
console.log(w);
if (w > 697) w = 697;
else w = 1000*2;
var small = parseInt(0.009*w);
var small_col = String(small) + "px";
var medium = 0.015*w;
var medium_col = String(medium) + "px";
var large = 0.016*w;
var large_col = String(large) + "px";

*/
var small_col = "70px";
var medium_col = "110px";
var large_col = "150px";
var time_col =
[
    {title:"hh:mm:ss", field:"phase_time", align: "center", minWidth:medium_col, editor:"input"}
];

var temperature_col =
[
    {title:"[°C]", field:"room_temperature", align: "center", minWidth:medium_col, editor:"input"}
];

var humidity_col =
[
    {title:"[%]", field:"room_humidity", align: "center", minWidth:medium_col, editor:"input"}
];

var white_led_col =
[
    {title:"Value", field:"white_duty_cycle", align: "center", minWidth:small_col, editor:"input"},
    {title:"T_on", field:"white_t_on", align: "center", minWidth:small_col, editor:"input"},
    {title:"T_off", field:"white_t_off", align: "center", minWidth:small_col, editor:"input"}
];

var br_led_col =
[
    {title:"Value", field:"br_duty_cycle", align: "center", minWidth:small_col, editor:"input"},
    {title:"T_on", field:"br_t_on", align: "center", minWidth:small_col, editor:"input"},
    {title:"T_off", field:"br_t_off", align: "center", minWidth:small_col, editor:"input"}
];

var uv_led_col =
[
    {title:"T_on", field:"uv_t_on", align: "center", minWidth:small_col, editor:"input"},
    {title:"T_off", field:"uv_t_off", align: "center", minWidth:small_col, editor:"input"}
];

var motor_cols =
[
    {title:"Speed", field:"motor_speed", align:"left", sorter:"number", minWidth:small_col, editor:"input"},
    {title:"Invertions", field:"inv", align:"left", sorter:"number", minWidth:small_col, editor:"input"}
];
//single phase information
var phase_cols =
[
    {title:"Name", field:"name", minWidth:large_col, editor:"input"},
    {title:"Duration", columns:time_col},
    {title:"Temperature", columns:temperature_col},
    {title:"Humidity", columns: humidity_col},
    {title:"Whithe LED", columns: white_led_col},
    {title:"Blue-Red LED", columns: br_led_col},
    {title:"UV LED", columns: uv_led_col},
    {title:"Motor", columns: motor_cols},
];

//20 phases data
var table_data =
[
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
    {id:7},
    {id:8},
    {id:9},
    {id:10},
    {id:11},
    {id:12},
    {id:13},
    {id:14},
    {id:15},
    {id:16},
    {id:17},
    {id:18},
    {id:19},
    {id:20}
];

function checkDataRules(id,property, data, cell)
{
    if(property === "name")
    {
        return checkNameRule(data);
    }
    else if(property == "phase_time")
    {
        if(checkTime(data))
        {
            var len = data.split(":").length;
            var tmp=[0,0,0];
            for(var i = len; i > 0; i--)
            {
                tmp[len-i] = data.split(":")[i-1];
            }
            var seconds = tmp[0];
            var minutes = tmp[1];
            var hours = tmp[2];


            console.log(hours+"h"+minutes+"m"+seconds+"s");

            if(seconds < 60 && minutes < 60 && hours < 99) return true;
            else return false;
        }
    }
    else if(property == "room_temperature") return checkNumericRule(0, 100, data);
    else if(property =="room_humidity") return checkNumericRule(0, 100, data);
    else if(property == "white_duty_cycle")  return checkNumericRule(0, 100, data);
    else if(property == "white_t_on")  return checkNumericRule(0, 100, data);
    else if(property == "white_t_off")  return checkNumericRule(0, 100, data);
    else if(property == "br_duty_cycle")  return checkNumericRule(0, 100, data);
    else if(property == "br_t_on")  return checkNumericRule(0, 100, data);
    else if(property == "br_t_off")  return checkNumericRule(0, 100, data);
    else if(property == "uv_t_on")  return checkNumericRule(0, 100, data);
    else if(property == "uv_t_off")  return checkNumericRule(0, 100, data);
    else if(property == "motor_speed")  return checkNumericRule(0, 100, data);
    else if(property == "inv")  return checkNumericRule(0, 100, data);
    {

    }
};
function checkNumericRule(min, max, data)
{
    if(min <= data && data <= max) return true;
    else return false;
}
function checkNameRule(name)
{
    var letters = /^[0-9a-zA-Z]+$/;
    if(name.match(letters)) return true;
    else return false;

};

function checkTime(time)
{
    var letters = /^[0-9\:]+$/;
    if(time.match(letters))
    {
        var len = time.split(":").length;
        if(len>0) return true;
    }
     else return false;

};
