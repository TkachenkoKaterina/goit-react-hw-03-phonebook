import { Formik } from 'formik';
import PropTypes from 'prop-types';
// import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Form, Field, Button } from './ContactForm.styled';

// const ContactSchema = Yup.object().shape({
//   name: Yup.string('Name may contain only letters, apostrophe, dash and spaces').required(
//     'Required!'
//   ),
//   number: Yup.string().required(
//     'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//   ),
// });

export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      // validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        onAddContact({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name:
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          {/* <ErrorMessage name="name" component="div" /> */}
        </label>

        <label>
          Number:
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          {/* <ErrorMessage name="number" component="div" /> */}
        </label>

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
// import { Form, Button, Input } from './ContactForm.styled';

// export class ContactForm extends Component {
//   static propTypes = {
//     onAddContact: PropTypes.func.isRequired,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { name, number } = this.state;
//     this.props.onAddContact({ name, number });
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <Input
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>

//         <label>
//           Number:
//           <Input
//             type="tel"
//             name="number"
//             value={number}
//             onChange={this.handleChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>

//         <Button type="submit">Add contact</Button>
//       </Form>
//     );
//   }
// }
