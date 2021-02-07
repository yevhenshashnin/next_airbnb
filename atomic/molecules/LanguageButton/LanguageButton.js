import React from 'react';
import {Button, Image} from '../../atoms';
import styles from './LanguageButton.module.css';

const LanguageButton = () => (
  <div className={styles.language_btn_wrapper}>
    <Button className={styles.language_btn} child='' />
    <Image src='data:image/png;base64,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'  className={styles.btn_img} />
  </div>
)

export default LanguageButton; 