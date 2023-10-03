import styles from './OptionSize.module.scss'

const OptionSize = props => {
    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(sizes => <li><button type="button" onClick={ () => setCurrentSize(sizes)} className={clsx(sizes === currentSize && styles.active)}>{sizes.name}</button></li>)}
            </ul>
          </div>
    )
}

export default OptionSize; 