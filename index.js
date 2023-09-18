const textarea = document.getElementById("textarea")
const options = document.getElementById("options")

function addOptions(input){
    const options = input.split(',').filter(options => options.trim() !== '').map(options => options.trim())

    options.innerHTML = ''

    options.forEach(options => {
        const options = document.createElement('span')
        options.classList.add('options')
        options.innerText = options
        options.appendChild(options)
    })
}