import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, UIManager, Platform } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {
  constructor(props) {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental
      && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const {section, expanded} = this.props;
    const {contentStyle} = styles;

    if (expanded) {
      return (
          <CardSection>
            <Text style={contentStyle}>
              {section.description}
            </Text>
          </CardSection>
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
  },
  contentStyle: {
    flex: 1,
    padding: 20
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedSectionId === ownProps.section.id;

  return {expanded};
};

export default connect(mapStateToProps, actions)(ListItem);
