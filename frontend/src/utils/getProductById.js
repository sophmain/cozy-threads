export async function getProductInfo(id) {
    try {
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch product with ID ${id}`);
        }
        const product = await response.json();
        return product;
    } catch (err) {
        console.error(err.message);
        throw err;  // Re-throw the error so it can be handled where the function is called
    }
}
