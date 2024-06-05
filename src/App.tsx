import './App.css'
import { Box } from '@chakra-ui/react';
import {  Navigate, Route, Routes, useResolvedPath } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ForgotPassword from './pages/ForgotPassword';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import Feed from './pages/Feed';
import MemeDetails from './pages/MemeDetails';
import Profile from './pages/Profile';

function App() {
  const path  = useResolvedPath("").pathname;;
  return (
    <Box w="100%" maxH="100vh">
    <Navbar />
      <Routes>
        <Route  path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/reset-password/:token" element={<ResetPassword/>} />
          <Route path={`${path}/newsfeed`} element={<Feed/>} />
          <Route path={`${path}/meme/:memeId`} element={<MemeDetails/>} />
          <Route path={`${path}/profile`} element={<Profile/>} />
          <Route path={`${path}/newsfeed`} element={<Navigate to="/" replace />}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>

  </Box>
  )
}

export default App
