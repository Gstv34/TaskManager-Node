const inquirer = require('inquirer');
require('colors');

const questions = [
{
    type: 'list',
    name: 'option',
    message: 'Que desea hacer?',
    choices: [
        {
            value: '1',
            name: `${"1".green}. Crear tarea`,
        },
        {
            value: '2',
            name: `${"2".green}. Listar tareas`,
        },
        {
            value: '3',
            name: `${"3".green}. Tareas completadas`,
        },
        {
            value: '4',
            name: `${"4".green}. Tareas pendientes`,
        },
        {
            value: '5',
            name: `${"5".green}. Borrar tarea`
        },
        {
            value: '6',
            name: `${"6".green}. Completar tarea(s)`
        },
        {
            value: '7',
            name: `${"7".magenta}. Salir`
        }
    ]
}
];
const enter = [
    {
        type: 'input',
        name: 'option',
        message: `Presione ${'Enter'.rainbow} para continuar`,
    }
    ]; 

const inquirerMenu = async()=> {

    console.clear();

    console.log("=================".magenta);
    console.log("Task Manager".green);
    console.log("=================\n".magenta);

    const {option} = await inquirer.prompt(questions);
    return option;
}
const inquirerPausa = async()=>{
    console.log('\n');
    const {option} = await inquirer.prompt(enter);
    return option;
}
const readInput = async(message)=>{
    const question = [{
        type:'input',
        name: 'desc',
        message,
        validate(value){
            if(value.length===0){
                return 'Ingrese un valor';
            }
            return true;
        }
    }];
    const {desc} = await inquirer.prompt(question);
    return desc;
}

const listTasksdeleted = async (tareas = []) =>{
const choices = tareas.map((tarea,i )=>{
    return {
        value: tarea.id,
        name: `${i+1} ${tarea.desc}` ,
    }
});
choices.unshift({value:'0',name: 'Cancelar'});

const preguntas = [{type:'list',name:'id',message:'Borrar',choices}];
const {id} = await inquirer.prompt(preguntas);
return id;
}

const confirm = async (message) =>{
    const preguntas = [{type:'confirm',name:'ok',message}];
    const {ok} = await inquirer.prompt(preguntas);
    return ok;
}

const showChecklist = async (tareas = []) =>{
    const choices = tareas.map((tarea,i )=>{
        return {
            value: tarea.id,
            name: `${i+1} ${tarea.desc}` ,
            checked: (tarea.completadoEn)?true : false
        }
    });
    
    
    const preguntas = [
        {type:'checkbox',name:'ids',message:'Seleccione',choices}
    ];
    const {ids} = await inquirer.prompt(preguntas);
    return ids;
}

module.exports = {
    showMenu: inquirerMenu,
    pause: inquirerPausa,
    readInput: readInput,
    listTasksdeleted,
    confirm,
    showChecklist
}