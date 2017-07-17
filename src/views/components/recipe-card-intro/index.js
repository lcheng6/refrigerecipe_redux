import React from 'react';
import { Card, CardImg, CardText, CardBlock, CardLink,
  CardTitle, CardSubtitle, Badge, Button } from 'reactstrap';

const RecipeCardIntro = (props) => {
  return (
  <div>

    <Card>
      <CardImg top width="100%" src="https://spoonacular.com/recipeImages/easy-no-knead-artisan-bread-866619.jpg" alt="Card image cap" />{props.image}
      <CardBlock>
        <CardTitle>{props.title}Cinnamon Chip Bread</CardTitle>
        {/* <CardSubtitle>Ingredients:</CardSubtitle> */}
        <CardLink href="#">Used Ingredients <Badge color="success">{props.usedCount}2</Badge></CardLink>
        <CardLink href="#">Missing <Badge color="warning">{props.missedCount}4</Badge></CardLink>
      </CardBlock>
    </Card>

    
    <Card>
      <CardImg top width="100%" src="https://spoonacular.com/recipeImages/pita-bread-876991.jpg" alt="Card image cap" />{props.image}
      <CardBlock>
        <CardTitle>{props.title}Cinnamon Chip Bread</CardTitle>
        {/* <CardSubtitle>Ingredients:</CardSubtitle> */}
        <CardLink href="#">Used Ingredients <Badge color="success">{props.usedCount}2</Badge></CardLink>
        <CardLink href="#">Missing <Badge color="warning">{props.missedCount}4</Badge></CardLink>
      </CardBlock>
    </Card>
    <Card>
      <CardImg top width="100%" src="https://spoonacular.com/recipeImages/potato-apple-latkes-221363.jpg" alt="Card image cap" />{props.image}
      <CardBlock>
        <CardTitle>{props.title}Cinnamon Chip Bread</CardTitle>
        {/* <CardSubtitle>Ingredients:</CardSubtitle> */}
        <CardLink href="#">Used Ingredients <Badge color="success">{props.usedCount}2</Badge></CardLink>
        <CardLink href="#">Missing <Badge color="warning">{props.missedCount}4</Badge></CardLink>
      </CardBlock>
    </Card>
    <Card>
      <CardImg top width="100%" src="https://spoonacular.com/recipeImages/pizza-dough-214362.jpg" alt="Card image cap" />{props.image}
      <CardBlock>
        <CardTitle>{props.title}Cinnamon Chip Bread</CardTitle>
        {/* <CardSubtitle>Ingredients:</CardSubtitle> */}
        <CardLink href="#">Used Ingredients <Badge color="success">{props.usedCount}2</Badge></CardLink>
        <CardLink href="#">Missing <Badge color="warning">{props.missedCount}4</Badge></CardLink>
      </CardBlock>
    </Card>
    <Card>
      <CardImg top width="100%" src="https://spoonacular.com/recipeImages/piecrust-211569.jpg" alt="Card image cap" />{props.image}
      <CardBlock>
        <CardTitle>{props.title}Cinnamon Chip Bread</CardTitle>
        {/* <CardSubtitle>Ingredients:</CardSubtitle> */}
        <CardLink href="#">Used Ingredients <Badge color="success">{props.usedCount}2</Badge></CardLink>
        <CardLink href="#">Missing <Badge color="warning">{props.missedCount}4</Badge></CardLink>
      </CardBlock>
    </Card>
    <Card>
      <CardImg top width="100%" src="https://spoonacular.com/recipeImages/fried-green-tomatoes-204437.jpg" alt="Card image cap" />{props.image}
      <CardBlock>
        <CardTitle>{props.title}Cinnamon Chip Bread</CardTitle>
        {/* <CardSubtitle>Ingredients:</CardSubtitle> */}
        <CardLink href="#">Used Ingredients <Badge color="success">{props.usedCount}2</Badge></CardLink>
        <CardLink href="#">Missing <Badge color="warning">{props.missedCount}4</Badge></CardLink>
      </CardBlock>
    </Card>
    <Card>
      <CardImg top width="100%" src="https://spoonacular.com/recipeImages/Cinnamon-Chip-Bread-525861.jpg" alt="Card image cap" />{props.image}
      <CardBlock>
        <CardTitle>{props.title}Cinnamon Chip Bread</CardTitle>
        {/* <CardSubtitle>Ingredients:</CardSubtitle> */}
        <CardLink href="#">Used Ingredients <Badge color="success">{props.usedCount}2</Badge></CardLink>
        <CardLink href="#">Missing <Badge color="warning">{props.missedCount}4</Badge></CardLink>
      </CardBlock>
    </Card>
    <Card>
      <CardImg top width="100%" src="https://spoonacular.com/recipeImages/Saint-Agur-Blue-Cheese-Sabls-201979.jpg" alt="Card image cap" />{props.image}
      <CardBlock>
        <CardTitle>{props.title}Cinnamon Chip Bread</CardTitle>
        {/* <CardSubtitle>Ingredients:</CardSubtitle> */}
        <CardLink href="#">Used Ingredients <Badge color="success">{props.usedCount}2</Badge></CardLink>
        <CardLink href="#">Missing <Badge color="warning">{props.missedCount}4</Badge></CardLink>
      </CardBlock>
    </Card>
    <Card>
      <CardImg top width="100%" src="https://spoonacular.com/recipeImages/monkey-bread-142849.jpg" alt="Card image cap" />{props.image}
      <CardBlock>
        <CardTitle>{props.title}Cinnamon Chip Bread</CardTitle>
        {/* <CardSubtitle>Ingredients:</CardSubtitle> */}
        <CardLink href="#">Used Ingredients <Badge color="success">{props.usedCount}2</Badge></CardLink>
        <CardLink href="#">Missing <Badge color="warning">{props.missedCount}4</Badge></CardLink>
      </CardBlock>
    </Card>
    <Card>
      <CardImg top width="100%" src="https://spoonacular.com/recipeImages/brown-sugar-shortbread-140656.jpg" alt="Card image cap" />{props.image}
      <CardBlock>
        <CardTitle>{props.title}Cinnamon Chip Bread</CardTitle>
        {/* <CardSubtitle>Ingredients:</CardSubtitle> */}
        <CardLink href="#">Used Ingredients <Badge color="success">{props.usedCount}2</Badge></CardLink>
        <CardLink href="#">Missing <Badge color="warning">{props.missedCount}4</Badge></CardLink>
      </CardBlock>
    </Card>
    <Card>
      <CardImg top width="100%" src="https://spoonacular.com/recipeImages/scottish-shortbread-363485.jpg" alt="Card image cap" />{props.image}
      <CardBlock>
        <CardTitle>{props.title}Cinnamon Chip Bread</CardTitle>
        {/* <CardSubtitle>Ingredients:</CardSubtitle> */}
        <CardLink href="#">Used Ingredients <Badge color="success">{props.usedCount}2</Badge></CardLink>
        <CardLink href="#">Missing <Badge color="warning">{props.missedCount}4</Badge></CardLink>
      </CardBlock>
    </Card>
    <Card>
      <CardImg top width="100%" src="https://spoonacular.com/recipeImages/Cinnamon-Chip-Bread-525861.jpg" alt="Card image cap" />{props.image}
      <CardBlock>
        <CardTitle>{props.title}Cinnamon Chip Bread</CardTitle>
        {/* <CardSubtitle>Ingredients:</CardSubtitle> */}
        <CardLink href="#">Used Ingredients <Badge color="success">{props.usedCount}2</Badge></CardLink>
        <CardLink href="#">Missing <Badge color="warning">{props.missedCount}4</Badge></CardLink>
      </CardBlock>
    </Card>

  </div>
  );
};


export default RecipeCardIntro;

// title: "Cinnamon Chip Bread",
// image: "https://spoonacular.com/recipeImages/Cinnamon-Chip-Bread-525861.jpg",
// imageType: "jpg",
// usedIngredientCount: 2,
// missedIngredientCount: 1,
// likes: 3 },
