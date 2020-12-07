import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {
  Link,
} from "react-router-dom";

import {selectFilteredBooks} from "../../store/selectors/sort-books/sort-books";
import {delBook} from "../../store/actions/books/books";

import BookList from "../book-list/book-list";
import Sorting from "../sorting/sorting";

const MainScreen = ({books, delBookDispatch, changeFilterDispatch, filter}) => {


    return  (
      <React.Fragment>
          <header>
            <h1>
              MainScreen
            </h1>
            <Sorting changeFilter={changeFilterDispatch}/>
            <Link to={`/add`}> ADD </Link>
          </header>
          <BookList
            books={books}
            delBook={delBookDispatch}
          />
      </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({

  delBookDispatch(id) {
    dispatch(delBook(id));
  },
  changeFilterDispatch(type) {
    dispatch({
      payload: {
        filter: type
      },
      type: 'CHANGE_FILTER'
    });
  }
});

const mapStateToProps = (state, props) => {
  return {
    books: selectFilteredBooks(state),
    filter: state.BOOKS.filter
  }
}
  
export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);