/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import styles from './index.module.scss';

function App() {
  const [modal, setModal] = useState(false);

  function handleClick() {
    setModal(!modal);
  }
  return (
    <>
      <h1>Home-Page</h1>
      <h2 onClick={() => handleClick()}>About Page</h2>
      <div id="modal" className={modal ? styles.modalOpen : styles.modalClose}>
        <div className={styles.modal__content}>
          <button
            type="button"
            onClick={() => handleClick()}
            className={styles.modal__close}>
            &times;
          </button>
          <h2>Información Personal</h2>
          <div className={styles.modal__info}>
            <div>
              <h3>Nombre: Aldair Huamani Cusi</h3>
              <p>
                Soy ingeniero de Sistemas egresado de la Universidad Andina del Cusco,
                actualmente me encuentro laborando como FullStack Developer en la Agencia
                Valencia Travel. En mis tiempos libres me dedico a la música, con la
                ejecución de instrumentos como guitarra o piano
              </p>
            </div>
            <div>
              <img alt="foto de perfil" src="/img/foto.png" />
            </div>
          </div>
          <h3>Cosas que aprendí</h3>
          <ul>
            <li>Uso de Wireframes</li>
            <li>Control de Jira</li>
            <li>Metodologia BEM</li>
          </ul>
          <h3>Correo</h3>
          <a href="mailto:aiacos452@gmail.com">aiacos452@gmail.com</a>
          <h3>Github</h3>
          <a href="https://github.com/Baku452">Baku452</a>
        </div>
      </div>
      <ProductList />
    </>
  );
}

export default App;
