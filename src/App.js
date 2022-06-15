import { useEffect, useState } from 'react';
import Card from './components/Card';
import styles from './App.module.css';

function App() {
  const [allCapsules, setAllCapsules] = useState([]);
  const [viewCapsules, setViewCapsules] = useState([]);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/capsules')
      .then((response) => response.json())
      .then((data) => {
        setAllCapsules(data)
        setViewCapsules(data)
      })
  }, [])

  function handleFilter(e) {
    const status = e.target.value;
    const filteredCapsules = allCapsules.filter(cap => cap.status === status)
    setViewCapsules(filteredCapsules)
  }

  return (
    <div className={styles.app}>
      <header>
        Rocket
      </header>
      <section>
        <button value="active" onClick={handleFilter}>
          Active
        </button>
        <button value="retired" onClick={handleFilter}>
          Destroyed
        </button>
      </section>
      <main className={styles.main}>
        {viewCapsules.map((capsule) => {
          return (
            <Card key={capsule.capsule_serial} capsule={capsule} />
          )
        })}
      </main>
    </div>
  );
}

export default App;
