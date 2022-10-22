const SignUp=document.getElementById("signUp")
const LogIn=document.getElementById("LogIn")

const complate=document.getElementById("complate")

const eye=document.getElementById("eyeClose")
const eyeShow=document.getElementById("eyeOpen")

const eyeLogin=document.getElementById("eyeCloseLogin")
const eyeShowLogin=document.getElementById("eyeOpenLogin")


const passwordEl=document.getElementById("password")
const LoginpasswordEl=document.getElementById("Login-password")
const userName=document.getElementById("username")
const LoginuserName=document.getElementById("Login-username")

const submitBtnEl=document.getElementById("submit")
const LoginsubmitBtnEl=document.getElementById("Login-submit")

const name=document.getElementById("name")


    eye.addEventListener("click",()=>{
        eye.classList="hidden"
        eyeShow.style.display="block"
        let show=passwordEl.value
        passwordEl.type="text"
        passwordEl.innerHTML=show
    })
    eyeShow.addEventListener("click",()=>{
        eye.classList.remove("hidden")
        eye.classList="fa-sharp fa-solid fa-eye-slash eye"
        eyeShow.style.display="none"
        let show=passwordEl.value
        passwordEl.type="password"
    })


    eyeLogin.addEventListener("click",()=>{
        eyeLogin.classList="hidden"
        eyeShowLogin.style.display="block"
        let show=LoginpasswordEl.value
        LoginpasswordEl.type="text"
        LoginpasswordEl.innerHTML=show
    })
    eyeShowLogin.addEventListener("click",()=>{
        eyeLogin.classList.remove("hidden")
        eyeLogin.classList="fa-sharp fa-solid fa-eye-slash eye"
        eyeShowLogin.style.display="none"
        let show=LoginpasswordEl.value
        LoginpasswordEl.type="password"
    })


userName.addEventListener("input",()=>{
    if(userName.value.length <3){
        userName.style.border="2px solid red"
    }
    else{
        userName.style.border=" 1px solid grey"
    }
})
passwordEl.addEventListener("input",()=>{
    if(passwordEl.value.length <4){
        passwordEl.style.border="2px solid red"
    }
    else{
        passwordEl.style.border=" 1px solid grey"
    }
})

submitBtnEl.addEventListener("click",(e)=>{
    e.preventDefault();
    if(userName.value.length >=3 && passwordEl.value.length >=4){
        localStorage.setItem("user-Name",userName.value)
        localStorage.setItem("user-Password",passwordEl.value)
        SignUp.style.display="none"
        LogIn.style.display="block"
    }
    else{
        alert("Iltimos UserName 3tadan ko`p va parol 4tadan ko`p bo`lsun") 
    }
    
})

LoginuserName.addEventListener("input",()=>{
    if(LoginuserName.value.length <3 ){
        LoginuserName.style.border="2px solid red"
    }
    else{
        LoginuserName.style.border=" 1px solid grey"
    }
})
LoginpasswordEl.addEventListener("input",()=>{
    if(LoginpasswordEl.value.length <3 ){
        LoginpasswordEl.style.border="2px solid red"
    }
    else{
        LoginpasswordEl.style.border=" 1px solid grey"
    }
})

LoginsubmitBtnEl.addEventListener("click",(e)=>{
    e.preventDefault();
    if(LoginuserName.value.length >=3 && LoginpasswordEl.value.length >=4){
        let userNameLocal=localStorage.getItem("user-Name")
        let userPasswordLocal=localStorage.getItem("user-Password")
        if(LoginuserName.value == userNameLocal && LoginpasswordEl.value == userPasswordLocal){
            LogIn.style.display="none"
            complate.style.display="flex"
            name.innerHTML=userNameLocal + " Hush Kelibsiz"
        }
        else{
            alert("Iltimos Boshqattan ro`yhatdan o`ting")
        }
    }
    else{
        alert("Iltimos UserName 3tadan ko`p va parol 4tadan ko`p bo`lsun")
        if(LoginuserName.value.length <3 || LoginpasswordEl.value.length <4){
            LoginuserName.style.border="2px solid red"
            LoginpasswordEl.style.border="2px solid red"
        }
        else{
            LoginuserName.style.border=" 1px solid grey"
            LoginpasswordEl.style.border=" 1px solid grey"
        }
    }
})
let userNameLocal=localStorage.getItem("user-Name")
let userPasswordLocal=localStorage.getItem("user-Password")
if(userNameLocal && userPasswordLocal){
    SignUp.style.display="none"
    LogIn.style.display="none"
    complate.style.display="flex"
    name.innerHTML=userNameLocal + " Hush Kelibsiz"

}
else{
    SignUp.style.display="block"
    LogIn.style.display="none"
    complate.style.display="none"
}


