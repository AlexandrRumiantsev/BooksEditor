import React, { useState } from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";

import ReactFileReader from 'react-file-reader';
import {addBook} from '../../store/actions/books/books';


import BookForm from "../book-form/book-form";
import withValidation from "../../hooks/with-validation/with-validation";

console.log(withValidation)
console.log(BookForm)

const BookFormWithValidation = withValidation(BookForm);


const AddScreen = ({addBookDispatch}) => {
  return <BookFormWithValidation 
            addBook={addBookDispatch}
        />
}

const mapDispatchToProps = (dispatch) => ({
  addBookDispatch(form) {
    console.log(form)
    dispatch(addBook(form));
  }
});

const mapStateToProps = (state) => {
  return {}
}

export {AddScreen};
export default connect(mapStateToProps, mapDispatchToProps)(AddScreen);