import React from "react";

const CreateContext = React.createContext({
    items:[],
    totalamount: 0,
    addItem: (item) => {},
    removeitem: (id) => {},
    clearcart: () =>{}
});

export default CreateContext;