import React from 'react'
import ClipLoader from "react-spinners/BeatLoader"


const Spinner = () => {
    return (
        <div>
            <ClipLoader color={"white"}
                loading={true}

            />

        </div>
    )
}

export default Spinner