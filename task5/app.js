const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')

const fetchData = async () => {
    try {
        const response = await fetch('currency.json')
        const data = await response.json()
        return data
    } catch (e) {
        console.error(e)
    }
}

const convert = (element, target, target2, currency) => {
    element.oninput = async () => {
        const data = await fetchData()
        if (currency === 1) {
            target.value = (element.value / data.usd).toFixed(2)
            target2.value = (element.value / data.euro).toFixed(2)
        } else if (currency === 2) {
            target.value = (element.value * data.usd).toFixed(2)
            target2.value = (target.value / data.euro).toFixed(2)
        } else if (currency === 3) {
            target.value = (element.value * data.euro).toFixed(2)
            target2.value = (target.value / data.usd).toFixed(2)
        }
        if (element.value === '') {
            target.value = ''
            target2.value = ''
        }
    }
}

convert(som, usd, euro, 1)
convert(usd, som, euro, 2)
convert(euro, som, usd,3)
