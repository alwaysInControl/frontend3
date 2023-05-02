const block = document.querySelector('.block')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

let count = 1

const fetchData = (count) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            block.innerHTML = `
                <h2>${data.title}</h2>
                <span>${data.id}</span>
                <h3>${data.completed}</h3>
            `
        })
}

fetchData(count)

btnNext.onclick = () => {
    count++
    fetchData(count)
}

btnPrev.onclick = () => {
    if (count > 1) {
        count--
        fetchData(count)
    }
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
