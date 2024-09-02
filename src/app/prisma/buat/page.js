'use client';
import handleClick from "./action";
function CreateUser() {
    return (
        <>
            <button onClick={handleClick}>Click</button>
        </>
    );
}

export default CreateUser;
