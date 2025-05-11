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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_20_05_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAzMSxcbiAgICAgICAgNTksXG4gICAgICAgIDg1LFxuICAgICAgICAxMCxcbiAgICAgICAgNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDkxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODQsXG4gICAgICAgIDcyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDU2LFxuICAgICAgICA2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzLFxuICAgICAgICA5MSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI5LFxuICAgICAgICAxMixcbiAgICAgICAgMTE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NixcbiAgICAgICAgNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICA5MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxODIsXG4gICAgICAgIDY0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNixcbiAgICAgICAgODMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjExLFxuICAgICAgICA0MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJpK3BqR1Ztc2tEMmZ3dGJoS0F5SmhESldpeGZpQ3FHVkNic1VrTTBTcHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjR3LW92VUtGUkRxRUFnUTR0MzhHWlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjU3ZjQ0NWUtMTc3OC00YzRjLWE4ZjEtZTlmZjhmMGZhMmJmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcwLFxuICAgICAgNzcsXG4gICAgICAyMTksXG4gICAgICAzOSxcbiAgICAgIDU1LFxuICAgICAgMjE0LFxuICAgICAgNzcsXG4gICAgICAyMzQsXG4gICAgICAxNDksXG4gICAgICAyMTMsXG4gICAgICAyMyxcbiAgICAgIDE2OSxcbiAgICAgIDIxMSxcbiAgICAgIDIyNixcbiAgICAgIDE2NyxcbiAgICAgIDIwLFxuICAgICAgMTA2LFxuICAgICAgMTQ4LFxuICAgICAgMTY5LFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODQsXG4gICAgICAxODIsXG4gICAgICAxNTksXG4gICAgICAyOCxcbiAgICAgIDkwLFxuICAgICAgODMsXG4gICAgICA4MyxcbiAgICAgIDE2MCxcbiAgICAgIDI0MixcbiAgICAgIDEyNyxcbiAgICAgIDIxMixcbiAgICAgIDgwLFxuICAgICAgOTMsXG4gICAgICAxOTEsXG4gICAgICAxMDUsXG4gICAgICAyMjQsXG4gICAgICAzMixcbiAgICAgIDExMixcbiAgICAgIDE2NSxcbiAgICAgIDExNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKUTc4OE44OFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3Njg2NTU3OTQ6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NzA0MTU4Njg4ODg4MzoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPVzNxS1lCRU5DN2djRUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZWUDJlaC9tQmJKQjB2dklEZFhUL1JXY2ZsN0pvdDJ2RGlBTEFCTlprZ2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS2MzNVFsR0tPcTlBckVXNEZyc09MOUlkcStoTXpKOFlacnk5STU2Y0dCTU45SmRJUk5YRVBGUkR1QSt2UXhRUFZzMU9ZQzNMWHUyb0hGYTJoVnA2QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMzZRdGxCMEdKaDV3dGtPT1ZFNnRnK1ZaSnNuWCt4MkdvZnBKbnNnczhwTHczMHBkQW5NTE9LaVRFK0JKV2VOalorMzdpenFiT3E4MWJaWEIrUWlaQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3Njg2NTU3OTQ6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDY5NTE2MzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLVU5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtVTi5qc29uIjogIntcImtleURhdGFcIjpcIjJwaTA5RzJHK3UweDFYK3A0M3poakxFR3A1MCtRODRPNC9kQWlzakFrTlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzQ4Nzg5NzMyLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
