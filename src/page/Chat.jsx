// import React, { useEffect, useState } from 'react';
// import InputField from "../chatcomponent/InputField/InputField";
// import MessageContainer from "../chatcomponent/MessageContainer/MessageContainer";
// import Header from "../component/Header/Header";
// import socket from "../server";
// import "./Chat.css";
// //npm install socketio

// const Chat = () => {

//     const [user, setUser] = useState(null);
//     const [message, setMessage] = useState("");
//     const [messageList, setMessageList] = useState([]);
//     console.log("message List", messageList);

//     // useEffect(() => {
//     //     socket.on('message', (message) => {
//     //         setMessageList((prevState) => prevState.concat(message));
//     //     })
//     //     askUserName();
        
//     // }, []);

//     useEffect(() => {
//         const messageListener = (message) => {
//             setMessageList((prevState) => prevState.concat(message));
//         };
    
//         socket.on('message', messageListener);

//         askUserName();

//         // Cleanup function
//         return () => {
//             socket.off('message', messageListener);
//         };

//         // socket.on('message', (message) => {
//         //     setMessageList((prevState) => prevState.concat(message));
//         // })
//         // askUserName();

        
//     }, []);
    
//     const askUserName = () => {
//         const userName = prompt("당신의 이름을 입력하세요");

//         socket.emit("login", userName, (res) => {
//             if (res?.ok) {
//                 setUser(res.data);
//             }
//         });
//     };
//     const sendMessage = (event) => {
//         event.preventDefault()
//         socket.emit("sendMessage", message,(res) => {
//             console.log("sendMessage res", res);
//         });
//     };
//     return (
//         <>
//             <Header/>
//             <div className='container'>
//                 <div className="Chat">
//                 <MessageContainer messageList={messageList} user={user} />
//                 <InputField
//                     message={message}
//                     setMessage={setMessage}
//                     sendMessage={sendMessage}
//                 />
//             </div>
//             </div>
//         </>
//     );
// }

// export default Chat;


import React, { useEffect, useState } from 'react';
import InputField from "../chatcomponent/InputField/InputField";
import MessageContainer from "../chatcomponent/MessageContainer/MessageContainer";
import Header from "../component/Header/Header";
import socket from "../server";
import "./Chat.css";
//npm install socketio

const Chat = () => {

    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [chat, setChat] = useState(false);
    const [askedForUsername, setAskedForUsername] = useState(false);  // 사용자 이름을 물어봤는지 추적하는 상태

    console.log("message List", messageList);

    useEffect(() => {
        const messageListener = (message) => {
            setMessageList((prevState) => prevState.concat(message));
        };
    
        socket.on('message', messageListener);
        
        if (!askedForUsername) {
            askUserName();
            setAskedForUsername(true);  // 사용자 이름을 물어봤음을 표시
        }
    
        // Cleanup function
        return () => {
            socket.off('message', messageListener);
        };
    }, [askedForUsername]);  // 'askedForUsername' 의존성 추가
    
    const askUserName = () => {
        const userName = prompt("당신의 이름을 입력하세요");

        socket.emit("login", userName, (res) => {
            if (res?.ok) {
                setUser(res.data);
            }
        });
    };
    
    const sendMessage = (event) => {
        event.preventDefault();
        socket.emit("sendMessage", message, (res) => {
            console.log("sendMessage res", res);
        });
    };
    
    return (
        <>
            <Header/>
            <div className='container'>
                <div className="Chat">
                <MessageContainer messageList={messageList} user={user} />
                <InputField
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                />
            </div>
            </div>
        </>
    );
}

export default Chat;
