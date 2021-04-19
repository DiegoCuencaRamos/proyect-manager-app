import React from 'react'

const ListDropdownButton = ({ onButtonClicked }) => (
    <div 
        className="list__dropdown-button" 
        onClick={onButtonClicked}                    
    >
        <i className="fas fa-sliders-h"></i>
        <i className="fas fa-sort-down"></i>
    </div> 
)

export default ListDropdownButton