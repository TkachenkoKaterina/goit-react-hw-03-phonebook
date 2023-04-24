import React from 'react';
import { IoIosContact } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';
import { Button, ListItem } from './ContactListItem.styled';
import PropTypes from 'prop-types';

const ContactListItem = ({ contact, onDeleteContact }) => {
  return (
    <ListItem>
      <IoIosContact size="16" />
      {contact.name}: {contact.number}
      <Button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete <MdDeleteForever size="16" />
      </Button>
    </ListItem>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
