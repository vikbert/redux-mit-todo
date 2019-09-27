const URL_TODOS = 'https://vikbert-software.de/api/todos.php';
export const saveTodos = (todos = []) => {
    fetch(URL_TODOS, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(todos),
    }).catch((error) => {
        console.error('POST todos failed: ', error);
    });
};

export const loadTodos = () => {
    fetch(URL_TODOS, {
        method: 'GET',
        mode: 'no-cors',
    }).then((response) => {
        console.log(response);
        return response;
    }).catch((error) => {
        console.error('Loading todos failed: ', error);
    });
};
