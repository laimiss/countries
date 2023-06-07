
const URL_ALL = 'https://restcountries.com/v3.1/all'

async function getAllCountries() {
    const res = await fetch(URL_ALL)
    const countries_data = await res.json()
    return countries_data
}

export { getAllCountries }