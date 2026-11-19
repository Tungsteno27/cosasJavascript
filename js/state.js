const API_URL = "http://localhost:8080/api/task";

export let tasks = [];

export const fetchTasks = async () =>{
    const response = await fetch(API_URL);
    tasks = await response.json();
    return tasks;
}

export const addTask = async (text) =>{
    const response = await fetch(API_URL,{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({text: text,completed:false})
    })
    const newTask = await response.json();
    tasks.push(newTask);
    return tasks;
}

