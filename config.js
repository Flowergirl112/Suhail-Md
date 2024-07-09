const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348104107887";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_32_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDU3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDM4LFxuICAgICAgICA4MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NixcbiAgICAgICAgNzMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDYsXG4gICAgICAgIDU5LFxuICAgICAgICAzLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDY4LFxuICAgICAgICAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjksXG4gICAgICAgIDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRndLNEVadnIvZ2poSHE3L2JDdVJRWE9HMnZhWGdUTHhCRTVFMm8wQWRmOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibXNsQjZOZjlUWWU3cDN5clVRVkgzZ1wiLFxuICBcInBob25lSWRcIjogXCI4ZjI0MTBmOC1kZWM1LTQxNzktOTQ0Mi04NTEyNDY3NmFmNzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgMjUwLFxuICAgICAgMTA3LFxuICAgICAgOTEsXG4gICAgICAyMyxcbiAgICAgIDE3NixcbiAgICAgIDU1LFxuICAgICAgNjUsXG4gICAgICAxMDIsXG4gICAgICAyMzksXG4gICAgICAyMzIsXG4gICAgICAxOTMsXG4gICAgICAxNzEsXG4gICAgICAxODUsXG4gICAgICAzOSxcbiAgICAgIDIyMCxcbiAgICAgIDIyNyxcbiAgICAgIDAsXG4gICAgICAxNzMsXG4gICAgICAxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODEsXG4gICAgICAxNTQsXG4gICAgICA0OCxcbiAgICAgIDU5LFxuICAgICAgMTMzLFxuICAgICAgMTE0LFxuICAgICAgMTY5LFxuICAgICAgNTUsXG4gICAgICAyMzQsXG4gICAgICAyMzYsXG4gICAgICAxMyxcbiAgICAgIDEsXG4gICAgICAxODEsXG4gICAgICA2MCxcbiAgICAgIDU3LFxuICAgICAgMTg2LFxuICAgICAgNzQsXG4gICAgICA0OCxcbiAgICAgIDExOCxcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0TEhKUEI2Q1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwNDEwNzg4Nzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzA4NzYyNjAyNzAxMjA6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMVGl4aEVRa0pHM3RBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNsL0RPYzhGb3FuRDAybTlVQUZhYkZuR2VxMXg5bmNLbHdHNG9ObWJEWFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid2xlME1lTnk2TW9RL1B1dElsRllYRndlM2ZqeFBJcGFlTzR0ZXB4Y0Z4clExWEVlWDh0Ulovbk1GbjU1dFh1NCtRdjM5WnZTb2dXZDhQdTRBZnF0Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYjhwN1RYUm80RXBvYzBTNno3OHQrOHNmOTBXM2IrREk4L3Q0NjZwSWtYRFV5NXh2WklBbGV3TE41S1pISUozMEt6UmJaVjZzL2piVjZxUjJ5ZzVoZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwNDEwNzg4Nzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU2Nzk1NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="// PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
