import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contacts] = useState(initialContacts);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchBox value={searchTerm} onChange={handleSearchChange} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
