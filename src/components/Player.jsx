import { useState } from "react";

export default function Player({ name, symbol }) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);
    let playerNameContent = <span className="player-name">{playerName}</span>

    function handleEditClick(){
        setIsEditing(editing => !editing);
    }

    function handleNameChange(event){
        setPlayerName(event.target.value)
    }

    if(isEditing){
        playerNameContent = <input type="text" required value={playerName} onChange={handleNameChange} ></input>
    }

  return (
    <li>
      <span className="player">
        {playerNameContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
