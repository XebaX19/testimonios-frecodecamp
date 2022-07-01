//const React = require('react');
import React from 'react';
import '../css/Testimonio.css'

//Con componente de "Clase"
class Testimonio extends React.Component {
  render() {
    return(
      <div className='contenedor-testimonio'>
        <img 
          className='imagen-testimonio'
          src={ require(`../imagenes/testimonio-${this.props.imagen}.png`) }
          alt={`Foto de ${this.props.nombreApellido}`} />
  
          <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'>
              <strong>{this.props.nombreApellido}</strong> en {this.props.pais}
            </p>
            <p className='cargo-testimonio'>
              {this.props.cargo} en <strong>{this.props.empresa}</strong>
            </p>
            <p className='texto-testimonio'>"{this.props.testimonio}"</p>
          </div>
      </div>
    );
  }
}

//Con componente "funcional"
// function Testimonio(props) {
//   return(
//     <div className='contenedor-testimonio'>
//       <img 
//         className='imagen-testimonio'
//         src={ require(`../imagenes/testimonio-${props.imagen}.png`) }
//         alt={`Foto de ${props.imagen}`} />

//         <div className='contenedor-texto-testimonio'>
//           <p className='nombre-testimonio'>
//             <strong>{props.nombreApellido}</strong> en {props.pais}
//           </p>
//           <p className='cargo-testimonio'>
//             {props.cargo} en <strong>{props.empresa}</strong>
//           </p>
//           <p className='texto-testimonio'>"{props.testimonio}"</p>
//         </div>
//     </div>
//   );
// }

export default Testimonio;