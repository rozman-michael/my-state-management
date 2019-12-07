import todosReducer from './todos'

const simpleLoggingMiddleware = (action) => {
	const { type, ...rest } = action;
	console.log(`Action ${action.type} with params:`, rest);
};

const reducers = (state = {}, action) => {
	simpleLoggingMiddleware(action);
  	return { todos: todosReducer(state.todos, action)};
};
export default reducers;