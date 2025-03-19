const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANJU-XPRO~XEd0VK5C#yZM90xNu8SgM9Y3t-pGq3XEywNganH2YioLXYJyxJrY",
};
