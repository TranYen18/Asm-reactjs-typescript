import { ProductType } from "../type/Product";
import instance from "./instance";
import { isAuthenticate } from "../utils/localStorage";
// const { token, user } = isAuthenticate();

export const list = () => {
    const url = `/products`;
    return instance.get(url);
}
export const add = (product: ProductType, user:any, token: any) => {
    const url = `/products/${user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const remove = (id: number, user:any, token: any) => {
    const url = `/products/${id}/${user._id}`;
    return instance.delete(url, {
        headers:{
             "Authorization": `Bearer ${token}`
        }
    });
}
export const read = (id: string | undefined) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const update = (product: ProductType, user:any, token: any) => {
    const url = `/products/${product._id}/${user._id}`;
    return instance.put(url, product,{
        headers:{
            "Authorization": `Bearer ${token}`
       }
    });
}