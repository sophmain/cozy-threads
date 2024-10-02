// utils/productService.js

export async function fetchAllProducts() {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
