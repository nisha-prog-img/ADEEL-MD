const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUw4dEdaWU9ZUFFpYnluOHZ1UFlqaDlnUzRhbGhmbTB5dkZmdDRiOWIxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVlFVzc2YzRkRWZ1VjFrdVg3Z3hlY216dmtUc2dwaWZNV3hMVnpmOCtrWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXUDVoN09Id2NQMDRNSmxvM3c2MmVhWjBtc0VnQVdFNG9TbFNQZVpGKzBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWQzV2UDJyN0lUbldQYjlMTWxLcUplMWxVZVdrKy96NzlBN3psSzllbGtvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNOaHI2UVVxWlBEODZyb0JHWXczcldOV3drRUU3OW0zSEtkK0Vuc3VKVW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpKSE00NWNwakdjdm5uekkwbW15d0hZRUcrQjBCNDA3SVlwUkxrcTNkMjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0xsV0cwZGpaOUZObjhXcGlzdVpNeFJFNVIyOE95aHg2WnkweHQ5M3ZYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTd2eWx2S2J2TWRoY0N6WlhZb2ZGNjg0NldZZTBMYnlQSnEwYURxN01nND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRDazRyamVYR0RvTzJIU1dFUlFOVmFGL3Q0enpKYlAycnNQK0IrdHY2SnU3UWFQcUpRS2huQ1RQWEwxcHRJVDBrdUt4d1FCdmUyMmlzZkVVcHROM0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjcsImFkdlNlY3JldEtleSI6ImhQRUIvb0s1ckxYeEY1ZWhFU0JWeUF5ekVWNVRsUEtmbkhmQTlaMUlxU2M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkFERUVMNU1EIiwibWUiOnsiaWQiOiI5MjMxOTcxOTg0MDQ6NTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUMmZcnNvbsSxxLFmxLHJmWQgSG90xLFsxLFjxLFvdSd4IiwibGlkIjoiMTk0NjMxMjI0NTc4MjQ5OjUzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmFjcUxRQkVLWHN1TWdHR0JVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTExaOUJNUFIwWDVKczNaZFBHOGJOZEUzcHBybi9XMFRmdWFNZ3NScUN4OD0iLCJhY2NvdW50U2lnbmF0dXJlIjoia0FVZE1kKzIrSFBrNWZ0TklMWlhudGw2V3o5L2g1ZEJyR3dkNE1jVCt5OER0bno5dnIybU9ybk01YmNSaG9BNVgzVHRVdEVrUXpoNEVCRnEwbW93Q1E9PSIsImRldmljZVNpZ25hdHVyZSI6IndUc2dsODcwVTE0ZVRHKy9vWjNydHJWM1FBLytrWHpQTGNWaElGcHZMeG9vM0xhWFlPTmVBS09HcjE3OHpQS1c5MlordFgyQzFUWjExSzRWL1BHK0RBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTk3MTk4NDA0OjUzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlN5MmZRVEQwZEYrU2JOMlhUeHZHelhSTjZhYTUvMXRFMzdtaklMRWFnc2YifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElBZ2dJIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MjUzOTA1OCwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZpdyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ADEEL-MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn-bandaheali.vercel.app/file/ADEEL-MD31424.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ADEEL-MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "ADEEL-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923035512967",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ADEEL-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴅᴇᴇʟ-ᴍᴅ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn-bandaheali.vercel.app/file/ADEEL-MD31424.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*ADEEL-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923035512967",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 
ANTI_CALL: process.env.ANTI_CALL || "false"
// make it true for auto call reject 
};
