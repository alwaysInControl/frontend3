const content = document.querySelector('.content')

const news = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        data.forEach((info) => {
            const div = document.createElement('div')
            div.className = 'card'
            div.innerHTML = `
                <img src="images/news.png" alt="img" class="card-img">
                <h2>Title: ${info.title}</h2>
                <h4>Description: ${info.body}</h4>
            `
            content.append(div)
        })
    } catch (e) {
        console.error(e)
    }
}

news()
