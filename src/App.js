import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { CapturedImageProvider } from './context/CapturedImageContext';
import LoginContextProvider from "./context/LoginContextProvider";
import Chat from './page/Chat';
import Home from './page/Home';
import Introduction from "./page/Introduction";
import Login from './page/Login';
import Matched from "./page/Matched";
import Matching from "./page/Matching";
import MbtiTestPage from "./page/MbtiTestPage";
import MyPage from './page/MyPage';

const App = () => {
  return (
      <BrowserRouter>                {/* URL 관리, 브라우저의 주소를 처리 */}
        <LoginContextProvider>       {/* 로그인 관리 */}
          <CapturedImageProvider>
          <Routes>                   {/* 어떤 컴포넌트를 렌더링할지 결정하는 역할 */}
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/mypage" element={<MyPage/>}/>
            <Route path="/mbtitest" element={<MbtiTestPage/>}/>
            <Route path="/introduction" element={<Introduction/>}/>
            <Route path="/matching" element={<Matching/>}/>
            <Route path="/matched" element={<Matched/>}/>
            <Route path="/chat" element={<Chat/>}/>
          </Routes>
          </CapturedImageProvider>
        </LoginContextProvider>
      </BrowserRouter>
  );
};

export default App;



// App.js
// import cv from 'opencv.js';
// import React, { useEffect, useRef, useState } from 'react';

// const App = () => {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [captured, setCaptured] = useState(false);
//   const [opencvLoaded, setOpencvLoaded] = useState(false);

//   const initWebcam = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       videoRef.current.srcObject = stream;
//       videoRef.current.play();
//     } catch (err) {
//       console.error('Error accessing webcam: ', err);
//     }
//   };

//   const loadOpenCV = () => {
//     if (cv) {
//       setOpencvLoaded(true);
//     } else {
//       console.error('OpenCV.js not loaded');
//     }
//   };

//   const buttonClick = () => {
//     initWebcam();
//     loadOpenCV();
//   }

//   useEffect(() => {
//     if (opencvLoaded && !captured) {
//       const faceCascade = new cv.CascadeClassifier();
//       faceCascade.load('haarcascade_frontalface_default.xml');

//       const ctx = canvasRef.current.getContext('2d');
//       const cap = new cv.VideoCapture(videoRef.current);
//       const frame = new cv.Mat(videoRef.current.videoHeight, videoRef.current.videoWidth, cv.CV_8UC4);
//       const gray = new cv.Mat();

//       const detectFace = () => {
//         if (captured) return;

//         cap.read(frame);
//         cv.cvtColor(frame, gray, cv.COLOR_RGBA2GRAY, 0);

//         const faces = new cv.RectVector();
//         faceCascade.detectMultiScale(gray, faces, 1.3, 5);

//         for (let i = 0; i < faces.size(); i++) {
//           const face = faces.get(i);
//           const faceCenterX = face.x + face.width / 2;
//           const faceCenterY = face.y + face.height / 2;

//           const regionX = videoRef.current.videoWidth / 2 - 100;
//           const regionY = videoRef.current.videoHeight / 2 - 100;
//           const regionWidth = 200;
//           const regionHeight = 200;

//           if (
//             faceCenterX > regionX &&
//             faceCenterX < regionX + regionWidth &&
//             faceCenterY > regionY &&
//             faceCenterY < regionY + regionHeight
//           ) {
//             setTimeout(() => {
//               if (!captured) {
//                 ctx.drawImage(videoRef.current, 0, 0, videoRef.current.videoWidth, videoRef.current.videoHeight);
//                 setCaptured(true);
//               }
//             }, 2000);
//           }
//         }

//         faces.delete();
//         requestAnimationFrame(detectFace);
//       };

//       detectFace();

//       return () => {
//         frame.delete();
//         gray.delete();
//         cap.delete();
//         faceCascade.delete();
//       };
//     }
//   }, [opencvLoaded, captured]);

//   return (
//     <div>
//       <h1>Webcam Capture with Face Detection</h1>
//       <button onClick={buttonClick}>Start</button>
//       <video ref={videoRef} width="640" height="480" style={{ display: 'none' }} />
//       <canvas ref={canvasRef} width="640" height="480" />
//     </div>
//   );
// };

// export default App;