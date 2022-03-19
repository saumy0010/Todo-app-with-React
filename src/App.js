import './App.css';
import {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import NavBar from './Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



function App() {

    if (!localStorage.getItem('tasks')) {
        localStorage.setItem('tasks', JSON.stringify([]))
    }

    // Using useState for task
    const [task, setTask] = useState([])
    console.log(task)
    let myTask = JSON.parse(localStorage.getItem('tasks'))


    // Handel form submit
    const handelSubmit = (event) => {
        event.preventDefault();

        let addTask = event.target[0].value

        // Condition to check if user try to submit empty form
        if (addTask.length === 0) {
            return false
        }
        //  Setting myTask function to new task
        myTask.push(addTask)
        setTask(myTask)
        localStorage.setItem('tasks', JSON.stringify(myTask))

        // Setting input value null after submit
        document.getElementById('inputTask').value = "";
    }

    // Handel delete function
    

  return (
      <div>

          <NavBar />

          <div className="App">

              <h1 style={{ marginTop: 30 }}>Todo App</h1>

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

                  <Button color={'success'} variant="contained" endIcon={<SendIcon />} type={'submit'}>
                      Add Task
                  </Button>

              </form>

              {/* iterating the task into dom using map */}
              <div className={'container'}>

                  <div id={'list-item'}>
                      <Container>
                          <Row>
                              <Col>
                                  {myTask.map((item) => {
                                      return <li id={'list'}>{item}
                                         <button id={'icon-btn'}>
                                             <FontAwesomeIcon icon={faTrash} color={'grey'}/>
                                         </button>
                                      </li>
                                  })}</Col>
                          </Row>
                      </Container>

                  </div>
              </div>

          </div>
          <br/> <br/><br/>
      </div>

  );
}

export default App;
