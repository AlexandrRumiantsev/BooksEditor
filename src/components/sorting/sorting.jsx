import React from 'react';
import PropTypes from "prop-types";

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
            <option defaultValue="">--Выберете фильтр--</option>
            <option defaultValue={selected == 'alphabet' ? selected : ''} data-action="sort-title">
                По загаловку (В алфавитном порядке)
            </option>
            <option defaultValue={selected == 'age' ? selected : ''} data-action="sort-age">
                По году публикации (От самого позднего)
            </option>
        </select>
    )
}

Sorting.propTypes = {
    changeFilter: PropTypes.func
};

export default Sorting;