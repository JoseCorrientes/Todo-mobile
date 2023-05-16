import React from "react";
import ErrorErrorCSS from "./ErrorError.module.css";

function ErrorError() {
  return (
    <div className={ErrorErrorCSS.ErrorErrorForm}>
      <p className={ErrorErrorCSS.ErrorText}>Error founded. Restart</p>
    </div>
  );
}

export { ErrorError };
