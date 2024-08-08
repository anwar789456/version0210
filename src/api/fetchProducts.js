import axios from 'axios';

export const fetchProducts = async () => {
    try {
        const response = await axios.get('http://localhost:3001/get-products');
        const usersData = response.data.map((prod, index) => ({
            id: prod.id,
            title: prod.title,
            image1: prod.image1,
            image2: prod.image2,
            description: prod.description,
            price: prod.price,
            category: prod.category
        }));
        console.log("sup");
        return usersData;

    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};