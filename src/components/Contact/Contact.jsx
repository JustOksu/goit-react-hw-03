import styles from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <div className={styles.contactCard}>
      <div className={styles.contactInfo}>
        <p>
          <span role="img" aria-label="user">
            👤
          </span>{" "}
          {name}
        </p>
        <p>
          <span role="img" aria-label="phone">
            📞
          </span>{" "}
          {number}
        </p>
      </div>
      <button className={styles.deleteButton}>Delete</button>
    </div>
  );
};

export default Contact;
