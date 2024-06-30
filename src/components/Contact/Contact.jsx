import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <div className={styles.name}>
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
          {contact.name}
        </div>
        <div className={styles.number}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          {contact.number}
        </div>
      </div>
      <button
        onClick={() => dispatch(deleteContact(contact.id))}
        className={styles.button}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
