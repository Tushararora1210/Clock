
$(document).ready(
    function()
    {
        
        
        setInterval(function ()
        {
            var date=new Date;
            var hours=date.getHours();
            var minutes=date.getMinutes();
            var seconds=date.getSeconds();
            $("#timetext").html("<p>Current Time is "+String(hours)+" hours "+String(minutes)+" minutes "+String(seconds)+" second </p>")
            $("#hourhand,#minutehand,#secondhand").css("transform-origin","bottom");
            $("#hourhand").css("transform","rotate(0deg)");
            $("#minutehand").css("transform","rotate(0deg)");
            $("#secondhand").css("transform","rotate(0deg)");
            var hourdegree=String((30*(hours%12))+(minutes*0.5))+"deg";
            var minutedegree=String((6*minutes)+(0.1*seconds))+"deg";
            var seconddegree=String(6*seconds)+"deg";
           
            $("#hourhand").css("transform","rotate("+hourdegree+")");
            $("#minutehand").css("transform","rotate("+minutedegree+")");
            $("#secondhand").css("transform","rotate("+seconddegree+")");

        },1000);
    }

);