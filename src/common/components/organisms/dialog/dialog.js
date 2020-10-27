import React from 'react';
import Author from "../../molecules/author/author";
import ReplicText from "../../molecules/replic-text/replic-text";

const Dialog = () => {
    return (
        <div>
            <Author />
            <ReplicText />
            <Answers />
        </div>
    );
};

export default Dialog;