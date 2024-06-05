import { Box } from '@chakra-ui/react';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { CgFeed } from 'react-icons/cg';
import RightSidebarItem from './RightSidebarItem';
import { IoNotificationsOutline } from 'react-icons/io5';
import { AiOutlineSetting } from 'react-icons/ai';
import { RiMoreFill } from 'react-icons/ri';

const RightSidebar: React.FC = () => {
  return (
    <Box flex={{ base: 'flex', md: 'block' }} p="2" h="100%" w="200px">
      <RightSidebarItem
        text="Profile"
        icon={<CgProfile />}
        routePath="profile"
      />
      <RightSidebarItem text="Feed" icon={<CgFeed />} routePath="newsfeed" />
      <RightSidebarItem
        text="Notification"
        icon={<IoNotificationsOutline />}
        routePath="notification"
      />
      <RightSidebarItem
        text="Settings"
        icon={<AiOutlineSetting />}
        routePath="settings"
      />
      <RightSidebarItem text="More" icon={<RiMoreFill />} routePath="more" />
    </Box>
  );
};

export default RightSidebar;
