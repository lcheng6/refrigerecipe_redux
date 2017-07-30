import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';
import classNames from 'classnames';

export class RecipeDetailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }



  renderHeaderBar() {
    const recipeDetail = this.props.recipeDetail;
    return (
      <div className="ui horizontal segments">
        <div className="ui segment">
          <div className="ui tiny statistic">
            <div className="value">
              <i className="spoon icon"/>
              {!undefined !== recipeDetail.servings? recipeDetail.servings : 2}
            </div>
            <div className="label">
              Servings
            </div>
          </div>
        </div>
        <div className="ui segment">
          <div className="ui tiny statistic">
            <div className="value">
              <i className="heartbeat icon"/>
              {undefined !== recipeDetail.nutrition.nutrients[0].amount? recipeDetail.nutrition.nutrients[0].amount: 200}
            </div>
            <div className="label">
              Calories
            </div>
          </div>
        </div>
        <div className="ui segment">
          <div className="ui tiny statistic">
            <div className="value">
              <i className="dashboard icon"/>
              {undefined !== recipeDetail.readyInMinutes? recipeDetail.readyInMinutes: 45}
            </div>
            <div className="label">
              Prep time
            </div>
          </div>
        </div>
        <div className="ui segment">
          <div className="ui tiny statistic">
            <div className="value">
              <i className="wait icon"/>
              {undefined !== recipeDetail.cookingMinutes ? recipeDetail.cookingMinutes: 25}
            </div>
            <div className="label">
              Cook time
            </div>
          </div>
        </div>
      </div>
    );

  }

  renderRecipeImage() {
    const recipeDetail = this.props.recipeDetail;
    return (
      <div className="ui segment">
        <div className="ui image">
          <img className="ui fluid image"
               src={recipeDetail.image}/>
        </div>
      </div>
    );
  }
  renderImageAndIngredients() {
    return(
      <div className="ui horizontal segments">
        {this.renderRecipeImage()}
        {this.renderMissingIngredients()}
        {this.renderUsedIngredients()}
      </div>
    );
  }
  renderMissingIngredients() {
    //const recipeDetail = this.props.recipeDetail;
    const recipeSummary = this.props.recipeSummary;

    const missingItemList = recipeSummary.missedIngredients.map((item) =>
      <div className="item">{item.name}</div>
    );

    return (
      <div className="ui segment">
        <div className="meta">
          <span>MISSING INGREDIENTS</span>
        </div>
        <div className="ui large list">
          {missingItemList}
        </div>
      </div>
    );
  }
  renderUsedIngredients() {
    //const recipeDetail = this.props.recipeDetail;
    const recipeSummary = this.props.recipeSummary;

    const usedItemList = recipeSummary.usedIngredients.map((item) =>
      <div className="item">{item.name}</div>
    );
    return(
      <div className="ui segment">
        <div className="meta">
          <span>USED INGREDIENTS</span>
        </div>
        <div className="ui large list">
          {usedItemList}
        </div>
      </div>
    );
  }

  renderAvailableInstructions() {
    const recipeDetail = this.props.recipeDetail;
    // return(
    //   <div className="ui horizontal segments">
    //   </div>
    //
    // );

    return null;
  }

  renderAnalyzedInstructionSteps() {
    const recipeDetail = this.props.recipeDetail;
    const stepList = recipeDetail.analyzedInstructions[0].steps.map((step) =>

      <div className="item" key={step.number}>{step.number}. {step.step}</div>
    );
    return (
      <div className="ui horizontal segments">
        <div className="ui segment">
          <div className="meta">
            <span>COOKING INSTRUCTIONS</span>
          </div>
          <div className="ui large list">
            {stepList}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const recipeDetail = this.props.recipeDetail;
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Recipe Detail Modal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{recipeDetail.title}</ModalHeader>
          <ModalBody>
            {this.renderHeaderBar()}
            {this.renderImageAndIngredients()}
            {this.renderAvailableInstructions()}
            {this.renderAnalyzedInstructionSteps()}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save Recipe</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  }

  export default RecipeDetailModal;

