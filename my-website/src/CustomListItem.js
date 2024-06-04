import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import './CustomListItem.css';

const CustomListItem = ({
  primary,
  onClick,
  expandable = false,
  isOpen = false,
  children,
  collapseStyle = {}
}) => {
  return (
    <>
      <ListItem disablePadding onClick={onClick} className="custom-list-item">
        <ListItemButton>
          <ListItemText primary={primary} />
        </ListItemButton>
      </ListItem>
      {expandable && (
        <Collapse in={isOpen} style={collapseStyle}>
          {children}
        </Collapse>
      )}
      <Divider orientation="vertical" flexItem className="list-item-divider" />
    </>
  );
};

export default CustomListItem;
