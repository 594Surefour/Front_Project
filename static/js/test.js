let input = document.querySelector(".input")
let run = document.querySelector("button")
let ouput = document.querySelector(".output")

function main() {
    run.addEventListener("click", function(){
        let temp = input.value;
        ouput.innerHTML = temp;
    });
}

export {
    main
}