import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import withValidation from "../../hooks/with-validation/with-validation";
import {getItemBook} from "../../store/selectors/get-book-item/get-book-item";

import {editBook} from "../../store/actions/books/books";

import BookForm from "../book-form/book-form";

const BookFormWithValidation = withValidation(BookForm);


const EditScreen = ({editBookDispatch, book}) => {

  return <BookFormWithValidation 
            addBook={editBookDispatch}
            book={book}
        />
}


const mapDispatchToProps = (dispatch) => ({
  editBookDispatch(form) {
    console.log(form)
    dispatch(editBook(form));
  }
});

const mapStateToProps = (state, prop) => {
  return {
    book: getItemBook({state, prop})
  };
};


export {EditScreen};
export default connect(mapStateToProps, mapDispatchToProps)(EditScreen);
