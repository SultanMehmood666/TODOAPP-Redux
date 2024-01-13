import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Box, Button, Container, Grid, Input, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import InputSave from './InputSave/InputSave';

const TodoList = () => {
  const [inputvalue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const StateList = useSelector((state) => state.AddReducer.ToDoData);
  const [editValues, setEditValues] = useState({});
  const [isSaveMode, setIsSaveMode] = useState(false);

  // handle Input Change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Add Todo
  const handleAdd = () => {
    dispatch({ type: "AddToDo", payload: inputvalue });
    setInputValue('');
  };

  // Remove All Items
  const handleRemoveAll = () => {
    dispatch({ type: "RemoveAllToDO" });
  };

  // Delete ToDo Item
  const handleDeleteItem = (todoItemId) => {
    dispatch({ type: "DeleteItemToDo", payload: todoItemId });
  };

  // Handle Save Item Change
  const handleSaveItemChange = (itemId, editedValue) => {
    setEditValues({ ...editValues, [itemId]: editedValue });
  };

  // Handle Save Item
  const handleSaveItem = (itemId) => {
    dispatch({ type: "EditSave", payload: { itemId, editvalue: editValues[itemId] } });
    setIsSaveMode(false);
  };

  // Handle Edit To Do
  const handleEditToDO = (itemId) => {
    setEditValues({ ...editValues, [itemId]: StateList.find(item => item.id === itemId).value });
    setIsSaveMode(true);
  };

  console.log("From Frontend:", StateList);

  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <center className='ml-24'>
            <Typography component="h1" variant='h2' marginY={5}>My Todos</Typography>
          <div className="flex items-center space-x-4 mt-2">
            <Input
              className="p-2 border rounded-md"
              placeholder='Enter Your Plan'
              value={inputvalue}
              onChange={handleInputChange}
            />
            <Button variant='contained' className="bg-green-500 hover:bg-green-600 text-white" onClick={handleAdd}>Add</Button>
            <Button variant='contained' className="bg-red-500 hover:bg-red-600 text-white" onClick={handleRemoveAll}>Remove All</Button>
          </div>
        </center>
      

      <div className="grid grid-cols-12 gap-4 mt-24">
        {StateList && StateList.map((item) => (
          <React.Fragment key={item.id}>
            <div className="col-span-8 bg-white h-16 flex items-center justify-center rounded-md shadow-md p-4">
              {isSaveMode ? (
                <InputSave
                  onInputChange={(editedValue) => handleSaveItemChange(item.id, editedValue)}
                  defaultValue={editValues[item.id]}
                />
              ) : (
                <div className="text-lg font-semibold">{item.value}</div>
              )}
            </div>
            <div className="col-span-4 flex items-center justify-center space-x-2">
              {isSaveMode ? (
                <Button
                  variant='contained'
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={() => handleSaveItem(item.id)}
                >
                  Save
                </Button>
              ) : (
                <>
                  <Button
                    variant='contained'
                    className="bg-yellow-500 hover:bg-yellow-600 text-white"
                    onClick={() => handleEditToDO(item.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant='contained'
                    className="bg-red-500 hover:bg-red-600 text-white"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    Delete
                  </Button>
                </>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
    </>
  );
};

export default TodoList;