import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

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
    <article className={styles.product}>
     <ProductImage name={props.name} title={props.title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice(props.basePrice, currentSize)}$</span>
        </header>
        <form onSubmit={ (event) => sentOrder(event, props.title, props.basePrice, currentSize, currentColor)}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(sizes => <li><button type="button" onClick={ () => setCurrentSize(sizes)} className={clsx(sizes === currentSize && styles.active)}>{sizes.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {props.colors.map(color => <li><button type="button" onClick={ () => setCurrentColor(color)} className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} /></li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;