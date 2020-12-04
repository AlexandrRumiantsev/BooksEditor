import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {
  Link,
} from "react-router-dom";

import {delBook} from "../../store/actions/books/books";

import BookList from "../book-list/book-list";

const MainScreen = ({books, delBookDispatch}) => {
    return  (
      <React.Fragment>
          <header>
            <h1>
              MainScreen
            </h1>
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
    console.log(id)
    dispatch(delBook(id));
  }
});

const mapStateToProps = (state) => {
  return {
    books: state.BOOKS.list
  }
}
  


export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);