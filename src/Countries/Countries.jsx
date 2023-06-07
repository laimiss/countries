import React from 'react'
import CountryTile from '../CountryTile/CountryTile'
import styles from "./Countries.module.css"

const Countries = (props) => {
    return (
        <div className={styles.gallery} style={{ backgroundImage: "url(/img/map.svg)" }}>{
            props.countries.map(country => (
                <CountryTile key={country.cca3} country={country}></CountryTile>
            ))
        }
        </div>
    )
}

export default Countries
