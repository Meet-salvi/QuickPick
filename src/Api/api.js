import axios from "axios";

export async function productdata() {
    try {
        const response = await axios.get('https://dummyjson.com/products');
        return response.data.products;
    } catch (error) {
        throw error;
    }
}

// single prodcut
export async function singleproduct(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) throw new Error("Failed to fetch product");
    return response.json();
}

// 
export async function categorydata() {
    try {
        const response = await axios.get('https://dummyjson.com/products/categories');
        return response.data;
    } catch (error) {
        throw error;
    }
}

//
export async function userlogin() {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        return response.data.users;
    } catch (error) {
        throw error
    }
}

export async function searchproductdata() {
    try {
        const response = await axios.get('https://dummyjson.com/products/categories');
        return response.data;
    } catch (error) {
        throw error

    }
}