import styles from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <div className={styles.contactCard}>
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
      <button className={styles.deleteButton}>Delete</button>
    </div>
  );
};

export default Contact;
