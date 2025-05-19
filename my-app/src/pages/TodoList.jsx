import React, { useEffect, useRef, useState } from 'react';
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Paper 
        elevation={3} 
        sx={{ 
          width: '100%', 
          maxWidth: '500px',
          padding: '24px',
          borderRadius: '12px'
        }}
      >
        <h1 className="text-2xl font-bold text-center mb-6">Todo List</h1>
        
        <div className="flex gap-2 mb-4">
          <TextField
            label="Add a to-do"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleAddTodo}
            sx={{ height: '56px' }}
          >
            Add
          </Button>
        </div>
        
        {todos.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No todos yet. Add one above!
          </div>
        ) : (
          <List sx={{ width: '100%' }}>
            {todos.map((todo, index) => (
              <ListItem 
                key={index}
                sx={{
                  marginBottom: '8px',
                  borderRadius: '4px',
                  backgroundColor: todo.completed ? 'rgba(0, 0, 0, 0.04)' : 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={todo.completed}
                    onChange={() => handleToggleTodo(index)}
                    color="primary"
                  />
                </ListItemIcon>
                <ListItemText
                  sx={{ 
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? 'gray' : 'inherit'
                  }}
                  primary={todo.text}
                />
                <IconButton 
                  onClick={() => handleDeleteTodo(index)}
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        )}
        
        {todos.length > 0 && (
          <div className="text-right mt-4 text-sm text-gray-500">
            {todos.filter(t => t.completed).length} of {todos.length} completed
          </div>
        )}
      </Paper>
    </div>
  );
}

export default TodoList;