import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from './TypedText.module.css'

export const TypedText = ({texts}) => {
    const typedTextRef = useRef(null);

    useEffect(() => {
      const options = {
        strings: texts, // массив текстов, которые будут выводиться
        typeSpeed: 50, // скорость печатания (в миллисекундах)
        backSpeed: 30, // скорость удаления (в миллисекундах)
        loop: true, // повторять текст после завершения
      };
  
      const typed = new Typed(typedTextRef.current, options);
  
      return () => {
        typed.destroy(); // очистка Typed.js при размонтировании компонента
      };
    }, []);
  
    return <span ref={typedTextRef} className={styles.text}></span>;
}
