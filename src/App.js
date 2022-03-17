import './App.css';
import {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';




function App() {

    // Using useState for task
    const [task, setTask] = useState([])
    let myTask = JSON.parse(JSON.stringify(task))

    // Handel form submit
    const handelSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[0].value)

        let addTask = event.target[0].value

        //  Setting myTask function to new task
        myTask.push(addTask)
        setTask(myTask)

        // Setting input value null after submit
        document.getElementById('inputTask').value = "";


    }

  return (
    <div className="App">

      <h1>Todo App</h1>

        <form onSubmit={handelSubmit}>

                <Box
                    sx={{
                        marginTop: 7,
                        marginBottom: 7,
                        maxWidth: '100%',
                        marginLeft: '25%',
                        marginRight: '25%'
                    }}
                >
                    <TextField fullWidth label="Task" id="inputTask"/>
                </Box>

            <Button variant="contained" endIcon={<SendIcon />} type={'submit'}>
                Add Task
            </Button>
        </form>

        {/* iterating the task into dom using map */}
        <div>
            {task.map((item) => {
                return <li id={'list'}>{item}</li>
            })}
        </div>
    </div>
  );
}

export default App;
