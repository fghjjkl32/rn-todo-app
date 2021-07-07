import React, {useState} from 'react';
import { StatusBar, Dimensions } from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
import Input from './components/Input';
import Task from './components/Task';

const Container = styled.SafeAreaView`
/* SafeAreaView 아이폰에서 가려지는 현상 줄이기 위해 사용 */
  flex:1;
  background-color:${({theme}) => theme.background};
  align-items:center;
  justify-content:flex-start;
`;

const Title = styled.Text`
font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
  `;

const List = styled.ScrollView`
flex:1;
width:${({ width }) => width - 40}px;;
`;

export default function App() {
  const width = Dimensions.get('window').width;

  const tempData={}

  const [newTask, setNewTask] = useState('');

  const [tasks,setTasks] = useState(tempData);

  const addTask = () => {
    if(newTask.length < 1) {
      return;
    }
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id:ID, text: newTask, completed:false },
    }
    setNewTask('');
    setTasks({ ...tasks, ...newTaskObject });
  };

  const deleteTask = (id) => {
    const currentTasks = Object.assign({},tasks);
    delete currentTasks[id];
    setTasks(currentTasks);
  }

  const toggleTask = id => {
    const currentTasks = Object.assign({},tasks); 
    currentTasks[id]['completed'] = !currentTasks[id]['completed']
    setTasks(currentTasks);
  } 

  const updateTask = item => {
    const currentTasks = Object.assign({},tasks);
    currentTasks[item.id] = item;
    setTasks(currentTasks);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
          />
          {/* StatusBar 스테이터스바 */}
          <Title>Todo List</Title>
          <Input placeholder=" + Add a Task" 
          value={newTask}
          onChangeText={text => setNewTask(text)}
          onSubmitEditing={addTask}
          onBlur={() => setNewTask('')}
          />
          <List width={width}>
          {Object.values(tasks)
            .reverse()
            .map(item => (
              <Task 
              key={item.id} 
              item={item} 
              deleteTask={deleteTask}
              toggleTask={toggleTask}
              updateTask={updateTask}
              />
            ))}
          </List>
      </Container>
    </ThemeProvider>
  );
}