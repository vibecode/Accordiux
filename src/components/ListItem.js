import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, UIManager, Platform } from 'react-native';
import { Card, CardSection } from './common';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {
  constructor(props) {
    super(props);
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
            <Card>
              <CardSection>
                <Text style={titleStyle}>
                  {title}
                </Text>
              </CardSection>
              {this.renderDescription()}
            </Card>
          </View>
        </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
  },
  contentStyle: {
    flex: 1,
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedSectionId === ownProps.section.id;

  return {expanded};
};

export default connect(mapStateToProps, actions)(ListItem);
