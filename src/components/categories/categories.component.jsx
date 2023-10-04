import CategoryItems from "../category-items/category-items.component";
import './categories.styles.scss';

const Categories = ({category}) =>
{
   
    return(
      <div className="categories-container">
        <CategoryItems categories = {category} />
      </div>
    );
}

export default Categories;