import React, {PropTypes} from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import RotateIcon from 'material-ui/svg-icons/image/rotate-90-degrees-ccw.js';

const style = {
  color: 'black',
  position: 'absolute',
  top: '92%',
	left: '5%'
};

 const ToggleView = ({currentView, toggleView}) => {

  const handleToggle = (e)=> {
    toggleView(e);
  }

  return (
    <div className="view-botton">
      <RaisedButton
        label={currentView ? 'show in categories' : 'show all'}
        style={style}
        onClick={handleToggle}
        icon={<RotateIcon/>}
      />
    </div>
  );

}

ToggleView.propTypes = {
};

export default ToggleView;
