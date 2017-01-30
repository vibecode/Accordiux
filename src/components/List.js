import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class List extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.sections);
  }

  renderRow(section) {
    return <ListItem section={section} />
  }

  render() {
    return (
        <ListView
            dataSource={this.dataSource}
            renderRow={this.renderRow}
        />
    );
  }
}

const mapStateToProps = (state) => {
  return { sections: state.sections };
};

export default connect(mapStateToProps)(List);
