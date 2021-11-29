function eatCount() {
  $(".monsterText").html("Click a<br>Monster to<br> Join a Room<br>to Chat");
}

const percent = 0;
const timer = setInterval(function () {
    
  $(".bar").css("width", percent + "%");
  percent += 1;
  if (percent >= 100) {
    $(".pageLoading").addClass("complete");

    clearInterval(timer);
    setTimeout(eatCount, 3000);
  }
}, 30);


module.exports = {
    timer
}