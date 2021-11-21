import React, { useContext } from 'react';
import { SocketContext } from '../SocketContext'

const Notification = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);
    const callfunction = (e) =>{
        e.preventDefault()
        answerCall()
    }
    return (
        <>
          {call.isReceivingCall && !callAccepted && (
            <div className="notif">
              <p>{call.name} is calling:</p>
              <button onClick={callfunction}>
                Answer
              </button>
            </div>
          )}
        </>
    )
}

export default Notification
