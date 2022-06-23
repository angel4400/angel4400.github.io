/**
 * User构造函数
 * @param {用户名} userName 
 * @param {用户密码} userPassword 
 */
function User(userName,userPassword){
    this.userName = userName;
    this.userPassword = userPassword;
}

/**
 * 实现用户注册，用户信息保存在localStorage
 * @param {用户名} userName 
 * @param {密码} userPassword 
 */
function reg(userName,userPassword){
   //1.创建user对象
   var user = new User(userName,userPassword);
   //2.将user转换为json格式字符串(userData)
   var userData = JSON.stringify(user);
   //3.从localStorage中取出userData
   var userStr = localStorage.getItem('userData');
   //4.判断是否已经有用户信息
   if(userStr == null){
       //5.将userData写入localStorage中（key:userData）
        localStorage.setItem('userData',userData);
   }else{
       //6.判断用户名是否已经存在
       if(userStr.includes('"userName":"'+userName+'"')){
           return 0; //返回0,表示用户名已经存在
       }
       //7.将新的用户信息追加到原字符串
        localStorage.setItem('userData',userStr+"*"+userData);
   }
   return 1;
}

/**
 * 实现用户登录：比较localStorage中的userData
 * @param {用户名} userName 
 * @param {密码} userPassword 
 */
function login(userName,userPassword){
    //1.取出localStorage中的userData字符串（userData）
    var userData = localStorage.getItem('userData');
    //2.用split方法将userData用"*”进行分割，保存到数组（userArr）
    var userArr = userData.split('*');
    for(let userStr of userArr){
        let user = JSON.parse(userStr);
        if(user.userName == userName && user.userPassword == userPassword){
            return true;
        }
    }
    return false;
}

