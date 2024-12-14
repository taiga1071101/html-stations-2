const { reduceEachLeadingCommentRange } = require("typescript");

function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const text = document.getElementById("text");
  if (document.getElementById("check").checked) {
    text.style.backgroundColor = "red";
  } else {
    text.style.backgroundColor = "white";
  }
}
