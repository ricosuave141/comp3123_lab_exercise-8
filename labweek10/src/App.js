import { useState } from 'react';
import './App.css';

const provinces = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Nova Scotia',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
];
const emptyForm = {
  email: '',
  fullName: '',
  address: '',
  address2: '',
  city: '',
  province: '',
  postalCode: '',
  agree: false,
};
function App() {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(null);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // stops page from reloading
    setSubmitted(form);
  };
  return (
      <div className="container">
        <h1>Data Entry Form</h1>
        <p className="student">Aaron Balayo – 101575606</p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="Enter email"
                     value={form.email} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="fullName">Name</label>
              <input id="fullName" name="fullName" type="text" placeholder="Full Name"
                     value={form.fullName} onChange={handleChange} />
            </div>
          </div>
          <div className="field">
            <label htmlFor="address">Address</label>
            <input id="address" name="address" type="text" placeholder="1234 Main St"
                   value={form.address} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="address2">Address 2</label>
            <input id="address2" name="address2" type="text" placeholder="Apartment, studio, or floor"
                   value={form.address2} onChange={handleChange} />
          </div>
          <div className="row">
            <div className="field">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text"
                     value={form.city} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="province">Province</label>
              <select id="province" name="province" value={form.province} onChange={handleChange}>
                <option value="">Choose...</option>
                {provinces.map((p) => (
                    <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="postalCode">Postal Code</label>
              <input id="postalCode" name="postalCode" type="text"
                     value={form.postalCode} onChange={handleChange} />
            </div>
          </div>
          <div className="check">
            <input id="agree" name="agree" type="checkbox"
                   checked={form.agree} onChange={handleChange} />
            <label htmlFor="agree">Agree Terms &amp; Condition?</label>
          </div>
          <button type="submit">Submit</button>
        </form>
        {submitted && (
            <table className="output">
              <tbody>
              <tr><th>Email:</th><td>{submitted.email}</td></tr>
              <tr><th>Full Name:</th><td>{submitted.fullName}</td></tr>
              <tr><th>Address:</th><td>{submitted.address} {submitted.address2}</td></tr>
              <tr><th>City:</th><td>{submitted.city}</td></tr>
              <tr><th>Province:</th><td>{submitted.province}</td></tr>
              <tr><th>Postal Code:</th><td>{submitted.postalCode}</td></tr>
              </tbody>
            </table>
        )}
      </div>
  );
}
export default App;