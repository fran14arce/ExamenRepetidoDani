import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Libro from './Libro';
class Ejercicio2 extends React.Component {
  constructor(props) {
    super(props);
    this.listaLibros = [];
    
  }
  anadir(){
    localStorage.setItem('titulo', this.valorInputTitulo.value);
    localStorage.setItem('autor', this.valorInputAutor.value);
    localStorage.setItem('fecha', this.valorInputFecha.value);
    localStorage.setItem('paginas', this.valorInputPaginas.value);
    localStorage.setItem('portada',this.valorInputPortada.value);
    localStorage.setItem('idioma',this.valorInputIdioma.value);
    
  }

  render() {
    return (
      <div id="ej2">
        <h2>Ejercicio 2</h2>
        <ul>
            
            <Container>
              <Row>
                <Col>
                <li>
                  <input
                    ref={(vIT) => (this.valorInputTitulo = vIT)}
                    type="text"
                    placeholder="Titulo"
                  />
                  </li>
                  <li>
                  <input
                    ref={(vIA) => (this.valorInputAutor = vIA)}
                    type="text"
                    placeholder="Autor"
                  />
                  </li>
                  <li>
                  <input
                    ref={(vIF) => (this.valorInputFecha = vIF)}
                    type="date"
                    placeholder="Fecha de publicacion"
                  />
                  </li>
                  <li>
                  <input
                    ref={(vIP) => (this.valorInputPaginas = vIP)}
                    type="number"
                    placeholder="Numero de paginas"
                  />
                  </li>
                  <li>
                  <input
                    ref={(vIP) => (this.valorInputPortada = vIP)}
                    type="url"
                    placeholder="Portada (URL)"
                  />
                  </li>
                  <li>
                  <input
                    ref={(vII) => (this.valorInputIdioma = vII)}
                    type="text"
                    placeholder="Idioma"
                  />
                  </li>
                </Col>
              </Row>
              <br />
              <button onClick={() => this.anadir()}>Añadir</button>
            </Container>
            <li>
              Crea un componente <i>Libro</i> para mostar los elementos que
              vayas añadiendo. El componente ha de implementar{' '}
              <a href="https://react-bootstrap.github.io/components/cards/">
                Card
              </a>{' '}
              de React-Bootstrap y mostrar todos los campos añadidos
              <b> - 1,75 puntos</b>
            </li>
        </ul>
      </div>
    );
  }
}

export default Ejercicio2;
