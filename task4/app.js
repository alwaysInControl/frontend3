const btn = document.querySelector('.btn')

btn.addEventListener('click', async () => {
    try {
        const response = await fetch('peoples.json')
        const peoples = await response.json()
        peoples.forEach((person) => {
            const div = document.createElement('div')
            div.innerHTML = `
                <h1>Name: ${person.name}</h1>
                <h1>Age: ${person.age}</h1>
                <hr>
            `
            document.body.append(div)
        })
    } catch (e) {
        console.error(e)
    }
})
