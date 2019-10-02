import React from 'react';

export function SearchBar() {
    return (
        <div className="input-group mb-3" style={{"width": "35%"}}>
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
            );
}