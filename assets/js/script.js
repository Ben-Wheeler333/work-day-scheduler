$("#currentDay").text(moment());
 
var currentHour = moment().hour();
var scheduleHour = $(".hour").value;



    var past = currentHour > scheduleHour;
    var present = currentHour = scheduleHour;
    var future = currentHour < scheduleHour;

    var setColor = function() {
        
        if (past) {
            $(".description").addClass("bg-secondary");
        } else if (future) {
            $(".description").addClass("bg-success");
        } else {
            $(".description").addClass("bg-danger");
        };
    }



$(".saveBtn").on


setColor();


