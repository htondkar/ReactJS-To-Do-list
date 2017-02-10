import React, {PropTypes} from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Popover from 'material-ui/Popover';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import {purple500, cyan500} from 'material-ui/styles/colors';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
  popOverStyle: {
    padding: '10px',
    borderRadius: '10px',
    minWidth: '250px',
    borderWidth: '2px',
    borderColor: cyan500,
    borderStyle: 'solid',
    boxShadow: '0 0 10px grey'
  },
  textField: {
    marginBottom: '20px',
    fontSize: '16px',
    width: '100%',
  },
  radioGroup: {
    marginTop: '20px',
  },
  addButton: {
    width: '100%',
    marginTop: '10px'
  },
  underlineStyle: {
      borderColor: purple500,
    },
};

export default class AddWidget extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      taskCategory: 'work',
      taskTitle: '',
      errorText: '',
    };
  }

  handleOpen = (event) => {
    event.preventDefault();
    this.setState({
      modalIsOpen: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      modalIsOpen: false,
    });
  };

  handleCategoryChange = (value) => {
    this.setState({taskCategory: value})
  }

  handleTitleChange = (value) => {
    this.setState({taskTitle: value})
  }

  handleAdd = () => {
    if (this.state.taskTitle !== '') {
      const title = this.state.taskTitle,
      category = this.state.taskCategory,
      status = 'pending',
      date = new Date(),
      id = Math.random().toString(16).slice(2);
      this.props.stateChangeMethods.add({title,date,status,category,id});
      this.setState({
        modalIsOpen: false,
        taskTitle: ''
      });
    } else {
      this.setState({errorText: "This field is required"})
    }
  };


  render (){
    return (
      <div>
        <div className="add-button">
          <FloatingActionButton onClick={(e) => this.handleOpen(e)}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
        <Popover
          open={this.state.modalIsOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          style={styles.popOverStyle}>
          <div>
          <Subheader>Add a new task</Subheader>
           <TextField
             hintText="enter the task"
             errorText={this.state.errorText}
             underlineShow={true}
             className='text'
             ref='textField'
             style={styles.textField}
             underlineStyle={styles.underlineStyle}
             onChange={(event, value) => this.handleTitleChange(value)}
           />
          </div>
            <Subheader>select the category</Subheader>
          <div>
            <RadioButtonGroup
              name="shipSpeed"
              defaultSelected="work"
              style={styles.radioGroup}
              onChange={(event, value) => this.handleCategoryChange(value)}>
                <RadioButton
                  value="work"
                  label="it's a work task"
                  style={styles.radioButton}
                />
                <RadioButton
                  value="home"
                  label="it's a home task"
                  style={styles.radioButton}
                />
            </RadioButtonGroup>
          </div>
          <div>
            <RaisedButton
              label="ADD"
              primary={true}
              style={styles.addButton}
              onClick={this.handleAdd}
            />
          </div>
        </Popover>
      </div>
    );
  }
}

AddWidget.propTypes = {
};
