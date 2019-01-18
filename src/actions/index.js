import { fireStore, firebaseAuth } from '../firebase';


let nextTodoId = 0;

const todosRef=fireStore.collection('todos');

const fetchTodoSuccess = todos => {
  return {
    type: 'RECEIVE_TODO',
    todos: todos
  }
}

export const fetchTodos = () => dispatch => {
  todosRef.onSnapshot((snapshot) => {
    let todos=[];
    snapshot.docs.forEach((doc) => {
      const todo = doc.data();
      todos.push({
        id: doc.id,
        ...todo
      });
    })
    dispatch(fetchTodoSuccess(todos));
  })
}

export const addTodo = text => dispatch => {
  todosRef.add({text:text, completed:false});
  return;
}

export const toggleTodo = (id, completed) => dispatch => {
  todosRef.doc(id).update({completed: !completed})
  return;
}

export const setVisibilityFilter = filter => dispatch =>{
  return dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter
  })
}

export const loginWithGithub = () => dispatch => {
  const provider=new firebaseAuth.GithubAuthProvider();
  firebaseAuth().signInWithPopup(provider)
}

export const signOut = () => dispatch => {
  firebaseAuth().signOut()
}
