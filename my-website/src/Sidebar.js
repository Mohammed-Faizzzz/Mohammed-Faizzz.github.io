import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='banner'>
            <Box classname='banner'>
                <Toolbar />
                <div>
                    <h3 className='heading'>Life of Faiz</h3>
                </div>
                <List>
                    {['About Me', 'Work Experience', 'Personal Projects', 'Academics'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </div>
    );
};

export default Sidebar;
