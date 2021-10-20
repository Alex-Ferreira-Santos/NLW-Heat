import styles from './styles.module.scss'

import logoImg from '../../assets/logo.svg'

export function MessageList(){
    return(
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vero tempore, eius placeat eum earum facere</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/Alex-Ferreira-Santos.png" alt="O Alex" />
                        </div>
                        <span>Alex Ferreira</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vero tempore, eius placeat eum earum facere</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/Alex-Ferreira-Santos.png" alt="O Alex" />
                        </div>
                        <span>Alex Ferreira</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vero tempore, eius placeat eum earum facere</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/Alex-Ferreira-Santos.png" alt="O Alex" />
                        </div>
                        <span>Alex Ferreira</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}