import { Box, Paper, Stack, Typography } from "@mui/material";

const ChatCard = ({chat}) => {
    // const classes = 
    const thismobileuserid = "67eab7475e5e4dd0903e133705213b43";
    return ( 
        <div>
            <Box 
                margin='15px 0px 15px 0px'
                sx={{display: 'flex', flexDirection: 'row', float: chat.sender.user_id === thismobileuserid && 'right' }}
            >
                <Stack direction='row' spacing={1}  >
                    {chat.sender.user_id !== thismobileuserid && 
                        <img src={chat.sender.image} alt="" width='26px' height='26px' style={{borderRadius: '12px'}}></img>
                    }
                    <Box 
                        sx={card}
                        
                        backgroundColor={chat.sender.user_id === thismobileuserid ? '#1C63D5' : 'white'}
                        color={chat.sender.user_id === thismobileuserid ? 'white' : '#606060'}
                        borderRadius={chat.sender.user_id === thismobileuserid ? "12px 12px 0px 12px" : "0px 12px 12px 12px;"}
                        boxShadow={chat.sender.user_id !== thismobileuserid && "0px 4px 8px rgba(0, 0, 0, 0.08)"}
                    >
                        <Typography fontSize='14px' lineHeight='18px'>{chat.message}</Typography>
                    </Box>
                </Stack>
            </Box>
        </div>
     );
}

const card = {
    width: '600px',
    padding: '8px',
    textAlign: 'left',
    fontFamily: 'Mulish',
    "@media only screen and (max-width: 1024px)":{
        width : '450px',
    },
    "@media only screen and (max-width: 770px)":{
        width : '300px',
    },
    "@media only screen and (max-width: 480px)":{
        width : '250px',
    },
}
 
export default ChatCard;