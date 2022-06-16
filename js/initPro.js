function Problem(title, a, b, c, d, answer, score) {
  this.title = title;
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.answer = answer;
  this.score = score;
}

//1.添加题目到localStorage
//2.输入提示
//3.验证选择题输入的答案是否重复
//4.验证选择题输入的选项与答案是否不匹配
//5.用*分割题目
//6.不能重复添加题目
//7.提示添加成功
document.getElementById("submit").onclick = function () {
  var title = document.getElementById("title").value;
  var a = document.getElementById("optionA").value;
  var b = document.getElementById("optionB").value;
  var c = document.getElementById("optionC").value;
  var d = document.getElementById("optionD").value;
  var answer = document.getElementById("answer").value;
  var score = document.getElementById("score").value;
  var problem = new Problem(title, a, b, c, d, answer, score);
  var problemDB = localStorage.getItem("problemDB");

  // if (title == "") {
  //     alert("请输入题目");
  // } else if (a == "") {
  //     alert("请输入选项A");
  // } else if (b == "") {
  //     alert("请输入选项B");
  // } else if (c == "") {
  //     alert("请输入选项C");
  // } else if (d == "") {
  //     alert("请输入选项D");
  // } else if (answer == "") {
  //     alert("请输入答案");
  // } else if (score == "") {
  //     alert("请输入分数");
  // } else {

  if (
    title == "" ||
    a == "" ||
    b == "" ||
    c == "" ||
    d == "" ||
    answer == "" ||
    score == ""
  ) {
    return;
  } else {
    if (a == b || a == c || a == d || b == c || b == d || c == d) {
      alert("输入的问题答案重复，请您检查选择题答案是否输入正确");
    } else {
      if (answer != a && answer != b && answer != c && answer != d) {
        alert(" 选项与正确答案不匹配");
      } else {
        if (problemDB) {
          var problemStr = problemDB.split("*");
          var problemArr = [];
          for (var item of problemStr) {
            problemArr.push(JSON.parse(item));
          }

          var flag = true;
          for (var item of problemArr) {
            if (item.title == title) {
              alert("不能重复添加题目");
              flag = false;
              break;
            }
          }

          if (flag) {
            problemArr.push(problem);
            var problemStr = [];
            for (var item of problemArr) {
              problemStr.push(JSON.stringify(item));
            }
            var problemDB = problemStr.join("*");
            localStorage.setItem("problemDB", problemDB);
            alert("添加成功");
          }
        } else {
          var problemDB = JSON.stringify(problem);
          localStorage.setItem("problemDB", problemDB);
          alert("添加成功");
        }
      }
    }
  }
};

// var p1 = new Problem('1+1=?', 1, 2, 3, 4, 'b', 5);
// var p2 = new Problem('2+2=?', 1, 2, 3, 4, 'd', 5);
// var p3 = new Problem('3+3=?', 1, 2, 6, 4, 'c', 5);

// var problemDB = [p1, p2, p3];
// localStorage.setItem('problemDB', JSON.stringify(problemDB));
// var problemDB = JSON.parse(localStorage.getItem('problemDB'));
// console.log(problemDB);

// var problemDB = JSON.stringify(p1) + "*" + JSON.stringify(p2) + "*" + JSON.stringify(p3);
// localStorage.setItem('problemDB', problemDB);
