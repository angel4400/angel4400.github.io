var proArr = []; //题目
var submitAnswer = []; //用户提交的答案
index = 0; //当前题目索引下标

//读取游览器的题目，转换为对象，返回题库数组
//随机生成题目
function getProData() {
  let pro = []; //题目
  let proData = localStorage.getItem("problemDB"); //读取题库
  let proStr = proData.split("*"); //拆分成数组
  for (let item of proStr) {
    proArr.push(JSON.parse(item)); //转换为对象
  }

  //随机生成题目
  for (let i = 0; i < 10; i++) {
    let index = Math.floor(Math.random() * proArr.length);
    pro.push(proArr[index]);
    proArr.splice(index, 1);
  }
  return pro; //返回题库数组
}

//显示题目
function showProblem(index) {
  document.getElementById("title").innerHTML =
    index + 1 + "." + proArr[index].title;
  document.getElementById("optionA").innerHTML = proArr[index].a;
  document.getElementById("optionB").innerHTML = proArr[index].b;
  document.getElementById("optionC").innerHTML = proArr[index].c;
  document.getElementById("optionD").innerHTML = proArr[index].d;
  // 将四个单选按钮复原
  let options = document.getElementsByName("option");
  for (let x of options) {
    x.checked = false;
  }

  // 显示已经提交的答案
  if (submitAnswer[index] != undefined) {
    for (let x of options) {
      if (x.value == submitAnswer[index]) {
        x.checked = true;
      }
    }
  }
}

//保存当前题目答案
function submitProblem() {
  let options = document.getElementsByName("option");
  for (let x of options) {
    if (x.checked) {
      submitAnswer[index] = x.value;
    }
  }
}

proArr = getProData();
showProblem(0);

document.getElementById("btnNext").onclick = function () {
  // 判断是否是最后一题
  if (index < proArr.length - 1) {
    // 保存当前题目答案
    submitProblem();
    index++;
    showProblem(index);
  } else {
    index = proArr.length - 1;
    alert("已经是最后一题了");
  }
};

document.getElementById("btnPrev").onclick = function () {
  // 判断未作答不能点击下一题

  // 判断是否是第一题
  if (index > 0) {
    // 保存当前题目答案
    submitProblem();
    index--;
    showProblem(index);
  } else {
    index = 0;
    alert("已经是第一题了");
  }
};
