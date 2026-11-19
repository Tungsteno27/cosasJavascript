const lista = document.getElementById('task-list');

            export const render = (tasks) =>{
                lista.innerHTML = '';
                
                tasks.forEach(t =>{
                    const li = document.createElement("li");
                    li.className = `task.item ${t.completed ? 'completed' : ''}`
                    li.dataset.id = t.id;
                    li.innerHTML = `
                    <span>${t.text}</span>
                    <div class="actions">
                         <button class="btn-edit">e</button>
                         <button class="btn-delete">x</button>
                    </div>
                    `
                    lista.appendChild(li);
                })
            }