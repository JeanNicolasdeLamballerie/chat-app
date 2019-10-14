
import React from 'react';
import './Contact.css';

class Contact extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    online : props.online}
  }
  render() {
  return (
    <div className="Contact">
      <img src={this.props.avatar} className='avatar' />
      <div>
        <div className='name'>{this.props.name}
        </div> 
        <div className='status' onClick={event => {
          const newStatus = !this.state.online;
          this.setState({online:newStatus})}}>
          <div className='status-text'>
            <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
            {this.state.online ? 'Online' : 'Offline'}</div>

        </div>
      </div>
    </div>
  );
  }
}
export default Contact;
