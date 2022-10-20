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
    }
})

