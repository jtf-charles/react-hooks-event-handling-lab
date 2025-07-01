// Code Keypad Component Here

function Keypad (){
    function DispayText(){
        console.log("Entering password...");
    }
    return (
        <div>
            <input type="password" onChange={DispayText}></input>
        </div>
    )
}

export default Keypad;