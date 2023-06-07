import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.css'

const Header = (props) => {
    const countries = props.countries
    const setFilteredCountries = props.setFilteredCountries
    const [regions, setRegions] = useState([])
    const [regionFiltered, setRegionFiltered] = useState([])
    const [currentRegion, setCurrentRegion] = useState('All')

    const search = useRef()

    useEffect(() => {
        function getRegions() {
            const uniqueRegions = ['All', ...new Set(countries.map((country) => country.region))]
            setRegions(uniqueRegions)
            console.log(uniqueRegions)
        }
        getRegions()
        setRegionFiltered(countries)
    }, [countries])

    useEffect(() => {
        setFilteredCountries(regionFiltered)
    }, [regionFiltered, setFilteredCountries])

    function onRegionClick(region) {
        search.current.value = ''
        setRegionFiltered(countries.filter(country => {
            if (region === 'All') {
                setCurrentRegion('All')
                return country
            }
            if (country.region === region) {
                setCurrentRegion(region)
                return country
            }
            else return false
        }))
    }


    function onChange(value) {
        if (!value) {
            setFilteredCountries(regionFiltered)
            return
        }
        setFilteredCountries(
            regionFiltered.filter(country => {
                return (country.name.common.toUpperCase().includes(value.toUpperCase())
                    || country.name.official.toUpperCase().includes(value.toUpperCase()))
            })
        )
    }
    return (
        <header className={styles.header}>
            {
                regions.map((region) => (
                    <button key={region} className={currentRegion === region ? styles.current : ""} onClick={() => onRegionClick(region)} >{region}</button>
                ))
            }
            <input type="text" placeholder='filter by name' ref={search} onChange={(e) => onChange(e.target.value)} />
        </header>
    )
}

export default Header
