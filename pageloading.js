function eatCount() {
  $(".monsterText").html("Click a<br>Monster to<br> Join a Room<br>to Chat");
}

const timer = setInterval(function () {
    let percent = 0;
  $(".bar").css("width", percent + "%");
  percent += 1;
  if (percent >= 100) {
    $(".pageLoading").addClass("complete");

    clearInterval(timer);
    setTimeout(eatCount, 3000);
  }
}, 30);

