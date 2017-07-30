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
  renderMissingIngredients() {
    const recipeDetail = this.props.recipeDetail;
    // const recipeSummary = this.props.recipeSummary;

    return (
      <div className="ui segment">
        <div className="meta">
          <span>MISSING INGREDIENTS</span>
        </div>
        <div className="ui large list">
          <div className="item">cream cheese</div>
          <div className="item">fillo shells</div>
          <div className="item">ground beef round</div>
          <div className="item">onion soup mix</div>
          <div className="item">part skim mozzarella cheese</div>
          <div className="item">part-skim mozzarella cheese</div>
          <div className="item">pepper sauce</div>
          <div className="item">quick cooking oats</div>
          <div className="item">roma tomatoes</div>
          <div className="item">tomato sauce</div>
        </div>
      </div>
    );
  }
  renderUsedIngredients() {
    const recipeDetail = this.props.recipeDetail;
    // const recipeSummary = this.props.recipeSummary;

  }

  renderAvailableInstructions() {
    const recipeDetail = this.props.recipeDetail;

  }

  renderAvailableInstructions() {
    const recipeDetail = this.props.recipeDetail;
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

            <div className="ui horizontal segments">
              {this.renderRecipeImage()}
              {this.renderMissingIngredients()}


              <div className="ui segment">
                <div className="meta">
                  <span>USED INGREDIENTS</span>
                </div>
                <div className="ui large list">
                  <div className="item">chicken breast</div>
                  <div className="item">tomato ketchup</div>
                </div>
              </div>
            </div>
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

