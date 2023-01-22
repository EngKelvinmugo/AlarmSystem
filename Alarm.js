var today= new Date();
function Alarm(){

var hour = today.getHours();  
var minute = today.getMinutes();
var a = "Mugo it is time for"
if ((hour>=22) && (hour<=07)) {
return `${a}  sleeping` ;   
}
else if ((hour>=08) && (hour<=11)) {
return`${a}Class` ;   
}
else if ((hour>=12) && (hour<=13)) {
return `${a}Personal study` ;   
}

else if ((hour>=14) && (hour<=15)) {
return `${a}lunch`;   
}
else if ((hour>=16) && (hour<=19)) {
return`${a}Gym` ;   
}
else if ((hour>=20) && (hour<=21)) {
return `${a}rest` ;   
}
else
{ 
 return   `Invalid time` ;
}
 
}
console.log(today); 
 console.log(Alarm() );
  