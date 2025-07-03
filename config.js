const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_49_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc3LFxuICAgICAgICA5NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg2LFxuICAgICAgICA4NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMixcbiAgICAgICAgMTM3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMixcbiAgICAgICAgMTE3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAxODcsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDU4LFxuICAgICAgICA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDc0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU1LFxuICAgICAgICAyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrRXgwL0k3VVlTNmRFR1pkOGtoRmM3dEg4MWRuWnd1MUZ4c2libkxWT1JrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjc5MTQ5OTU4NjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3MjVGQjhGRjk3OTY2RjQwODY3OUNDODZFNUFEODIxNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTE1MzYxMzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI3OTE0OTk1ODYyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEFFMzMwNTlFMzg2NTIyMERDOEQ1MjUyOTZDMTNGNjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzUxNTM2MTM2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNwY0dVc0pCU3lLZnozN3Z6Nl8yUVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjM5ZTAzODktZjM0OS00NjJmLTliNzItMDkzYzMzNDQzYWQxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgNTEsXG4gICAgICAyMjcsXG4gICAgICAxOTQsXG4gICAgICAyMDcsXG4gICAgICA2MCxcbiAgICAgIDExMixcbiAgICAgIDczLFxuICAgICAgMjA2LFxuICAgICAgMTY2LFxuICAgICAgMzcsXG4gICAgICAxOTUsXG4gICAgICAzNixcbiAgICAgIDEyMyxcbiAgICAgIDIwMCxcbiAgICAgIDI0LFxuICAgICAgMzEsXG4gICAgICAxMDUsXG4gICAgICAxNjQsXG4gICAgICAxNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1LFxuICAgICAgMTIsXG4gICAgICAyMDIsXG4gICAgICAyMjgsXG4gICAgICAxMTQsXG4gICAgICA2MCxcbiAgICAgIDE4NyxcbiAgICAgIDExMCxcbiAgICAgIDksXG4gICAgICAxNTMsXG4gICAgICA3OSxcbiAgICAgIDE5MixcbiAgICAgIDYsXG4gICAgICAxNTQsXG4gICAgICAxMjcsXG4gICAgICAyMTUsXG4gICAgICAxOTQsXG4gICAgICAxMjEsXG4gICAgICA3NSxcbiAgICAgIDc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmJMdUo4Q0VJR2ttY01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUamNKVHFOWXVEV0xIMWhPTkhGaWJzOHBQY3lTblNWMEJPWmxVcUNRU0NJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZ0TU9QYW5aSlRUMTJXUnhlT1J3SzB3VkFxMnRrVTEvZWVzR3FNN3IxZmhSTisxMElQVjVmazMybFMzV24zNGdIczZLbnV0R3ZicVRNRnRUK3NROERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkw0WUxoczljZ1cxaWdCaHBabCsyaU5vSlVseGdBL1RwZ0ptVTBrL0lWTjU5SWhHbWNRdGtaZ05Kb0FHS3lWVng2VDJXRnV2TEpIc0x2T3FpZjZ6L2hnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNzkxNDk5NTg2MjI6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzOTM0MjExMDU2ODU5MjozM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJBbm5cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjc5MTQ5OTU4NjIyOjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1MTUzNjEzMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtVMFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1UwLmpzb24iOiAie1wia2V5RGF0YVwiOlwidVhKN0htMmdlZW5wck5hWU5vUUFlTFRDVHJtem9pQVh1Wk5laFh6UGk3QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MDI4MDk4MTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MTUzNjEzNjE2OVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtVdy5qc29uIjogIntcImtleURhdGFcIjpcIlhFZTlCSEFHNUU2NGFORzdYNHp2RndvVUdIZmRSMjF0YUtYZ01xd2hDOGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjAyODA5ODEyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLVXguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrNlpmKzJITkxYSzY0cGM2R3cvWnRJY1VpbFN3OGxhbHI3YmF2eUxGV3FFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYwMjgwOTgxMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc1MTUyOTU2NzA0M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtVeS5qc29uIjogIntcImtleURhdGFcIjpcImtod1lOem9GVEZKV1dDdzhlWmx5VXVMNGw1VldEb2Y2UVV3TVVka1BtNFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjAyODA5ODEzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLVXouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxYkZmamx3SXo0Nm1KTHRHQWdTUU5tRFVBV2VndWZ4b3dYU01UUnRYSUFVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYwMjgwOTgxMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc1MTUzNDY5MDIwNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
