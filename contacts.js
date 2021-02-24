const fs = require('fs');
const path = require('path');

const contactsPath = path.join(__dirname, './db/contacts.json');
console.log(contactsPath);

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    // console.log(data);
    console.table(JSON.parse(data));
    return JSON.parse(data);
  } catch (e) {
    throw e;
  }
};

// const listContacts = async () => {
//   // const allcontacts = fs.readFile(contactsPath, 'utf8');
//   return await fs.readFile(contactsPath, 'utf8', async (e, data) => {
//     try {
//       console.table(await JSON.parse(data));
//       return await JSON.parse(data);
//     } catch (e) {
//       throw e;
//     }
//   });
// };

listContacts();

// const getContactById = contactId => {
//   fs.readFile(contactsPath, 'utf8', (e, data) => {
//     if (e) {
//       throw e;
//     }
//     console.log(JSON.parse(data).find(({ id }) => id === contactId));
//   });
// };

// getContactById(1);

// const getContactById = async contactId => {
//   //   contactsPath.get('contact').find({ contactId }).value();
//   try {
//     await fs.readFile(contactsPath, 'utf8', (e, data) => {
//       // console.log(JSON.parse(data).map(({ id }) => id));
//       console.log(typeof data);
//     });
//   } catch (e) {
//     return e;
//   }
// };

// getContactById(1);

// const removeContact = async contactId => {
//   const allContacts = await listContacts();
//   console.log(111);
//   console.log(allContacts);
// };

// removeContact();

// const addContact = async (name, email, phone) => {
//   // ...твой код
// };

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
// };
