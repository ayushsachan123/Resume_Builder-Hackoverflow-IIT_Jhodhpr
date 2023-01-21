import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResumeBuilderMain from './components/ResumeBuilderMain';
import Login from './components/Login';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resume-builder" element={<ResumeBuilderMain />} />
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);