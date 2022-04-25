const password = "TrustNo1"

const passwordInput = document.getElementById("password-input")
const passwordBtn = document.getElementById("password-btn")
const launchBtn = document.getElementById("launch-btn")

const checkButtons = document.getElementById("check-buttons")
const levers = document.getElementById("levers")

/*
    Password control
*/
const enterPassword = () => {
    if(passwordInput.value === password){
        passwordInput.value = ""
        passwordInput.setAttribute("placeholder", "Accepted!")
        document.querySelectorAll(".control-panel input").forEach(
            input => {
                input.removeAttribute("disabled")
            }
        )
        launchBtn.setAttribute("disabled", "")
        passwordInput.setAttribute("disabled", "")
        passwordBtn.setAttribute("disabled", "")
    } else {
        alert("Wrong password")
    }
}

// event listeners
passwordInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        enterPassword()
    }
})
passwordBtn.addEventListener("click", enterPassword)

/*
    Levers and checkboxes
*/
let checkedButtons = 0
let leversMaxed = 0

const enableLaunchIfCheckedAndLevers = () => {
    if(
        checkedButtons === checkButtons.children.length &&
        leversMaxed === levers.children.length
    ){
        launchBtn.removeAttribute("disabled")
    } else {
        launchBtn.setAttribute("disabled", "")
    }
}

const countCheckedButtons = () => {
    let checkedCount = 0
    for (let child of checkButtons.children) {
        if(child.checked == true){
            checkedCount++
        }
    }
    checkedButtons = checkedCount
    enableLaunchIfCheckedAndLevers()
}

const countLeverButtons = () => {
    let leversCount = 0
    for (let child of levers.children) {
        console.log(child)
        if(child.value == child.max){
            leversCount++
        }
    }
    leversMaxed = leversCount
    enableLaunchIfCheckedAndLevers()
}

// event listeners
for (let child of checkButtons.children) {
    child.addEventListener("change", countCheckedButtons)
}
for (let child of levers.children){
    child.addEventListener("change", countLeverButtons)
}
