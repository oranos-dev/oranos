let darkmode = localStorage.getItem("darkmode")
const themeSwitch = document.getElementById("checkbox")

const enableDarkmode = () =>{
    document.body.classList.add("dark")
    localStorage.setItem("darkmode","active")
}
const disableDarkmode = () =>{
    document.body.classList.remove("dark")
    localStorage.setItem("darkmode",null)
}
if(darkmode==="active") enableDarkmode()

themeSwitch.addEventListener("click",() => {
    darkmode = localStorage.getItem("darkmode"); // Update the darkmode variable
    if(darkmode !== "active"){
        enableDarkmode()
    }else{
        disableDarkmode()
    }
})

