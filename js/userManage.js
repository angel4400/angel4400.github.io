/* 循环所有下拉按钮，在隐藏和显示其下拉内容之间切换-这允许用户有多个下拉，而不会有任何冲突 */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// iframe高度自适应
// var ifm = document.getElementById("mainframe_1");
// ifm.height = document.documentElement.clientHeight;
function changeFrameHeight() {
//   var ifm = document.getElementById("mainframe");
//   ifm.height = document.documentElement.clientHeight;
  var ifm = document.getElementById("mainframe_1");
  ifm.height = document.documentElement.clientHeight;
  var ifm = document.getElementById("mainframe_2");
  ifm.height = document.documentElement.clientHeight;
  var ifm = document.getElementById("mainframe_3");
  ifm.height = document.documentElement.clientHeight;
  var ifm = document.getElementById("mainframe_4");
  ifm.height = document.documentElement.clientHeight;
    var ifm = document.getElementById("mainframe_5");
    ifm.height = document.documentElement.clientHeight;
    var ifm = document.getElementById("mainframe_6");
    ifm.height = document.documentElement.clientHeight;
    var ifm = document.getElementById("mainframe_7");
    ifm.height = document.documentElement.clientHeight;
}
window.onresize = function () {
  changeFrameHeight();
};

// 设置选项卡
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// 获取id="defaultOpen（默认显示）"的元素并点击它
document.getElementById("defaultOpen").click();
