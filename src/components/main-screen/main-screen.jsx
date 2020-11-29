import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import BookList from "../book-list/book-list";

const MainScreen = ({books}) => {
    return  (
      <React.Fragment>
          <h1>MainScreen</h1>
          <BookList
            books={books}
          />
      </React.Fragment>
    )
}


const mapDispatchToProps = (dispatch) => ({});
const mapStateToProps = (state) => {
  return {
    books: JSON.parse(state.BOOKS.list)
  }
}
  


export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);