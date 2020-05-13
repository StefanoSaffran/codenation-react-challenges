import React from "react";

class Button extends React.Component {
  render() {
    const { className, handleOnClick, content, classIcon } = this.props;
    return (
      <button 
        className={className} 
        onClick={handleOnClick}>
        {content} <i className={classIcon} />
      </button>
    );
  }
}

export default Button;