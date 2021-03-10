import React from "react";
import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";

const Todos = () => {
  const todos = useSelector((state) => state.myTodos.todo);
  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.length > 0 &&
          todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              <input type="checkbox" />
              <button>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Todos;

// Todos.propTypes = {
//   todos: PropTypes.array.isRequired,
// };

// const mapStateToProps = (state) => ({
//   todos: state.myTodos.todos,
// });

// export default connect(mapStateToProps, {})(Todos);
