import React from "react";
import PrimaryAction from "../components/PrimaryButton";

import styles from "../styles/LandingPage.module.css";

const LandingPage = ({ history }) => {
    return <div className={styles.container}>
        <div className={styles.mainContainer}>
            <div className={styles.left}></div>
            <div className={styles.right}>
                <div>
                    <h3 className={styles.title}>Verify Your Identity</h3>
                    <h5 className={styles.subtitle}>To continue verifying your identity, click on the button below</h5>
                </div>
                <PrimaryAction link="/app/" />
                <h1 className={styles.brandSmall}>from Zarttech</h1>
            </div>
        </div>
        <div className={styles.footerContainer}>
            <div>
                <h2 className={styles.brand}>Zarttech Identity Verification</h2>
                <h2 className={styles.copyright}>Copyright &copy; 2022 Zarttech</h2>
            </div>
            <div className={styles.footerItems}>
                <div>
                    <li><a href="#doc">Cases</a></li>
                    <li className={styles.li}><a href="#doc">Documentation</a></li>
                </div>
                <div>
                    <li><a href="#doc">Support</a></li>
                    <li className={styles.li}><a href="#doc">About Us</a></li>
                </div>
                <div>
                    <li><a href="#doc">Privacy</a></li>
                    <li className={styles.li}><a href="#doc">Trust and Safety</a></li>
                </div>
            </div>
        </div>
    </div>
}

export default LandingPage;