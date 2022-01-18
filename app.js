/* const { showMenu, pause } = require('./helpers/messages'); */

const {showMenu ,
          pause ,
      readInput ,
listTasksdeleted,
         confirm,
   showChecklist } = require('./helpers/inquirer');

const { saveInfo, readData } = require('./helpers/saveFile');

const Tasks = require('./models/tasks');


const main = async() =>{
    let opt = '';
    const tasks = new Tasks();

    if(readData()){
      tasks.loadingTasksfromArray(readData());
    }
    do{

      opt =  await showMenu();

      switch(opt){
        case '1': 
        const desc = await readInput('Descripción: ');
        tasks.createTask(desc); 
        break;

        case '2': tasks.fullList(); break;
        case '3':tasks.listPendinCompleted(true); break;
        case '4':tasks.listPendinCompleted(false); break;
        case '5': const id = await listTasksdeleted (tasks.listArray);
                  
            if(id !== '0'){
              const ok = await confirm('Está seguro en eliminar esta tarea?');
              if(ok){tasks.deleteTask(id);
                console.log('Tarea borrada correctamente');}
              }
                  
        break;
              case '6': const ids = await showChecklist(tasks.listArray); 
              tasks.toggleCompleted(ids);break;
      }
      saveInfo(tasks.listArray);

        if(opt !== '7') await pause();

    }while(opt !== '7');    
                
}

main();