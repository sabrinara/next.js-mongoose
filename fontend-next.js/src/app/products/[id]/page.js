import React from 'react';

const DynamicPage = ({params , searchParams}) => {

    console.log(params);
    console.log(searchParams);  
    return (
        <div>
            <h1>Dynamic Page :{params.id}</h1>
            <h2>Search Params :{searchParams.category}</h2>
        </div>
    );
};

export default DynamicPage;