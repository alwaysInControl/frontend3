const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open("GET", "peoples.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener('load', () => {
        const peoples = JSON.parse(request.response)
        peoples.forEach((person) => {
            const div = document.createElement('div')
            div.innerHTML = `
                <h1>Name: ${person.name}</h1>
                <h1>Age: ${person.age}</h1>
                <hr>
            `
            document.body.append(div)
        })
    })
})
