import styles from './CountryInfoCard.module.css'

const CountryInfoCard = (props) => {

    const country = props.country
    const close = props.close
    console.log(country)

    return (
        <div className={styles.modal}>
            <div className={styles.infoCard}>
                <h1 className={styles.name}>{country.name.common}</h1>
                <img className={styles.flag} src={country.flags.png} alt={country.flags.alt} title={country.flags.alt} />
                <section><strong>Region: </strong> {country.region}
                    <span>
                        {country.subregion ? country.subregion : " "}
                    </span>
                </section>
                <section> <strong>Capital: </strong>{country.capital}</section>
                <section className={styles.area}> <strong>Area: </strong>{country.area.toLocaleString({ minimumFractionDigits: 2 })}</section>
                <section> <strong>Population: </strong>{country.population.toLocaleString({ minimumFractionDigits: 2 })}</section>

                <section> <strong>TimeZones:</strong>
                    <ul>
                        {country.timezones ? (
                            country.timezones.map(tz => (
                                <li key={tz}>{tz}</li>
                            ))
                        ) : (<li className={styles.empty}>No borders with other countries</li>)
                        }
                    </ul>
                </section>

                <section> <strong>Languages:</strong>
                    <ul>
                        {country.languages ? (
                            Object.keys(country.languages).map(key => (
                                <li key={key}>{country.languages[key]}</li>
                            ))
                        ) : (<li className={styles.empty}>No official languages</li>)
                        }
                    </ul>
                </section>

                <section> <strong>Currencies:</strong>
                    <ul>
                        {country.currencies ? (
                            Object.keys(country.currencies).map(currency => (
                                <li key={currency}>{country.currencies[currency].name}
                                    (<strong>{country.currencies[currency].symbol}</strong>)</li>
                            ))
                        ) : (<li className={styles.empty}>No official currencies</li>)
                        }
                    </ul>
                </section>

                <section> <strong>Borders:</strong>
                    <ul>
                        {country.borders ? (
                            country.borders.map(borderCountry => (
                                <li key={borderCountry}>{borderCountry}</li>
                            ))
                        ) : (<li className={styles.empty}>No borders with other countries</li>)
                        }
                    </ul>
                </section>
                <button className={styles.close} onClick={close}>close</button>
            </div>
        </div>
    )
}

export default CountryInfoCard
