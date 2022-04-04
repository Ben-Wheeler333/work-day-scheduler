$("#currentDay").text(moment());
 
var currentHour = moment().hour();
var scheduleHour = parseInt($(".hour").text()).floor;
var hourStr = $(".hour").text();


    var past = currentHour > scheduleHour;
    var present = currentHour === scheduleHour;
    var future = currentHour < scheduleHour;

    var setColor = function() {
        
        if (past) {
            $(".description").addClass("bg-secondary");
        } else if (future) {
            $(".description").addClass("bg-success");
        } else {
            $(".description").addClass("bg-danger");
        };
    };

    var saveTask = function() {
        
        var text1 = $(".ta1").text();
        var text2 = $(".ta2").text();
        var text3 = $(".ta3").text();
        var text4 = $(".ta4").text();
        var text5 = $(".ta5").text();
        var text6 = $(".ta6").text();
        var text7 = $(".ta7").text();
        var text8 = $(".ta8").text();
        var text9 = $(".ta9").text();

        var box1 = localStorage.setItem('textBox1', text1);
        localStorage.setItem('textBox2', text2);
        localStorage.setItem('textBox3', text3);
        localStorage.setItem('textBox4', text4);
        localStorage.setItem('textBox5', text5);
        localStorage.setItem('textBox6', text6);
        localStorage.setItem('textBox7', text7);
        localStorage.setItem('textBox8', text8);
        localStorage.setItem('textBox9', text9);
    }

  $(".saveBtn").click(saveTask);

  console.log(localStorage.getItem(box1));


$(".saveBtn").on


setColor();


