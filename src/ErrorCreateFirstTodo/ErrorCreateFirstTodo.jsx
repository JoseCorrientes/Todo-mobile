import React from "react";
import ErrorCreateFirstTodoCSS from "./ErrorCreateFirstTodo.module.css";

function ErrorCreateFirstTodo() {
  return (
    <div className={ErrorCreateFirstTodoCSS.ErrorCreateFirstTodoForm}>
      <p className={ErrorCreateFirstTodoCSS.ErrorText}>
        You should create a Task...
      </p>
    </div>
  );
}

export { ErrorCreateFirstTodo };
