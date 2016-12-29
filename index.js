/**
 * Created by Archit on 23/08/16.
 */


import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

import ThirdPane from 'modules/paid/components/ThirdPane/ThirdPane';
import {closePopUp, closeThirdPane} from './../../actions/appActions';

import TargetingDetails from './../targeting/TargetingDetailsWrapper';

export const THIRD_PANE_COMPONENTS = {
  'VIEW_TARGETING_DETAILS'   : TargetingDetails
};

export const ConnectedTP = connect(
  undefined,
  dispatch => ({ onThirdPaneClose: () => dispatch( closeThirdPane() ) })
)( ThirdPane );

export const getThirdPaneComponent = ( thirdPaneType ) => {
  return (
    <ConnectedTP
      BodyComponent={THIRD_PANE_COMPONENTS[thirdPaneType]}
    />
  );
};
