import PropTypes from "prop-types";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <p className={styles.name}>
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
          {name}
        </p>
        <p className={styles.number}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          {number}
        </p>
      </div>
      <button className={styles.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
