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
        console.log(id)
        await axios.delete(`${process.env.REACT_APP_BASE_ENDPOINT}/todos/${id}`);
        console.log("message: todo has been deleted!")
    } catch (error) {
        console.log(error)
    }
};

//Put********************************************************************************


//Post********************************************************************************
export const postTodos = async (req,res) => {
    try {
        const newTodo = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/todos`,
            {
                content: req.content,
                isCompleted: req.isCompleted
            }
        );
        console.log("message: todo has been created!")
       return newTodo;
    } catch (error) {
        console.log(error)
    }
};