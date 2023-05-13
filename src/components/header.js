import React,{useState} from "react";
import { Box, Divider, IconButton, MenuItem, Typography } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';

import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';

const Header = ({data}) => {
    const [open,setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    return ( 
        <div style={{margin:'10px'}}>
            <Box display='flex' justifyContent='space-between'>
                <Box  display='flex' >
                    <IconButton  color="primary">
                        <ArrowBackIcon color="black"/>
                    </IconButton>
                    <Typography color='#141E0D' fontSize='24px' fontWeight='bold'>{data.name}</Typography>
                </Box>
               <IconButton  color="primary">
                    <EditOutlinedIcon fontSize='medium'/>
               </IconButton>
            </Box>
            <Box  display='flex' justifyContent='space-between' marginTop='15px'>
                <Box>
                    <Typography color='#606060' fontSize='14px'>From <span style={{color:'#000' ,fontWeight:'bold'}} >{data.from}</span></Typography>
                    <Typography color='#606060' fontSize='14px'>To <span style={{color:'#000' ,fontWeight:'bold'}}  >{data.to}</span></Typography>
                </Box>
                <IconButton  color="primary" onClick={()=>setOpen(true)}>
                    <MoreVertOutlinedIcon  />
                </IconButton>
            </Box>
            <Divider style={{marginTop:'20px'}}/>
            <Menu
                anchorEl="hi"
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuItem onClick={handleClose}>
                    <PeopleOutlineOutlinedIcon /> Members
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <PhoneOutlinedIcon /> Share number
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ReportOutlinedIcon /> Report
                </MenuItem>
            </Menu>
        </div>
     );
}
 
export default Header;