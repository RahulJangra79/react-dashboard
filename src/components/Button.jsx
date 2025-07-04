// import React from 'react';

// const Button = ( {bgColor, color, size, text, borderRadius }) => {
//   return (
//     <button 
//     type="button"
//     style={{ background: bgColor, color: color, borderRadius }} className={`text-${size} p-3 hover:drop-shadow-xl`}>
//       {text} {icon}
//     </button>
//   )
// }

// export default Button


import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;