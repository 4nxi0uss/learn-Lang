import Style from './App.module.scss'
import Block from 'bem-css-modules'

import Header from './component/Header/Header'
import MainContent from './component/MainContent/MainContent'

const b = Block(Style)

function App() {

  return (
    <div className={b()}>
      <Header />
      <MainContent />
    </div>
  )
}

export default App
