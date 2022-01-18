require('colors');

const showMenu = () =>{

    return new Promise((resolve)=>{

        console.clear();
        console.log("=================".magenta);
        console.log("\tTask Manager".green);
        console.log("=================\n".magenta);
         
        console.log(`1.Crear tarea`.green);
        console.log(`2.Listar tareas`.green); 
        console.log(`3.Tareas completadas`.green); 
        console.log(`4.Tareas pendientes`.green); 
        console.log(`5.Borrar tarea`.green); 
        console.log(`0.Salir`.green); 
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleccione una opción ',(opt)=>{
            readline.close();
            resolve(opt);
        });
    });

}

const pause = () =>{
    return new Promise((resolve)=>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${'Enter'.magenta} para continuar`,(opt)=>{
            readline.close();
            resolve(opt);
        });
    });
}

module.exports = {
    showMenu, pause
}