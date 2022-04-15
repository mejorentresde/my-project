const navBar = () => {

    const estilos = {
        border: 'solid red 1px',
        color: 'blue'
    }

  return (
    <div>
        <li style = {estilos}>Inicio</li>
        <li className={{color: 'red'}}>Computadores</li>
        <li>Celulares</li>
    </div>
  )
}

export default navBar