import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      toast.error('Please provide both name and phone.', { closeOnClick: false });
      return;
    }

    if (contacts.some(contact => contact.name === name || contact.number === number)) {
      toast.error('Contact with the same name or phone already exists.', { closeOnClick: false });
      return;
    }
    
    setIsAdding(true);
    dispatch(addContact({ name: name, number: number }))
      .then(() => {
        setName('');
        setNumber('');
        setIsAdding(false);
        toast.success('Contact added successfully!', { closeOnClick: false });
      })
      .catch(error => {
        toast.error('An error occurred while adding the contact.', { closeOnClick: false });
        setIsAdding(false);
      });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row">
        <div className="col">
          <div className="form-group mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group mb-3">
            <label htmlFor="number" className="form-label">Phone number</label>
            <input
              type="tel"
              id="number"
              name="number"
              value={number}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary" disabled={isAdding || isLoading}>
        {isAdding ? 'Adding...' : 'Add contact'}
      </button>
    </form>
  );
};


export default ContactForm;
