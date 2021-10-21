import styles from './App.module.scss'
import { LoginBox } from './components/LoginBox'
import { useAuth } from './components/LoginBox/auth'
import { MessageList } from './components/MessageList'
import { SendMessageForm } from './components/SendMessageForm'

export function App() {
  const { user } = useAuth()
  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
      <MessageList/>
      {!!user ? <SendMessageForm/> : <LoginBox/>}
    </main>
  )
}

