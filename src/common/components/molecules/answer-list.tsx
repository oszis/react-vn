import React from 'react';

const AnswerList = (props: any) => {
    return (
        <div>
            {props.replics.map(replic => <button disabled>{replic}</button>)}
        </div>
    )
}