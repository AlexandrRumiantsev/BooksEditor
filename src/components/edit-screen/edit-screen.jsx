import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {
  Link
} from "react-router-dom";


const EditScreen = () => {
    return  (
        <h1>EditScreen</h1>
    )
}


const mapDispatchToProps = (dispatch) => ({});
const mapStateToProps = (state) => {};

export {EditScreen};
export default connect(mapStateToProps, mapDispatchToProps)(EditScreen);
