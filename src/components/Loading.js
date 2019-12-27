import React from 'react';
import { BeatLoader } from "react-spinners";

const Loading = () => {
    return (
        <div id="loading">
            <BeatLoader
            size={20}
            color={"orangered"}
            />
        </div>
    );
}

export default Loading;
