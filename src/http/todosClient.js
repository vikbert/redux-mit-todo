// const URL_TODOS = 'http://vikbert-software.de/api/todos.php';
const URL_TODOS = 'http://localhost:8000/todos.php';
export const saveTodos = (todos = []) => {
    fetch(URL_TODOS, {
        method: 'POST',
        body: JSON.stringify(todos),
    }).catch((error) => {
        console.error('POST data failed: ', error);
    });
};

export const loadTodos = () => {
    fetch(URL_TODOS, {
        method: 'GET',
    }).then((response) => {
        console.log(response);
        return response;
    }).catch((error) => {
        console.error('POST data failed: ', error);
    });
};
