/**
 * User构造函数
 * @param {用户名} userName
 * @param {用户密码} userPassword
 */
function User(userName, userPassword) {
  this.userName = userName; //用户名
  this.userPassword = userPassword; //用户密码
}

/**
 * 实现用户注册，用户信息保存在localStorage中
 * @param {用户名} userName
 * @param {密码} userPassword
 */
function reg(userName, userPassword) {
  // 1.创建user对象
  var user = new User(userName, userPassword);
  // 2.将user转换为json格式字符串(userData)
  var userData = JSON.stringify(user);
  // 3.从localStorage中取出userData
  var userStr = localStorage.getItem("userData");
  // 4.判断是否已有用户信息
  if (userStr == null) {
    // 5.将userDa写入localStorage中(key:userData)
    localStorage.setItem("userData", userData);
  } else {
    // 6.判断用户名是否已经存在
    if (userStr.includes('"userName":"' + userName + '"')) {
      return 0;
    }
    // 7.将新用户信息追加到原字符串中
    localStorage.setItem("userData", userStr + "*" + userData);
  }

  return 1;
}

/**
 *实现用户登录
 * @param {用户名} userName
 * @param {密码} userPassword
 * @returns
 */

function login(userName, userPassword) {
  // 1.取出localStorage中的userData字符串(userData)
  var userData = localStorage.getItem("userData");
  // 2.用split方法将userData用"*"分割,保存到数组
  var userArr = userData.split("*");
  for (let userStr of userArr) { //遍历数组
    let user = JSON.parse(userStr); //将字符串转换为对象
    if (user.userName == userName && user.userPassword == userPassword) { //判断用户名和密码是否正确
            var userName = document.getElementById("userName").value;
            localStorage.setItem("userName", userName);
      return true; //如果正确，返回true
    }
  }
  return false; //如果错误，返回false
}

//如果localStorage中没有userData,则创建一个空数组
if (localStorage.getItem("userData") == null) {
  localStorage.setItem("userData", "[]"); //创建一个空数组
}

/**
 * 验证码
 * @param {验证码} code
 * @returns
 */
var checkCode = document.getElementById("code"); //获取验证码
var btn = document.getElementById("btn");
var code = ""; //验证码
function createCode() { //创建验证码
  code = ""; //清空验证码
  var codeLength = 4; //验证码的长度

  var random = [ //随机数
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  for (var i = 0; i < codeLength; i++) { //循环操作
    var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）
    code += random[index]; //根据索引取得随机数加到code上
  }

  checkCode.innerHTML = code; //把code值赋给验证码
}

function validate() { //验证码验证
  var input = document.getElementById("text").value.toUpperCase(); //获取输入的验证码并转化为大写
  if (input == 0) { //判断输入的验证码是否正确
    alert("请输入验证码");
  } else if (input != code) { //判断输入的验证码是否正确
    alert("验证码不正确，请重新输入");
    input = " ";
    createCode(); //重新创建验证码
  } else {
    alert("验证码正确");
  }
}

//     if (login(userName, password)){
//         alert("登录成功");
//         window.location.href = "./userManage.html";
//     } else {
//         alert("用户名或者密码错误");
//     }
//     // //从浏览器的localStorage读取用户信息
//     // var userStr = localStorage.getItem('userData');
//     //  //将JSON格式字符串的用户信息转换为对象
//     // var user = JSON.parse(userStr);
//     // if(userName==user.name&&password==user.password){
//     //     alert('登录成功');
//     //     window.location.href = 'exam.html';
//     // }else{
//     //     alert('登录失败');
//     // }
// };

// 创建验证码
document.getElementById("btnLogin").onclick = function () { //点击登录按钮时触发
  var input = document.getElementById("text").value.toUpperCase(); //获取输入的验证码并转化为大写
  if (input == 0) { //判断输入的验证码是否正确
    alert("请输入验证码");
  } else if (input != code) {
    alert("验证码不正确，请重新输入");
    input = " ";
    createCode(); //重新创建验证码
  } else {
    //登录验证
    var userName = document.getElementById("userName").value; //获取用户名
    var password = document.getElementById("userPassword").value; //获取密码
    if (login(userName, password)) { //判断用户名和密码是否正确
      alert("登录成功");
      window.location.href = "../userhtml/index.html"; //跳转到用户管理页面
    } else {
      alert("用户名或者密码错误");
    }
  }
};
document.getElementById("wxLogin").onclick = function () {
  alert("微信登录暂未开放");
};

document.getElementById("dxLogin").onclick = function () {
  alert("短信登录暂未开放");
};
