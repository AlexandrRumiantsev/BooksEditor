import React from 'react';
import PropTypes from "prop-types";
пше ыефегы
const Sorting = ({changeFilter}) => {
    function handleChange(e) {
        e.preventDefault();
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

    return (
        <select onChange={handleChange}>
            <option value="">--Please choose an option--</option>
            <option selected={selected == 'alphabet' ? selected : ''} data-action="sort-title">
                По загаловку (В алфавитном порядке)
            </option>
            <option selected={selected == 'age' ? selected : ''} data-action="sort-age">
                По году публикации (От самого позднего)
            </option>
        </select>
    )
}

export default Sorting;