import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { Box, Stack, Tooltip } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

export default function Input() {
  return (
    <Paper
      component="form"
      elevation={0}
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', marginBottom:'20px'}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Reply"

      />
      <Tooltip arrow placement='top' sx={{backgroundColor: "#008000"}} title={
        <Stack direction="row" spacing={2}>
            <CameraAltOutlinedIcon fontSize='small'/> <VideocamOutlinedIcon fontSize='small'/> <FileDownloadOutlinedIcon fontSize='small'/>
        </Stack>}
      >
        <IconButton  color="primary" type="button" sx={{ p: '10px' }} aria-label="search">
            <AttachFileIcon />
        </IconButton>
      </Tooltip>
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
