var percent = 0;
function eatCount() {
  $(".monsterText").html("Join a Room<br>to Chat");
}


const timer = setInterval(function () {
    
  $(".bar").css("width", percent + "%");
  percent += 1;
  if (percent >= 100) {
    $(".pageLoading").addClass("complete");

    clearInterval(timer);
    setTimeout(eatCount, 3000);
  }
}, 30);
