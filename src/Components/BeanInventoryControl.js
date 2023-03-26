import React from 'react';
import BeanList from './BeanList';
import AddSackOfBeansForm from './AddSackOfBeansForm';
import SackOfBeansDetail from './SackOfBeansDetail';
import EditSackOfBeansForm from './EditSackOfBeansForm';

export default class BeanInventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainBeanList: [],
      selectedSackOfBeans: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedSackOfBeans != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedSackOfBeans: null,
        editing: false
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

  handleBeanSold = (sackOfBeansWithSale) => {
    
    if (sackOfBeansWithSale.quantity !== 0) {
      const reducedQuantity = sackOfBeansWithSale.quantity -= 1;
      const sackWithLessBeans = {...sackOfBeansWithSale, quantity: reducedQuantity};

      const editedMainBeanList = this.state.mainBeanList
      .filter(beansSold => beansSold.id !== this.state.selectedSackOfBeans.id)
      .concat(sackWithLessBeans);
      
      this.setState({
        mainTicketList: editedMainBeanList,
        selectedSackOfBeans: null
      });
    }    
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingSackOfBeansInList = (sackOfBeansToEdit) => {
    const editedMainBeanList = this.state.mainBeanList
      .filter(sackOfBeans => sackOfBeans.id !== this.state.selectedSackOfBeans.id)
      .concat(sackOfBeansToEdit);
    this.setState({
      mainBeanList: editedMainBeanList,
      editing: false,
      selectedSackOfBeans: null
    })
  }

  render() {
    let currentlyVisibleState = null;
    let button = null;
    let buttonText = null;
    
    if (this.state.editing){
      currentlyVisibleState = <EditSackOfBeansForm sackOfBeans= {this.state.selectedSackOfBeans}
      onEditSackOfBeans = {this.handleEditingSackOfBeansInList} />
      buttonText = "Return to Bean List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddSackOfBeansForm onAddSackOfBeansCreation={this.handleAddingAddSackOfBeansToList} />
      buttonText = "Return to Bean List";
      button = <button onClick={this.handleClick}>{buttonText}</button>;
    } else if (this.state.selectedSackOfBeans != null) {
      currentlyVisibleState = <SackOfBeansDetail sackOfBeans = { this.state.selectedSackOfBeans} 
      onClickingSale={this.handleBeanSold}
      onClickingEdit={this.handleEditClick}/>
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

