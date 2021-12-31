/* eslint-disable prefer-template */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

function ProductCard({ id, title, description, image }) {
  const [tiempo, setTiempo] = useState(0);
  const [minutos, setMinutos] = useState(10);
  const [segundos, setSegundos] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  let interval;
  function tiempoRandom() {
    const min = 1;
    const max = 5;

    const rand = Math.floor(Math.random() * (max - min + 1) + min);
    setTiempo(rand * 60);
  }
  // tiempoRandom();
  function iniciarTimer() {
    //

    interval = setInterval(() => {
      const dif = tiempo - 1;
      const minutos1 = Math.floor(dif / 60);
      const segundos1 = Math.floor(dif % 60);

      if (dif >= 0) {
        setTiempo(dif);
        setMinutos(minutos1);
        setSegundos(segundos1);
      } else {
        clearInterval(interval.current);
      }
    }, 1000);
  }

  function handleClick() {
    setOpenModal(!openModal);
  }
  useEffect(() => {
    tiempoRandom();
  }, []);
  useEffect(() => {
    iniciarTimer();
    return () => clearInterval(interval);
  });
  return (
    <div className={styles.card}>
      <div id="modal" className={openModal ? styles.modalOpen : styles.modalClose}>
        <div className={styles.modal__content}>
          <h2>Description of {title} </h2>
          <button
            type="button"
            onClick={() => handleClick()}
            className={styles.modal__close}>
            &times;
          </button>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <img className={styles.card__image} alt={title + id} src={image} />
        <h3>{title}</h3>
      </div>
      <div className={styles.card__box}>
        <p>
          {minutos < 10 ? '0' + minutos : minutos} :{' '}
          {segundos < 10 ? '0' + segundos : segundos}
        </p>
        <button
          type="button"
          disabled={tiempo === 0}
          onClick={() => handleClick()}
          className={tiempo !== 0 ? styles.card__button : styles.card__buttonDisable}>
          Go To Detail
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
