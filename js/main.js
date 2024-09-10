const $BTN_SORT = document.querySelector(".btn-sort")
const $INPUT = document.querySelector("input")
const $UL = document.getElementById("ul");

document.addEventListener("keydown",(e)=>{

    if(e.key === "Enter" && $INPUT.value !== ""){
        const $LI = document.createElement("li")
        $LI.textContent = $INPUT.value
        $UL.appendChild($LI)
        $INPUT.value = ""
        $UL.style.visibility = "visible"
    }
})

$BTN_SORT.addEventListener("click",e=>{
    let arrayList = document.querySelectorAll("li")
    console.log(arrayList)
    winner = Math.floor(Math.random() * arrayList.length)
    if(arrayList.length < 1){
        window.alert("Please you must be write the list")
    }
    else{
        $UL.innerHTML = ""
        window.alert(`The winner is ${arrayList[winner].textContent}`)
    }

})