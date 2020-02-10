function setup (){
    var currentDateAndTime = Date(Date.now());// exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)
    var currentHour = new Date().getHours();//Current hour in military time

    $("#currentDay").text(currentDateAndTime)

    for (let i = 9; i < 18; i++) {
      var storedInfo = localStorage.getItem("hour-"+ i)
      if(storedInfo) $("#text"+i).val(storedInfo)
      if(i === currentHour) $("#text"+i).addClass("present")
      else if( i < currentHour) $("#text"+i).addClass("past")
      else $("#text"+i).addClass("future")
    }
}
setup()

var interval = setInterval(setup(), 60000);

$(".saveBtn").click(function name(params) {
   var clickedHour = $(this).val()
     var info = $("#text"+clickedHour).val()
    localStorage.setItem("hour-"+clickedHour, info)
})

