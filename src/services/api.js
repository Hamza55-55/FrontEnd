import axios from "axios";

const url = "https://salmic-home-decor.onrender.com";
// const url = "http://localhost:5000";

export const addcustomer= async(customerInfo) => {
  console.log(customerInfo);
  return await axios.post(`${url}/signup`,customerInfo);
};

export const getcustomer = async (email, password) => {
  return await axios.get(`${url}/login?email=${email}&password=${password}`);
};

// add data by admin api

export const addProduct = async (data) => {
  try {
    const response = await axios.post(`${url}/addproduct`, data);
    if (response.status === 201) {
      console.log('Product added successfully!');
    }
  } catch (error) {
    console.error('Failed to add product:');
  }
};

export const getAllProducts = async (data) => {
  try {
    return await axios.get(`${url}/products`);
    
  } catch (error) {
    console.error('Failed to list products:');
  }
};

export const getAllCategories = async () => {
  try {
    return await axios.get(`${url}/categories`);
  } catch (error) {
    console.error('Failed to list categories:');
  }
};

export const addCategory = async (catogery) => {
  try {
    console.log('cat ', catogery)
    const addcat = await axios.post(`${url}/addcategory`, catogery);
    if (addcat.status === 201) {
      console.log('Category added successfully!');
    }
  } catch (error) {
    console.error('Failed to add Category:');
  }
};

export const deleteProduct = async (product) => {
  try {
    console.log('cat ', product)
    const addcat = await axios.post(`${url}/delete/product`, product);
    if (addcat.status === 201) {
      console.log('Product deleted successfully!');
    }
  } catch (error) {
    console.error('Failed to detete product:');
  }
};
export const deleteCategory = async (category) => {
  try {
    console.log('cat ', category)
    const addcat = await axios.post(`${url}/delete/category`, category);
    if (addcat.status === 201) {
      console.log('category deleted successfully!');
    }
  } catch (error) {
    console.error('Failed to detete category:');
  }
};

