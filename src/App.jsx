import { useState } from 'react'
import { BusinessCard } from './Component/BusinessCard'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    interest: "",
  });

  const [cardData, setCardData] = useState([]); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardData([...cardData, formData]); 
    setFormData({
      name: "",
      description: "",
      interest: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          value={formData.name}
          name="name"
          type="text"
          placeholder="Enter User Name"
        /> <br /><br />
        <input
          onChange={handleInputChange}
          value={formData.description}
          name="description"
          type="text"
          placeholder="Enter your Description"
        /> <br /><br />
        <input
          onChange={handleInputChange}
          value={formData.interest}
          name="interest"
          type="text"
          placeholder="Enter your Interest"
        /> <br /><br />
        <button type="submit">Submit</button>
      </form>
      {cardData.map((data, index) => (
        <div key={index}>
          <BusinessCard card={data} />
        </div>
      ))}
    </div>
  );
}

export default App;
