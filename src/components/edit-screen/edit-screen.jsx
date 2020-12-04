import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getItemBook} from "../../store/selectors/get-book-item/get-book-item";


const EditScreen = ({book}) => {
    console.log(book);
    return  (
        <h1>EditScreen</h1>
    )
}


const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = (state, prop) => {
  return {
    book: getItemBook({state, prop})
  };
};


export {EditScreen};
export default connect(mapStateToProps, mapDispatchToProps)(EditScreen);
