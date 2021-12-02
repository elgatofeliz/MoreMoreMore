let counter = 0
let div = document.querySelector("div")

let next = () => {
    let newElt = document.createElement("div")
    newElt.textContent = counter
    if (counter == 0 || counter % 10 == 0) {
        newElt.classList.add("weiss")
    } else {
        newElt.classList.add("rechteck")
    }
    div.appendChild(newElt)
    counter += 1
}

document.querySelector("button").addEventListener("click", next)