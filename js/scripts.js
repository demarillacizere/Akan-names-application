var boysNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
var girlsNames=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
function myFunction(){
    var date=document.getElementById('dob').value;
    date=date.split('-');
    var year=date[0];
    var cc=parseInt((year.substring(0,2)));
    var yy=parseInt((year.substring(2)));
    var month=parseInt(date[1]);
    var day=parseInt(date[2]);
}