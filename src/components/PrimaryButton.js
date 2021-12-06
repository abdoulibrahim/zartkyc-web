import React from 'react'

import styles from "../styles/PrimaryButton.module.css";

const PrimaryAction = ({ link, onClick }) => {
    return onClick ? <a onClick={(e) => onClick(e)} href="#blank" className={styles.primaryAction}>Begin Verification</a> : <a href={link} className={styles.primaryAction}>Begin Verification</a>
    
} 

export default PrimaryAction;