const Task = require("./task");

class Tasks{

    _list = {

    };

    get listArray(){
        const list = [];
        Object.keys(this._list).forEach(key =>{
            const tarea = this._list[key];
            list.push(tarea);
        });
        return list;
    }
    constructor(){this._list = {};}

    deleteTask(id = ''){
        if(this._list[id]){
            delete this._list[id];
        }
    }

    loadingTasksfromArray(tasks = []){
        
        tasks.forEach(tarea=>{
            this._list[tarea.id] = tarea
        });
    }

    createTask(desc = ''){

        const task = new Task(desc);

        this._list[task.id] = task;
    }

    fullList(){
        console.log();
        this.listArray.forEach((tarea,i) =>{
            const {desc,completadoEn} = tarea;
            const estado = (completadoEn)?'Completado'.green : 'Pendiente'.red;
            console.log(`${i+1}. ${desc} :: ${estado}`);
        });
    }
    listPendinCompleted(completadas = true){
        console.log();
        let contador = 0;
        this.listArray.forEach((tarea,i) =>{
            const {desc,completadoEn} = tarea;
            const estado = (completadoEn)?'Completado'.green : 'Pendiente'.red;
            if(completadas){
                if(completadoEn){
                    contador+=1;
                    console.log(`${contador.toString().green} . ${desc} :: ${completadoEn}`);
                }
            }else{
                if(!completadoEn){
                    contador+=1;
                    console.log(`${contador.toString().green} . ${desc} :: ${estado}`);
                }
            }
        });
    }
    toggleCompleted(ids = []){
        ids.forEach(id =>{
            const task = this._list[id];
            if(!task.completadoEn){
                task.completadoEn = new Date().toISOString();
            }
        });
        this.listArray.forEach(task =>{
            if(!ids.includes(task.id)){
                this._list[task.id].completadoEn = null;
               }
            });
    }

}
module.exports = Tasks;