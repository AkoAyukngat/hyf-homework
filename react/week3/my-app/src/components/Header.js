import React from "react";

export const Header = () => {
  return (
    <div>
      <h1>OUR TO-DO APP</h1>
    </div>
  );
}; 
// const useInputValue = (innitialValue) => {
//   const [value, setValue] = useState(innitialValue);
//   return {
//     value,
//     onChange: (e) => setValue(e.target.value),
//   };
// };

// const inputForm = () => {
//   const text = useInputValue("");
//   const date = useInputValue("");
//   return (
//     <form>
//       <input {...text} />
//       <input {...date} />
//     </form>
//   );
// };
