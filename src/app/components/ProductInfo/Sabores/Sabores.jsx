import { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './StyleSabores.module.css';

const Sabores = () => {
  const [sabores, setSabores] = useState([]);

  /*
    FEEDBACK: Sería genial tener las llamadas a los endpoint en archivos separados,
    por ejemplo una carpeta `services` en `src`, y luego solo se importa aquí
    para obtener los datos.

    import { getSabores } from '@/app/services/getSabores';

    useEffect(() => {
      getSabores().then((data) => setSabores(data));
    }, []);
  */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://preapi.aquaforce.cl/api/sabores';
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
          setSabores(response.data.sabores);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={classes.sabores}>
        <h5 className={classes.title}>Sabor:</h5>
        <select
          className={classes.select}
          name="sabores"
          id="sabores"
          defaultValue=""
        >
          <option value="" disabled>
            Escoge un sabor
          </option>
          {sabores.map((sabor) => (
            <option key={sabor.name} value={sabor.name}>
              {sabor.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Sabores;
