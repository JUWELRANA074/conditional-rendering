import React from 'react';

const Users = (props) => {
    const { famillar } = props;

    // 1. element variable 
    let greeting;
    if (famillar) {
        greeting = <h2>Hellow bondho How are You !!!</h2>
    }
    else {
        greeting = <h2>Who the hell are You !!! </h2>
    }

    // 2.. Turnary oparator 
    // condition ? (display this part if condition true) : (if condition false)

    // 3.. Logical Oparator brbohar kore 

    return (
        <div>
            <div className="">
                <h1>Greetings</h1>
                {greeting}
            </div>
            <div className="">
                <h1>Food</h1>
                {famillar ? <h3>Kacchi Birani</h3> : <h3>Taka nai Vag</h3>}
            </div>
            <div className="">
                <h1>Profession</h1>
            </div>
            <div className="">
                <h1>Connection</h1>
                {famillar && <div className="">
                    <h3>Dosto tomar phone Number ta deo </h3>
                </div>}
                <div className="">
                    <h2>Shere Drink </h2>
                    {
                        famillar || <h3>Khamo dab er Pani </h3>
                    }
                </div>

            </div>
        </div>
    );
};

export default Users;