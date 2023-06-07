import { useEffect, useState } from 'react'
import { getAllCountries } from './services/getCountries'
import Countries from './Countries/Countries'
import Header from './Header/Header'

const App = () => {
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])

    useEffect(() => {
        const getCountries = () => {
            getAllCountries()
                .then(data => {
                    setCountries(data)
                    setFilteredCountries(data)
                })
        }
        getCountries()

    }, [])
    return (
        <div>
            <Header countries={countries} setFilteredCountries={setFilteredCountries}></Header>
            <Countries countries={filteredCountries}></Countries>
        </div>
    )
}

export default App
