import styles from './ProductForm.module.scss'
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import Button from '../Button/Button';

const ProductForm = (props) => {

    const getPrice = (basePrice, currentSize) => {
        return basePrice + currentSize.additionalPrice
      }

    const sentOrder = (event, title, basePrice, currentSize, currentColor) => {
        event.preventDefault();
        console.log(`
          Your Order:
          Name: ${title}
          Price: ${getPrice(basePrice, currentSize)}
          Size: ${currentSize.name}
          Color: ${currentColor}
        `);
      };

    return (
        <div>
        <header>
            <h2 className={styles.name}>{props.title}</h2>
            <span className={styles.price}>Price: {getPrice(props.basePrice, props.currentSize)}$</span>
        </header>
        <form onSubmit={(event) => sentOrder(event, props.title, props.basePrice, props.currentSize, props.currentColor)}>
                <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize}  />
                <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
                <Button>
                    <span className="fa fa-shopping-cart" />
                </Button>
            </form>
            </div>
    )
}

export default ProductForm