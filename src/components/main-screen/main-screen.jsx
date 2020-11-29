import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {
  Link
} from "react-router-dom";


const MainScreen = (props) => {
    console.log(props);
    return  (
        <h1>MainScreen</h1>
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