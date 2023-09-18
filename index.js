const textarea = document.getElementById("textarea")
const optionList = document.getElementById("options")

function addOptions(input){
    const op = input.split(',').filter(options => options.trim() !== '').map(options => options.trim())

    optionList.innerHTML = ''

    op.forEach(options => {
        const option = document.createElement('span')
        option.classList.add('options')
        option.innerText = options
        optionList.appendChild(option)
    })
}

textarea.addEventListener('keyup', (e)=>{
    addOptions(e.target.value)

    if(e.key === "Enter"){
        setTimeout(() =>{
            e.target.value = ''
        }, 10)

        randomOption()
    }
})

function randomOption(){
    const times = 25

    const interval = setInterval(() =>{
        const randomOp = pickOption()

        selectedOption(randomOp)

        setTimeout(() => {
            unselectedOption(randomOp)
        }, 100)
    }, 100)

    setTimeout(() =>{
        clearInterval(interval)

        setTimeout(() =>{
            const randomOp = pickOption()

            selectedOption(randomOp)    
        }, 100)
    }, times * 100)
}

function pickOption() {
    const op = document.querySelectorAll('.options')
    return op[Math.floor(Math.random() * op.length)]
}

function selectedOption(options){
    options.classList.add('selected')
}

function unselectedOption(options){
    options.classList.remove('selected')
}