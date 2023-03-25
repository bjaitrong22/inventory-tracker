import React from 'react';
import BeanList from './BeanList';
import AddSackOfBeansForm from './AddSackOfBeansForm';
import SackOfBeansDetail from './SackOfBeansDetail';

export default class BeanInventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainBeanList: [],
      selectedSackOfBeans: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedSackOfBeans != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedSackOfBeans: null,
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingAddSackOfBeansToList = (addSackOfBeans) => {
    const newMainBeanList = this.state.mainBeanList.concat(addSackOfBeans);
    this.setState({
      mainBeanList: newMainBeanList,
      formVisibleOnPage: false,
    });
  }

  handleChangingSelectedSackOfBeans = (id) => {
    const selectedSackOfBeans = this.state.mainBeanList.filter(sackOfBeans => sackOfBeans.id === id)[0];
    this.setState({selectedSackOfBeans: selectedSackOfBeans});
  }

  render() {
    let currentlyVisibleState = null;
    let button = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddSackOfBeansForm onAddSackOfBeansCreation={this.handleAddingAddSackOfBeansToList} />
      buttonText = "Return to Bean List";
      button = <button onClick={this.handleClick}>{buttonText}</button>;
    } else if (this.state.selectedSackOfBeans != null) {
      currentlyVisibleState = <SackOfBeansDetail sackOfBeans = { this.state.selectedSackOfBeans}/>
      buttonText = "Return to Bean List";
      button = <button onClick={this.handleClick}>{buttonText}</button>;
    } else {
      currentlyVisibleState = <BeanList beanList={this.state.mainBeanList} onSackOfBeansSelection={this.handleChangingSelectedSackOfBeans} />
      buttonText = "Add Sack Of Beans";
      button = <button onClick={this.handleClick}>{buttonText}</button>;
    }
    
    return (
      <>
        {currentlyVisibleState}
        {button}
      </>
    );
  }
}

