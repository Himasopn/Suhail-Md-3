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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_05_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDM1LFxuICAgICAgICA0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjExLFxuICAgICAgICA0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MixcbiAgICAgICAgMTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE1LFxuICAgICAgICA3NSxcbiAgICAgICAgNixcbiAgICAgICAgMTAxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDk0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgMixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDYxLFxuICAgICAgICAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDc1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MixcbiAgICAgICAgNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNixcbiAgICAgICAgOTksXG4gICAgICAgIDE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDk0LFxuICAgICAgICA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhON3ZZRUZCTW13Z0Mzbk5CWVpGcjM0SFduM2pXVXZXcW1IYTVJdStBWjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNzkxNDk5NTg2MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM4RDQ1NTY2NTJFMzJFMDhBNDhDMjI1NEM2QUQ2QzNBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1MTUzMzUzMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjc5MTQ5OTU4NjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzNkQzNzFCRTg2RjZGOTc1N0M5NjUxOUVCRUI1QUZGNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTE1MzM1MzNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQmhsMFFhTnhUdmVQd1ZPbzhvRzhLZ1wiLFxuICBcInBob25lSWRcIjogXCI3NDE1MDE0ZS04MmViLTQ0MzQtYWY0Yi02OTUzMWY0MDA3NzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICA2NCxcbiAgICAgIDEwMCxcbiAgICAgIDEwNSxcbiAgICAgIDE4MSxcbiAgICAgIDI0MixcbiAgICAgIDIyMCxcbiAgICAgIDI0NSxcbiAgICAgIDIzNixcbiAgICAgIDE5MixcbiAgICAgIDMsXG4gICAgICAxODgsXG4gICAgICA2NixcbiAgICAgIDQ4LFxuICAgICAgNzQsXG4gICAgICA3MixcbiAgICAgIDM1LFxuICAgICAgMTE0LFxuICAgICAgODYsXG4gICAgICAxMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMSxcbiAgICAgIDM2LFxuICAgICAgMjMxLFxuICAgICAgNzgsXG4gICAgICAyMjIsXG4gICAgICAyMjMsXG4gICAgICA4OSxcbiAgICAgIDIzOCxcbiAgICAgIDEwLFxuICAgICAgODgsXG4gICAgICAxNDIsXG4gICAgICAxNDQsXG4gICAgICAxMjMsXG4gICAgICAzMixcbiAgICAgIDUyLFxuICAgICAgMTIyLFxuICAgICAgMTA2LFxuICAgICAgOCxcbiAgICAgIDMyLFxuICAgICAgOTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOWEx1SjhDRU5hUG1jTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRqY0pUcU5ZdURXTEgxaE9OSEZpYnM4cFBjeVNuU1YwQk9abFVxQ1FTQ0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYm5qU3Q4UFdGajRxZ3BqNThoS0RkLzF0SHhNNTN4QTZPRW1XeVAwRHBTWm9VdVZDaCs3RmM2TmNheUQ3V1o3VmkxUE04emxPSERZVEt6MjY4cFgzQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSUFubHBKak9EYUpZWEZEVXp1R1NRZGl6aTZ0NVQvUGVWd05QeUFTZ3pQcGgwaDBXMDAwY2sySGRIaUFjb2gyS0tQN3EwL0RiWVdiVWRvMDZmWnZOaVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI3OTE0OTk1ODYyMjozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM5MzQyMTEwNTY4NTkyOjMyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFublwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNzkxNDk5NTg2MjI6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUxNTMzNTMwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS1V5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLVXcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYRWU5QkhBRzVFNjRhTkc3WDR6dkZ3b1VHSGZkUjIxdGFLWGdNcXdoQzhrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYwMjgwOTgxMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1V4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiKzZaZisySE5MWEs2NHBjNkd3L1p0SWNVaWxTdzhsYWxyN2JhdnlMRldxRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MDI4MDk4MTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTE1Mjk1NjcwNDNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLVXkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJraHdZTnpvRlRGSldXQ3c4ZVpseVV1TDRsNVZXRG9mNlFVd01VZGtQbTRRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYwMjgwOTgxMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUxNTMzNTMzNDc4XCJ9Igp9"  // PUT your SESSION_ID 


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
