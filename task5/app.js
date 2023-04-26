const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')

const convert = (element, target, target2, currency) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', 'currency.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            if (currency === 1) {
                target.value = (element.value / response.usd).toFixed(2)
                target2.value = (element.value / response.euro).toFixed(2)
            } else if (currency === 2) {
                target.value = (element.value * response.usd).toFixed(2)
                target2.value = (target.value / response.euro).toFixed(2)
            } else if (currency === 3) {
                target.value = (element.value * response.euro).toFixed(2)
                target2.value = (target.value / response.usd).toFixed(2)
            }
            if (element.value === '') {
                target.value = ''
                target2.value = ''
            }
        }
    }
}

convert(som, usd, euro, 1)
convert(usd, som, euro, 2)
convert(euro, som, usd,3)
