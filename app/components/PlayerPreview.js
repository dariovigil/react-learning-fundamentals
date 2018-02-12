import React from 'react';
import PropTypes from 'prop-types';


const PlayerPreview = (props) => {
  return (
    <div>
      <div className='column'>
        <img src={props.avatar} alt={`Avatar for ${props.username}`} className='avatar'/>
        <h2 className='username'>@{props.username}</h2>
      </div>
        {props.children}
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired
}

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    this.setState(() => ({username: value}))
  }
  
  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }
  render() {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='username'>{this.props.label}</label>
        <input
         id='username'
         placeholder='github username'
         autoComplete='off'
         value={this.state.username}
         onChange={this.handleChange}
        />
        <button className='button' type='submit' disabled={!this.state.username}>Submit</button>
      </form>
    )
  }
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default PlayerPreview;