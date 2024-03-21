
import { useState } from "react";

const UseState = () => {
    // console.log(useState());
    // console. log (useState (1));
    // const value = useState( 'hello') [0];
    // const func = useState( 'hello' ) [1] ;
    // console. log (value);
    // console. log (func);

    const [count, setCount] = useState(0);

    const hndelClick = (e) => {
        console.log('clicked');
        const text = document.getElementById('here').innerText
        // setCount(count+1)
        setCount(text)
    }
    return (
        <div>
            <h1 className="text-center pt-16">You have clicked {count} times. </h1>
            <div className="flex flex-col justify-center items-center pt-6">
                <h1 id="here" className="mb-6">I am here</h1> <br />
                <button className="btn btn-primary" onClick={hndelClick}>Click Me</button>
            </div>
        </div>
    );
};

export default UseState;