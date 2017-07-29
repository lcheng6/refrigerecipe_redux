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

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Recipe Detail Modal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>My Recipe</ModalHeader>
          <ModalBody>
            <div className="ui horizontal segments">
              <div className="ui segment">
                <div className="ui tiny statistic">
                  <div className="value">
                    <i className="spoon icon"/>
                    8
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
                    412.89
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
                    25
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
                    25
                  </div>
                  <div className="label">
                    Cook time
                  </div>
                </div>
              </div>
            </div>

            <div className="ui horizontal segments">
              <div className="ui segment">
                <div className="ui image">
                  <img className="ui fluid image"
                       src="https://spoonacular.com/recipeImages/Touchdown-Mini-Meatloaf-and-Buffalo-Chicken-Bites-595511.jpg"/>
                </div>
              </div>
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
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  }

  export default RecipeDetailModal;

