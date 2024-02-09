import styles from "./account.module.scss";
const Account = () => {
    return (
        <>
            <div className={styles.account_wrapper}>
                <div className={styles.icon}>
                    <img src={require('../../../assets/img/icons/user-account.png')}  alt="" />
                </div>
                <div>
                    <p><strong>Bem-vindo :)</strong></p>
                    <p><a href="#">Entre</a> ou <a href="#">Cadastre-se</a></p>
                </div>
            </div>
        </>
    )
}

export default Account;