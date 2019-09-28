const URL_TODOS = 'https://vikbert-software.de/api/todos.php';
export const saveTodos = (todos = []) => {
    return fetch(URL_TODOS, {
        method: 'POST',
        // mode: 'no-cors',
        body: JSON.stringify(todos),
    }).catch((error) => {
        console.error('POST todos failed: ', error);
    });
};

export const loadTodos = () => {
    return fetch(URL_TODOS, {
        method: 'GET',
        // mode: 'no-cors',
    }).then((resp) => {
         return resp.json()
    }).catch((error) => {
        console.error('Loading todos failed: ', error);
    });
};
