//import styles from "./ContactList.module.css";
import PropTypes from "prop-types";

function fits(name, filter) {
  return name.toLowerCase().includes(filter.toLowerCase());
}

function ContactList({ state, onDelete }) {
  return (
    <ul>
      {state.contacts
        .filter((contact) => fits(contact.name, state.filter))
        .map((contact) => {
          return (
            <li key={contact.id}>
              {contact.name} {contact.number}
              <button
                type="button"
                onClick={() => {
                  onDelete(contact.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
}

ContactList.propTypes = {
  state: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
