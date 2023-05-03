const block = document.querySelector('.block')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

let count = 1

const fetchData = async (count) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        const data = await response.json()
        block.innerHTML = `
            <h2>${data.title}</h2>
            <span>${data.id}</span>
            <h3>${data.completed}</h3>
        `
    } catch (e) {
        console.error(e)
    }
}

fetchData(count)

btnNext.onclick = async () => {
    count++
    await fetchData(count)
}

btnPrev.onclick = async () => {
    if (count > 1) {
        count--
        await fetchData(count)
    }
}

const fetchPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.error(e)
    }
}

fetchPosts()
