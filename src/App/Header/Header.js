import React from 'react';

function Header(props) {
  return (
    <div className="Header">
      <table cols="3" align="center" cellSpacing="10">
        <tbody>
          <tr>
            <td>{<img src={require("../../assets/bloodyknife.png")} alt="knife" height="60" />}</td>
            <td>
              <h1>{props.message}</h1>
            </td>
            <td><img src={require("../../assets/bloodyknife.png")} alt="knife" height="60" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Header;
