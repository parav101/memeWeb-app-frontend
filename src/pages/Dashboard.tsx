import { Box } from '@chakra-ui/react';
import React from 'react';
// import {  Route, Routes ,Navigate,useResolvedPath} from 'react-router-dom';
// import RightSidebar from '../components/RightSidebar';
// import Feed from './Feed';
// import MemeDetails from './MemeDetails';
// import Profile from './Profile';

const Dashboard: React.FC = () => {


  return (
    <Box w="full" flex={{ sm: 'flex' }} maxH="100vh">
      {/* <RightSidebar />
      <Box flex={{ sm: 1 }}>
        <Routes>
          <Route path={`${path}/newsfeed`} element={<Feed/>} />
          <Route path={`${path}/meme/:memeId`} element={<MemeDetails/>} />
          <Route path={`${path}/profile`} element={<Profile/>} />
          <Route path={`${path}/newsfeed`} element={<Navigate to="/" replace />}/>
        </Routes>
      </Box> */}
    </Box>
  );
};

export default Dashboard;
