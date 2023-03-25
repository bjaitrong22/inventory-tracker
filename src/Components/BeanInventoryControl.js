import React from 'react';
import BeanList from './BeanList';

export default class BeanInventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainBeanList: [],
      selectedSackOfBeans: null,
    };
  }

  handleClick = () => {
    console.log("handleClick works!");
  }

  handleChangingSelectedSackOfBeans = (id) => {
    const selectedSackOfBeans = this.state.mainBeanList.filter(sackOfBeans => sackOfBeans.id === id)[0];
    this.setState({selectedSackOfBeans: selectedSackOfBeans});
  }

  render() {
    let currentlyVisibleState = null;
    let button = null;
    let buttonText = null;

    currentlyVisibleState = <BeanList beanList={this.state.mainBeanList} onSackOfBeansSelection={this.handleChangingSelectedSackOfBeans} />
    buttonText = "Add Sack Of Beans";
    button = <button onClick={this.handleClick}>{buttonText}</button>;

    return (
      <>
        {currentlyVisibleState}
        {button}
      </>
    );
  }
}

