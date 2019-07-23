import React from 'react';

function Header(props) {
  return (
    <div classname="Header">
      <table cols="3" align="center" cellspacing="10">
        <tr>
          <td>{<img src={require("./assets/bloodyknife.png")} alt="knife" height="60" />}</td>
          <td>
            <h1>{props.message}</h1>
          </td>
          <td><img src={require("./assets/bloodyknife.png")} alt="knife" height="60" /></td>
        </tr>
      </table>
    </div>
  );
}

export default Header;
