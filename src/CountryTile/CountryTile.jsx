import { useState } from 'react'
import styles from './CountryTile.module.css'
import Modal from 'react-modal'
import CountryInfoCard from '../CuntryInfoCard/CountryInfoCard'

const CountryCard = (props) => {
    const country = props.country
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }

    return (
        <div className={styles.tile} title={country.name.official}>
            <img className={styles.flag} src={country.flags.png} alt={country.name.common} />
            <p className={styles.name}>{country.name.common}</p>
            <p>Capital: {country.capital}</p>
            <p><strong>Region: </strong> {country.region}
                <span>
                    {country.subregion ? " (" + country.subregion + ")" : " "}
                </span>
            </p>
            <button className={styles.infoButton} onClick={setModalIsOpenToTrue}>More info</button>
            <Modal isOpen={modalIsOpen} ariaHideApp={false}>
                <CountryInfoCard country={country} close={setModalIsOpenToFalse} />
            </Modal>
        </div>
    )
}

export default CountryCard
