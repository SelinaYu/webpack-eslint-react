
import React, { Component } from 'react';
import { getData } from 'Actions/app';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class List extends Component {
  componentDidMount = () => {
    this.props.getData();
    // const { dispatch } = this.props;
    // dispatch(getData());
  }

  render() {
    const list = this.props.commonData.list || [];

    return (
      <div style={{ background: '#fff', minHeight: '90vh', padding: '20px' }}>
            这里是列表
        {
          list.map((item, index) => <li key={index}>列表{item.id}</li>)
        }

      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
});
List.propTypes = {
  getData: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
