const { v4: uuidv4 } = require('uuid');
const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, './db/contacts.json');
// console.log(contactsPath);

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    console.table(JSON.parse(data));
    return JSON.parse(data);
  } catch (e) {
    throw e;
  }
};

const getContactById = async contactId => {
  try {
    const allContacts = await listContacts();
    const contactToFind = await allContacts.find(({ id }) => id === contactId);
    console.log(contactToFind);
    return contactToFind;
  } catch (e) {
    throw e;
  }
};

const removeContact = async contactId => {
  try {
    const allContacts = await listContacts();
    const visibleContacts = await allContacts.filter(
      ({ id }) => id !== contactId,
    );
    // console.log(visibleContacts);

    await fs.writeFile(
      contactsPath,
      JSON.stringify(visibleContacts, null, 2),
      'utf-8',
    );

    console.table(await listContacts());
  } catch (err) {
    console.log(err);
    return err;
  }
};

const addContact = async (name, email, phone) => {
  try {
    const allContacts = await listContacts();
    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };

    const updatedContactList = [...allContacts, newContact];

    await fs.writeFile(
      contactsPath,
      JSON.stringify(updatedContactList, null, 2),
      'utf-8',
    );
    console.table(await listContacts());
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
