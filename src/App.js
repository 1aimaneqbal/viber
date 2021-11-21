import React,{useState} from 'react'
import ControlBar from './components/ControlBar'
import Navbar from './components/Navbar'
import Notification from './components/Notification'
import VideoPlayer from './components/VideoPlayer'

const App = () => {
  const [ham, setHam] = useState(false)
  return (
    <>
      <Navbar ham={ham} setHam={setHam}/>
      <VideoPlayer/>
      <ControlBar ham={ham}>
        <Notification/>
      </ControlBar> 
    </>
  )
}

export default App

