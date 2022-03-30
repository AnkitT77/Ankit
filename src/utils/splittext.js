import React from 'react'

export default function Splittext(props) {
   return (
      <span aria-label={props.text} role={props.role}>
         {props.text.split("").map(function (char, i) {
            let style = { "animation-delay": 0.5 + i / 10 + "s" };
            return (
               <span aria-hidden="true" key={i} style={style}>
                  {char}
               </span>
            )
         } 
            
         )}
         
      </span>
   )
}
