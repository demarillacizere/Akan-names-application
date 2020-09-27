var boysNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
var girlsNames=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday',];
function myFunction(){
    var date=document.getElementById('dateOfBirth').value;
    date=date.split('-');
    var year=date[0];
    var cc=parseInt((year.substring(0,2)));
    var yy=parseInt((year.substring(2)));
    var month=parseInt(date[1]);
    var day=parseInt(date[2]);
    var weekDay=parseInt(((cc/4 -2*cc-1) + (5*yy/4) + ((26*(month+1)/10)) + day) % 7); 
    if(weekDay<0)
    weekDay*=(-1);
    console.log(weekDay);
    const rbs = document.getElementsByName('gender');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if(selectedValue=='female'){
        document.getElementById('outputName').value="Hello " + girlsNames[weekDay] + " !";
    }
    if(selectedValue=='male'){
        document.getElementById('outputName').value="Hello " + boysNames[weekDay] + " !";
    }
    document.getElementById('outputDay').value="You were born on " + days[weekDay];
    return false;
}