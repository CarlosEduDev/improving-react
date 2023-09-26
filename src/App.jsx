import Images from './components/images'
import Hooks from './components/Hooks'
import './App.css'
import List from './components/ListasR'
import RenderCond from './components/RenderCond'
import Fragment from './components/Fragment'
import Container from './components/Container'


function App() {
  

  return (
    <>
      <h1>Heelooo</h1>
      <Images/>
      <Hooks/>
      <List />
      <RenderCond x={6} y={10}/>
      <Fragment/>
      <Container>
        <h1>Este é filho container</h1>
      </Container>
    </>
  )
}

export default App
