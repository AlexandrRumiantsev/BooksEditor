import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {
  Link
} from "react-router-dom";


const AddScreen = () => {
    return  (
        <h1>AddScreen</h1>
    )
}


const mapDispatchToProps = (dispatch) => ({});
const mapStateToProps = (state) => {};

export {AddScreen};
export default connect(mapStateToProps, mapDispatchToProps)(AddScreen);