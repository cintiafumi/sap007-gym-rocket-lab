import styles from './Card.module.css';

export default function Card({ className, capsule }) {
  return (
    <div className={styles.container}>
      {capsule.status === "active" && (
        <img className={styles.icon} src="https://raw.githubusercontent.com/Laboratoria/SAP007-gym/main/session-15/exercises/rocket-lab-web/assets/rocketActive.svg" alt="" />
      )}
      {capsule.status === "unknown" && (
        <img className={styles.icon} src="https://raw.githubusercontent.com/Laboratoria/SAP007-gym/main/session-15/exercises/rocket-lab-web/assets/rocketUnknown.svg" alt="" />
      )}
      {capsule.status === "retired" && (
        <img className={styles.icon} src="https://raw.githubusercontent.com/Laboratoria/SAP007-gym/main/session-15/exercises/rocket-lab-web/assets/rocketDeactivate.svg" alt="" />
      )}
      <p>{capsule.capsule_serial}</p>
      <p>{capsule.details}</p>
    </div>
  )
}