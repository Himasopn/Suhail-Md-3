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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_46_05_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1LFxuICAgICAgICA3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDkwLFxuICAgICAgICAxODcsXG4gICAgICAgIDkzLFxuICAgICAgICA5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOSxcbiAgICAgICAgODMsXG4gICAgICAgIDU4LFxuICAgICAgICA5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDAsXG4gICAgICAgIDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDI4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDgxLFxuICAgICAgICA3NixcbiAgICAgICAgMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDU3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZjMFliYm91aDNJQ0R3SWdQZVpBa3NOV1pUR21wTG52UkVwbXZKem5Ma2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTY1OTYzMTQ0MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNGMEFEMTZDOEMzNjBFMkEwMzMzMENCNTJBMUVFRjhDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NjU0OTk4MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk2NTk2MzE0NDM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MTY1NTUwQjk2MDc2OUUzRTQ1ODhDNkY1MjI0NTM3OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDY1NDk5ODNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NjU5NjMxNDQzN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzg5NTQwQTQ1MTlCNDg3RjZCODA4MUUxNUQ2OENFM0FcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ2NTQ5OTg1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1SMVdGTmNnU1BTaGlzVmZUdW1ENlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjdhZTEzODUtYjllYi00YzIwLTliYjctYjA1NGJhNDgyZjEzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgNzMsXG4gICAgICAyMDIsXG4gICAgICAyMTksXG4gICAgICA5MSxcbiAgICAgIDIzOCxcbiAgICAgIDEyNixcbiAgICAgIDE2OCxcbiAgICAgIDIxNCxcbiAgICAgIDY0LFxuICAgICAgMTAzLFxuICAgICAgMTIwLFxuICAgICAgMjE2LFxuICAgICAgMTM5LFxuICAgICAgMTcsXG4gICAgICAxNDksXG4gICAgICAxNTAsXG4gICAgICAxMDcsXG4gICAgICA5NixcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTcsXG4gICAgICA4NyxcbiAgICAgIDE1MixcbiAgICAgIDY3LFxuICAgICAgMTg4LFxuICAgICAgMzEsXG4gICAgICAxNTgsXG4gICAgICAxMDIsXG4gICAgICAxMDYsXG4gICAgICAxMTQsXG4gICAgICAyMTQsXG4gICAgICA4NSxcbiAgICAgIDE5NCxcbiAgICAgIDE2MixcbiAgICAgIDE3MyxcbiAgICAgIDg2LFxuICAgICAgNzksXG4gICAgICA4LFxuICAgICAgMTMsXG4gICAgICAxODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWEFTRkpXMkJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk2NTk2MzE0NDM3OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTYzOTMyOTg0NjkxMTk6MTJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiVGRjXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTktsbjlzREVObjU2TUFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4SWhVYUZXM0owbkxKbXNkM1VvUGFSZzVnVi9vWTRkcVk2TFRJRXZPMUI4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZuQTZscEdhZk1WOVJtWVRBOHJ3M3hVQW1ZdGhMYmM2MnFnRXg1SXBqdUx2dC9sSmZOd2w0VDJlYTdBTWc5a3N0R0xURENnZndxRU81VkdiWEh1ZEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllEK21EWVVLcEZrUjBvdlRIcnBzd1VtUm96WUpRUThhb2pIZkRHS2Z2eE5NRENjV2hDQVZWc3pBSDVkSlBnVHhVdk1MZi96alZaVExtNE9uRzRFVGlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk2NTk2MzE0NDM3OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDY1NDk5ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEL05cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQvTi5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
