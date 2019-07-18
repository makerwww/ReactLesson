import React from 'react';

class Img extends React.Component{
    render(){
        let someName = 'Anatoliy';
        let someNum = 123;
        return(
            <div>
                <p>{someName} is {someNum} years old</p>
                <img src="workmain.jpg" />
            </div>
        )
    }
}

export default Img;