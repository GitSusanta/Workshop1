import React from 'react';

function C1() {
    return (
        <div>
            <div>
                Susanta
            </div>
            <div>
                Ghosh
            </div>
            <C2 country="USA" state="CT" />
        </div>        
    );
}

function C2(props) {
    return (
        <div>
            {props.country}{props.state}
            <p>{props.children}</p>
            <p>{props.name} {props.age}</p>
        </div>        
    );
}

export {
    C1,
    C2
  };