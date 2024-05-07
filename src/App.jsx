import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';


const Container = styled.div`
  margin: 20px;
  width : 300px;
 
`;

const TodoListContainer = styled.ul`
  list-style: none;
  padding: 10px;
 
 
`;

const TodoItem = styled.li`
  cursor: pointer;
 
  &:hover {
    text-decoration: line-through;
  }
`;

function App() {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todoInput.trim() !== '') {
      setTodos([...todos, todoInput]);
      setTodoInput('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId="hedefId">
          <Form.Label> Hedef</Form.Label>
          <Form.Control
            type="text"
            placeholder="Bir hedef girin"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={addTodo}>
          Ekle
        </Button>
      </Form>
      <TodoListContainer>
        {todos.map((todo, index) => (
          <TodoItem key={index} onClick={() => removeTodo(index)}>
            {todo}
          </TodoItem>
        ))}
      </TodoListContainer>
    </Container>
  );

}

export default App
