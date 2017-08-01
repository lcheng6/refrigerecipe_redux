import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap';

export class RecipeDetailModal extends Component {
  constructor(props) {
    super(props);


    this.toggle = this.toggle.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
  }

  toggle() {
    this.props.cardToggle(!this.props.modal);
  }

  saveRecipe() {
    const recipeDetail = this.props.recipeDetail;
    // this.setState({
    //   modal: !this.state.modal
    // });
    //TODO: save recipe
    console.log("Going to save recipeId: " + recipeDetail.id);
    this.props.saveRecipeInFirebase(recipeDetail);
  }


  renderHeaderBar() {
    const recipeDetail = this.props.recipeDetail;
    return (
      <div className="ui horizontal segments">
        <div className="ui segment">
          <div className="ui tiny statistic">
            <div className="value">
              <i className="spoon icon"/>
              {undefined !== recipeDetail.servings? recipeDetail.servings : 2}
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
    if(! recipeSummary) {
      return null;
    }

    const missingItemList = recipeSummary.missedIngredients.map((item, index) =>
      <div className="item" key={index}>{item.name}</div>
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
    if (! recipeSummary) {
      return null;
    }

    const usedItemList = recipeSummary.usedIngredients.map((item, index) =>
      <div className="item" key={index}>{item.name}</div>
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



  renderAnalyzedInstructionSteps() {
    const recipeDetail = this.props.recipeDetail;
    if (undefined !== recipeDetail.analyzedInstructions[0]) {
      //TODO: iterate over the analyzedInstruction as well.
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
    }else {
      return (
        <div className="ui horizontal segments">
          <div className="ui segment">
            <div className="meta">
              <span>COOKING INSTRUCTIONS</span>
            </div>
            <div className="ui large list">
              N/A
            </div>
          </div>
        </div>
      );
    }

  }

  render() {
    const recipeDetail = this.props.recipeDetail;
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{recipeDetail.title}</ModalHeader>
          <ModalBody>
            {this.renderHeaderBar()}
            {this.renderImageAndIngredients()}
            {this.renderAnalyzedInstructionSteps()}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.saveRecipe}>Save Recipe</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  }

  export default RecipeDetailModal;

