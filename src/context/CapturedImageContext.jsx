// CapturedImageContext.jsx
import React, { createContext, useState } from 'react';

export const CapturedImageContext = createContext();

export const CapturedImageProvider = ({ children }) => {
    const [capturedImage, setCapturedImage] = useState(null);

    return (
        <CapturedImageContext.Provider value={{ capturedImage, setCapturedImage }}>
            {children}
        </CapturedImageContext.Provider>
    );
};