import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'

function App() {
  const [typeGenerator, setTypeGenerator] = useState('lineal')
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({  // Estado para almacenar los datos del formulario
    x0: '',
    a: '',
    c: '',
    m: '',
    pk: '',
    canDatos: ''
  });

  const handleGenerator = (type) => {
    setTypeGenerator(type)

    setFormData({
      x0: '',
      a: '',
      c: '',
      m: '',
      pk: '',
      canDatos: ''
    })
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (data) => {
    // Actualiza el estado del formulario con los datos recibidos por props
    setFormData(data);

  }

  return (
    <>
      <main className='main-container'>
        <section className='form-card'>
          <h1>Generadores</h1>
          <div className='options'>
            <button onClick={() => handleGenerator('lineal')} className={`bot-generator ${typeGenerator === 'lineal' ? 'active' : ''}`}>Lineal congruente</button>
            <button onClick={() => handleGenerator('estandar')} className={`bot-generator ${typeGenerator === 'estandar' ? 'active' : ''}`}>Estandar Minimo</button>
            <button onClick={() => handleGenerator('javascript')} className={`bot-generator ${typeGenerator === 'javascript' ? 'active' : ''}`}>Javascript</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '13px', height: '20px', paddingTop: '25px' }}>
            {
              (typeGenerator === 'estandar')
                ?
                <>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    style={{ cursor: 'pointer', width: '15px' }}
                  />
                  Factorizando
                </>
                :
                null
            }
          </div>
          <Formulario c handleSubmit={handleSubmit} typeGenerator={typeGenerator} />
        </section>
        <section className='result-box'>
          <Resultado data={formData} typeGenerator={typeGenerator} isCheckedFactorized = {isChecked} />
        </section>
        <p className='integrantes'>Dahian Alexandra Sanchez - Jesus Alberto Gil - Kevin Steven Victoria</p>
      </main>
    </>
  )
}

export default App
