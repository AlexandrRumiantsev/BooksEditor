import React, { useState } from 'react';
import PropTypes from "prop-types";


const Sorting = ({changeFilter}) => {
    function handleChange(e) {
        e.preventDefault();
        console.log(e.target.value);
        switch(e.target.value){
            case `По загаловку (В алфавитном порядке)`:
                    changeFilter('alphabet');
                break;
            case ``:
                    changeFilter(null);
                break;
            case `По году публикации (От самого позднего)`:
                    changeFilter(`age`);
                break;    

        }
    }

    const selected = localStorage.getItem('filter');
    console.log(selected);

    return (
        <select onChange={handleChange}>
            <option value="">--Please choose an option--</option>
            <option selected={selected == 'alphabet' ? selected : ''} data-action="sort-title">По загаловку (В алфавитном порядке)</option>
            <option data-action="sort-age">По году публикации (От самого позднего)</option>
        </select>
    )
    
}

export default Sorting;