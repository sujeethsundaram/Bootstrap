function date()
{
    const monthNames = ["January", "February", "March", "April",
                        "May", "June", "July", "August",
                        "September", "October", "November", "December"];
        var in_date = new Date();
        var monthIndex = in_date.getMonth();
        var monthName = monthNames[monthIndex];
        var str=in_date.getDate() +'/'+(monthName)+'/'+in_date.getFullYear();
        document.getElementById('display').innerHTML=str;
}
function time()
{
    var my_time = new Date();
    document.getElementById('display2').innerHTML=my_time;
}