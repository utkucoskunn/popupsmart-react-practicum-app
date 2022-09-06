import axios from 'axios';

//Get********************************************************************************
export const fetchTodos = async () => {
    try {
        const data = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/todos`)
        return data;
    } catch (error) {
        console.log(error)
    }
};

//Delete********************************************************************************
export const deleteTodos = async (id) => {
    try {
        await axios.delete(`${process.env.REACT_APP_BASE_ENDPOINT}/todos/${id}`);
    } catch (error) {
        console.log(error)
    }
};

//Put********************************************************************************
export const editTodos = async (id,req) => {
    try {

        await axios.put(`${process.env.REACT_APP_BASE_ENDPOINT}/todos/${id}`,
            {
                isCompleted: req.isCompleted
            }
            );
    } catch (error) {
        console.log(error)
    }
};

//Post********************************************************************************
export const postTodos = async (req,res) => {
    try {
        const newTodo = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/todos`,
            {
                content: req.content,
                isCompleted: req.isCompleted
            }
        );
       return newTodo;
    } catch (error) {
        console.log(error)
    }
};