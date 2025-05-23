import { useState } from "react"

export default function Team(){

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    const [team, setTeam] = useState(11);

    const handleAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleRemove = () =>{
        const newTeam = team - 1;
        setTeam(newTeam);
    }

    return (
        <div style={teamStyle}> 
            <h3>Players: {team}</h3> 
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
}


