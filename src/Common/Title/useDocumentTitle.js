import React from 'react';
import { useEffect, useState } from "react";

const useDocumentTitle = (props) => {
    const [title, setTitle] = useState("Default Title");

  useEffect(() => {

    document.title = title;
  }, [title]);

  
    setTitle(props.data.pageTitle);

  return (
    <div>useDocumentTitle</div>
  )
}

export default useDocumentTitle