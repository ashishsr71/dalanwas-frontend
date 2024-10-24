import React, { useState } from 'react'

function DonationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        description: '',
        image: null,
      });
    
      const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
          setFormData({ ...formData, [name]: files[0] });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission logic here
      };
    
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="w-full max-w-lg bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">Donation Form</h2>
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
    
              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">father name</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your fathername"
                  required
                />
              </div>
    
              {/* Phone Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">Grandfathername</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your grandFathername"
                  required
                />
              </div>
    
              {/* Address Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your address"
                  required
                />
              </div>
    
              {/* Description Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="description">Amount</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter Amount"
                  required
                />
              </div>
    
              {/* Image Upload */}
              {/* <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="image">Upload Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full text-gray-700 px-2 py-1 border rounded-lg focus:outline-none focus:border-indigo-500"
                  required
                />
              </div> */}
    
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-200"
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      );
    };

export default DonationForm