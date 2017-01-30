import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {
  renderDescription() {
    const {section, expanded} = this.props;

    if (expanded) {
      return (
          <Text>
            {section.description}
          </Text>
      );
    }
  }

  render() {
    const {titleStyle} = styles;
    const {id, title} = this.props.section;

    return (
        <TouchableWithoutFeedback onPress={() => this.props.selectSection(id)}>
          <View>
            <CardSection>
              <Text style={titleStyle}>
                {title}
              </Text>
            </CardSection>
            {this.renderDescription()}
          </View>
        </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedSectionId === ownProps.section.id;

  return {expanded};
};

export default connect(mapStateToProps, actions)(ListItem);
