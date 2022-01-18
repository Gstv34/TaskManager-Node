const fs = require('fs');

const file = './db/data.json';  

const saveInfo = (data) =>
{
    
    fs.writeFileSync(file,JSON.stringify(data)); //Convierte a su versión string el objeto.
}

const readData = () =>{
if(!fs.existsSync(file)){
    return null;
}

const info = fs.readFileSync(file,{encoding:'utf-8'});

const data = JSON.parse(info);

return data;
}

module.exports = {
     saveInfo,
    readData: readData
}