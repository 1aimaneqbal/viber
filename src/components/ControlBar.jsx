import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../SocketContext';

const ControlBar = ({children, ham}) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    const case1 = (e) => {
        e.preventDefault()
        leaveCall()
    }
    const case2 = (e) => {
        e.preventDefault()
        if(name==="" || name==="Name")
            alert("Enter name before calling.")
        else
            callUser(idToCall)
    }
    return (
        <div className={`controlbar ${ham?'openham':''}`}>
            <form noValidate autoComplete="off">
                <div className="column">
                    <p>My Information</p>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <CopyToClipboard text={me}>
                        <button onClick={(e) => e.preventDefault()}>Generate & Copy ID</button>
                    </CopyToClipboard>
                </div>
                <div className="column">
                    <p>Make a call</p>
                    <input type="text" placeholder="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                    {
                        callAccepted && !callEnded ? (
                            <button onClick={case1} className="hangup">Hang Up</button>
                        ) : (
                            <button onClick={case2} className="call">Call</button>
                        )
                    }
                </div>
            {children}
            </form>
        </div>
    )
}

export default ControlBar
