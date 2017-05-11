var button = document.getElementById("buttonclick");
var textbox = document.getElementById("postcode");

//*********************************Start Stat DOM Objects*************************************************
var temp = document.getElementById("temp");
var windspeed= document.getElementById("windspeed");
var weatherstatus=document.getElementById("weatherstatus");
var invalid1=document.getElementById("invalid");
var city=document.getElementById("city");
//********************************* End Stat DOM Objects**************************************************

button.addEventListener("click", function(){
    console.log("Click!!!");
    
    var request= new XMLHttpRequest();
request.onreadystatechange=function()
{
    if (this.readyState == 4 && this.status == 200)
    {  var data=JSON.parse(request.response);
        
        if(typeof data.response.error=='object')
        {
            console.log("error");
            invalid1.innerHTML="Invalid entry";
        }
        else
        {
            console.log(data);
            temp.innerHTML=data.current_observation.temperature_string;
            windspeed.innerHTML=data.current_observation.wind_mph+("mph");
            weatherstatus.innerHTML=data.current_observation.weather;
            city.innerHTML=data.current_observation.display_location.full;
            invalid1.innerHTML="";
        }
    }
};
request.open('GET',"http://api.wunderground.com/api/0e0c8bdb01b321e7/conditions/q/CA/"+textbox.value+".json",false);
request.send(null);
});

