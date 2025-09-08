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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_18_09_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDU5LFxuICAgICAgICA1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExLFxuICAgICAgICAxMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNSxcbiAgICAgICAgMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgwLFxuICAgICAgICA5MyxcbiAgICAgICAgODIsXG4gICAgICAgIDk1LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTU0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2LFxuICAgICAgICA1OSxcbiAgICAgICAgODQsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICA3OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDY0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnUHllbmJhejJvTG8xczNLRWdRaEQxZlpCZFJyY1g5V3Z1VWNySGIraXljPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODg2Mjg1MjY4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0VBQTU4NDk0NTk4NTIzQTQyOTlCNUM4RUVCNDlFMzRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzU3MzQxMDgzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE4ODYyODUyNjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQzg4NkQ1NUYyOUIyMDRGMDIzRTAyMzg0MTg1QkQ3NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTczNDEwODNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRzJieUM3QzVRSFdVTDZUbzhuOVZfQVwiLFxuICBcInBob25lSWRcIjogXCIzYzVjNzk5ZC1kOTI3LTRmMzUtOTlkNC03YTJkMGI3YTU2ZTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMjUyLFxuICAgICAgODksXG4gICAgICAyMzUsXG4gICAgICAyMDgsXG4gICAgICAxNzgsXG4gICAgICAyNSxcbiAgICAgIDIxNSxcbiAgICAgIDExNixcbiAgICAgIDI1MCxcbiAgICAgIDIyMixcbiAgICAgIDcwLFxuICAgICAgMjMyLFxuICAgICAgOTAsXG4gICAgICAzOCxcbiAgICAgIDE3OCxcbiAgICAgIDE5LFxuICAgICAgMjIxLFxuICAgICAgNDksXG4gICAgICAyMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc1LFxuICAgICAgNjQsXG4gICAgICA4MixcbiAgICAgIDUzLFxuICAgICAgMjYsXG4gICAgICAyMzQsXG4gICAgICAxNzYsXG4gICAgICAyMDcsXG4gICAgICAxNDksXG4gICAgICAxNzYsXG4gICAgICA3MyxcbiAgICAgIDE3MyxcbiAgICAgIDM5LFxuICAgICAgMjUsXG4gICAgICAxNjksXG4gICAgICAyMjMsXG4gICAgICAyNDcsXG4gICAgICAyMCxcbiAgICAgIDEyMCxcbiAgICAgIDI0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BIRC9Ja0RFSkRMKzhVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV1REZVFhZzhEemRJeHRrd04wbm5WNWVsQmVuUDRiYWtQWjcraXpSMkJ5TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvSmNpMzRQN1JyZmRvTkVTdzZyZW1RK3JaRHlmdmRVR1VtWUprM0llakwvaFFrT29lRS9LTno0NDhqb0tRTEFwdDNIWHJOSlZkK3h6Qi93WTBRNkpBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNRThIODhiODJ5L0tKYitjV1hwTFNINzRoV1QzR2YyY0Y2bldhTUxwUW90ai9Zc1AxU29JQzNLYW1BL05Hb3p1NUtuaEQ3dXBRcHBhYk13ZjlMdEVEdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODg2Mjg1MjY4Mzo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk0gTVwiLFxuICAgIFwibGlkXCI6IFwiMjU3NTUyMzQ0NDUzMjUzOjQ3QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4ODYyODUyNjgzOjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzU3MzQxMDc3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRmRVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGZFUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJId3hCWnJnd0hVYklqNXB6Q21xbjNLN0pyaDBLTUFUREtvYkNtbkZrQ0JvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgyNjIyMTA0MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzU3MzQxMDc3Njk5XCJ9Igp9"  // PUT your SESSION_ID 


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

