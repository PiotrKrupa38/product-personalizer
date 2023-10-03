import styles from './OptionColor.module.scss'
import clsx from 'clsx';
import { useState } from 'react';
import PropTypes from 'prop-types';


const OptionColor = props => {

    const prepareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
      }

    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {props.colors.map(color => <li><button type="button" onClick={ () => setCurrentColor(color)} className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} /></li>)}
            </ul>
          </div>
    )
}

OptionColor.propTypes = {
    colors: PropTypes.string.isRequired,
    prepareColorClassName: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.string.isRequired,
};

export default OptionColor;