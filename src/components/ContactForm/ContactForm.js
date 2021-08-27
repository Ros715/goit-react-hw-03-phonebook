import React from "react";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state.name, this.state.number);
    this.props.onSubmit(this.state.name, this.state.number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    //const { name, number } = this.state;

    return (
      <form
        className={styles.form}
        style={{ marginBottom: "32px" }}
        onSubmit={this.onSubmit}
      >
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={(e) => {
            //console.log("name", e.currentTarget.value);
            this.setState({ name: e.currentTarget.value });
          }}
        />

        <p>Number</p>
        <input
          type="tel"
          value={this.state.number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={(e) => {
            //console.log("number", e.currentTarget.value);
            this.setState({ number: e.currentTarget.value });
          }}
        />
        <div>
          <br />
          <button type="submit">Add contact</button>
        </div>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
