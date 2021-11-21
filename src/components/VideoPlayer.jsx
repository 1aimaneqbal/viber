import React, {useContext} from 'react'
import { SocketContext } from '../SocketContext'

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream} = useContext(SocketContext);
    return (
        <div className="videoContainer">
            {
                stream && (
                    <div className="video">
                        <h3>{name || 'Name'}</h3>
                        <video playsInline muted ref={myVideo} autoPlay  />
                    </div>
                )
            }
            {
                callAccepted && !callEnded && (
                    <div className="video">
                        <h3>{name || 'Name'}</h3>
                        <video playsInline ref={userVideo} autoPlay  />
                    </div>
                )
            }
        </div>
    )
}

export default VideoPlayer
