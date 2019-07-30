import React from 'react';

function FormInput(props) {
  return (
    <tr align="center">
      <td align="right" width="48%">
        {props.name}:
        </td>
      <td width="4%"></td>
      <td align="left" width="48%">
        {props.type !== 'number' ? (
          <input id={props.id} className="FormInput" type={props.type} defaultValue={props.value || ""} size={props.size} required />
        ) : (
            <input id={props.id} className="FormInput" type={props.type} defaultValue={props.value || ""} size={props.size} step={props.step || "1"} required />
          )
        }
      </td>
    </tr>
  )
}

export default FormInput;