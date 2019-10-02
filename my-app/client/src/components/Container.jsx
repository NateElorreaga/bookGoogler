import React from 'react';


export function Container({children}) {
    return (
        <div class="container-fluid">
        { children }    
        </div>
        
    );
}
