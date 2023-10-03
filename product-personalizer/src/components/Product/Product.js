import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);


  return (
    <article className={styles.product}>
     <ProductImage name={props.name} title={props.title} currentColor={currentColor} />
       {/*} <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice(props.basePrice, currentSize)}$</span>
  </header>*/}
        <ProductForm title={props.title}
                      basePrice={props.basePrice} 
                      colors={props.colors} 
                      currentColor={currentColor} 
                      setCurrentColor={setCurrentColor} 
                      sizes={props.sizes} 
                      currentSize={currentSize} 
                      setCurrentSize={setCurrentSize} />
        {/*<form onSubmit={ (event) => sentOrder(event, props.title, props.basePrice, currentSize, currentColor)}>
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
  </form>*/}
    </article>
  )
};

export default Product;