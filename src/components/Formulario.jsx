import React, { useState, useEffect } from 'react';
import '../styles/formulario.css';

export default function Formulario({ handleSubmit, typeGenerator }) {
  const initState = {
    x0: '',
    a: '',
    c: '',
    m: '',
    pk: '',
    canDatos: ''
  };

  const [data, setData] = useState(initState);

  useEffect(() => {
    // Restablecer los campos cuando typeGenerator cambie
    setData(initState);
  }, [typeGenerator]);

  const handleChange = (e) => {
    const name = e.target.name;

    setData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(data);
  };

  return (
    <>
      <form action="" className="formulario" onSubmit={handleFormSubmit}>
        <div className='input-box'>
          {
            (typeGenerator === 'lineal' || typeGenerator === 'estandar') && (
              <>
                <input
                  type="number"
                  placeholder="x0"
                  id="x0"
                  name="x0"
                  value={data.x0}
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  placeholder="a"
                  id="a"
                  name="a"
                  value={data.a}
                  onChange={handleChange}
                  required
                />
              </>
            )
          }


          {typeGenerator === 'lineal' && (
            <input
              type="number"
              placeholder="c"
              id="c"
              name="c"
              value={data.c}
              onChange={handleChange}
              required
            />
          )}

          {
            typeGenerator != 'javascript' && (

              <input
                type="number"
                placeholder="m"
                id="m"
                name="m"
                value={data.m}
                onChange={handleChange}
                required
              />

            )
          }

          {
            typeGenerator === 'javascript' && (

              <input
                type="number"
                placeholder="Cantidad de datos"
                id="canDatos"
                name="canDatos"
                value={data.canDatos}
                onChange={handleChange}
                required
              />

            )
          }
          <input
            type="number"
            placeholder="Decimales poker"
            id="pk"
            name="pk"
            value={data.pk}
            onChange={handleChange}
            required
          />
        </div>

        <button className="bot-generar" type="submit">
          Generar
        </button>
      </form>
    </>
  );
}
