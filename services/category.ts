import {data} from '../data';


const getCategoryById = (id: number) => {
    return data.categories.find((item) => item.id === id);
}

const getAllCategories = () => {
    return data.categories;
}