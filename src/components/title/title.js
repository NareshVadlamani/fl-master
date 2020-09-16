import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Title(props) {
  return (
    <Typography component="h1" variant="h6" style={{color: 'white',
    left: '-343px',
    top: '-238px'}}>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};