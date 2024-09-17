Action: JS object hold key {type}
Reducer: function change state
Store : obj hold Reducer , State  
State: data for application
dispatch: function make Action call Reducer , intermediate 

ex. (Action=>addUser , Action=>removeUser)  then=> 
Action call Reducer (via dispatch ) , then Reducer call state  to change state
 

npm i redux react-redux redux-thunk



1 - (react-redux)
provider(index.jsx)
src/
	├──index.jsx(Provider)
    ├──components/
    │   │ 
    │   ├── Counter.jsx(useSelector,useDispatch)
    ├──redux/
    │   │ 
    │   ├── reducer/
    │   │    ├──── action/
    │   │ 	 │       │
    │   │ 	 │       ├──counterActions.js(inc,dec,res)
    │   │    │       │
    │   │    │       ├──type.js(CONSTATS)
    │   │ 	 │       │
    │   │    ├──── CounterReducer.js(state,action)
    │   │    │
    │   ├── store.js(createStore(CounterReducer))
 
2 - redux-toolkit




