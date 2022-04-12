import { ProductType } from "../type/Product";
import instance from "./instance";

export const list = () => {
    const url = "/products";
    return instance.get(url);
}

export const remove = (id: string) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}

export const read = (id: string | undefined) => {
    const url = `/products/${id}`;
    return instance.get(url);
}

export const add = (product: ProductType) => {
    const url = "/products";
    return instance.post(url, product);
}

export const edit = (product: ProductType) => {
    const url = `/products/${product.desc}`;
    return instance.put(url, product);
}