import { useState } from 'react';
import {data} from '../data'

const Final = () => {
    const [people, setPeople] = useState(data);


    const removeItem = (id) => {
        // console.log(id);
        // filter() method creates a new array containing elements that meet the specified condition.
        const newPerson = people.filter((person) => person.id !== id)
        console.log(newPerson);
        setPeople(newPerson)
        //optional method:> setPeople(people.filter((person) => person.id !== id))
    };

    const clearAllItes = e => {
        setPeople([]);
    };





    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-2xl font-bold">useState Array Example</h1>

            <div className=' '> 
                {
                    people.map((person) => {

                        return (
                            <div className='' key={person.id}>
                                <h4 className='text-center'>{person.name}</h4>
                                <button className='btn btn-secondary' onClick={()=>removeItem(person.id)}>Remove</button>
                            </div>
                        )
                    })
                }
                <button className='btn btn-accent mt-4' onClick={clearAllItes}>Clear All</button>
                {/* we can also call arrow function inside the button as fllowing--> "onClick={()=>clearAllItes([])"" */}
            </div>
        </div>
    );
};

export default Final;