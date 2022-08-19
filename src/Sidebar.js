import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder='Search or start new chat' />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                
            </div>
        </div>
    )
}

export default Sidebar