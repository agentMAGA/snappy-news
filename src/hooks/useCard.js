import React from "react";


const useCart = () => {

    //Писк пицц
    const [searchValue, setSearchValue] = React.useState("");

    const onSearchValue = (event) => {
        setSearchValue(event.target.value);
    }


    return { searchValue, onSearchValue };
};

export default useCart;