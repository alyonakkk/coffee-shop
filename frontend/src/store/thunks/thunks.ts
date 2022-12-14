import { Dispatch } from "react";

import instance from "../../api/instance";
import { IBasketProductPOST } from "../../types/basketTypes";
import { IOrder } from "../../types/orderTypes";
import {
    addBasketProduct, addOrder, deleteBasketProduct,
    setBasketId,
    setBasketProducts,
    setBasketShop,
    setCategories, setOrders,
    setProduct,
    setShopList, updateBasketProduct
} from "../actions/actions";
import {
    IBasketDispatch,
    IBasketProductDispatch,
    ICategoryDispatch, 
    IDeleteProductInBasket,
    IOrderDispatch,
    IOrdersDispatch,
    IProductDispatch,
    IShopDispatch
} from "./types";

export function getShopList() {
    return async function (dispatch: Dispatch<IShopDispatch>) {
        await instance.get("/api/shop-list")
            .then((resp) => {
                const { status, data } = resp.data;
                
                if (status) dispatch(setShopList(data));
            });
    };
}

export function getShopCategories(shop: string) {
    return async function (dispatch: Dispatch<ICategoryDispatch>) {
        await instance.get(`/api/shop-list/${shop}`)
            .then((resp) => {
                const { status, data } = resp.data;
                
                if (status) dispatch(setCategories(data));
            });
    };
}

export function getProductInfo(shop: string, category: string, product: string) {
    return async function (dispatch: Dispatch<IProductDispatch>) {
        await instance
            .get(`/api/shop-list/${shop}/${category}/${product}`)
            .then((resp) => {
                const { status, data } = resp.data;
                
                if (status) dispatch(setProduct(data));
            });
    };
}

export function getBasket() {
    return async function (dispatch: Dispatch<IBasketDispatch>) {
        await instance
            .get("/api/basket")
            .then((resp) => {
                const { status, data } = resp.data;
                
                if (status) {
                    dispatch(setBasketId(data.id));
                    dispatch(setBasketShop(data.shop));
                    dispatch(setBasketProducts(data.products));   
                }
            })
            .catch(e => {
                console.log(e);
            });
    };
}

export function updateBasket(id: number, shop: string, product: IBasketProductPOST) {
    return async function (dispatch: Dispatch<IBasketDispatch>) {
        await instance
            .post("/api/basket/update", { id, shop, product })
            .then((resp) => {
                const { status, data } = resp.data;

                if (status) {
                    dispatch(setBasketShop(data.shop));
                    dispatch(setBasketProducts([data.product]));   
                }
            })
            .catch(e => {
                console.log(e);
            });
    };
}

export function addProductToBasket(id: number, shop: string, product: IBasketProductPOST) {
    return async function (dispatch: Dispatch<IBasketProductDispatch>) {
        await instance
            .post("/api/basket/add", { id, shop, product })
            .then((resp) => {
                const { status, data } = resp.data;

                if (status) {
                    dispatch(setBasketId(data.id));
                    dispatch(setBasketShop(data.shop));
                    dispatch(addBasketProduct(data.product));   
                }
            })
            .catch(e => {
                console.log(e);
            });
    };
}

export function deleteAllBasketProducts() {
    return async function (dispatch: Dispatch<IBasketDispatch>) {
        await instance
            .get("/api/basket/delete-all")
            .then((resp) => {
                const { status } = resp.data;

                if (status) dispatch(setBasketProducts([]));
            })
            .catch(e => {
                console.log(e);
            });
    };
}

export function deleteProductInBasket(basketProductId: number) {
    return async function (dispatch: Dispatch<IDeleteProductInBasket>) {
        await instance
            .post("/api/basket/delete", { basketProductId })
            .then((resp) => {
                const { status, data: id } = resp.data;

                if (status) dispatch(deleteBasketProduct(id));
            })
            .catch(e => {
                console.log(e);
            });
    };
}

export function incProductBasket(basketProductId: number) {
    return async function (dispatch: Dispatch<IBasketProductDispatch>) {
        await instance
            .post("/api/basket/inc", { basketProductId })
            .then((resp) => {
                const { status, data } = resp.data;

                if (status) dispatch(updateBasketProduct(data));
            })
            .catch(e => {
                console.log(e);
            });
    };
}

export function decProductInBasket(basketProductId: number) {
    return async function (dispatch: Dispatch<IBasketProductDispatch>) {
        await instance
            .post("/api/basket/dec", { basketProductId })
            .then((resp) => {
                const { status, data } = resp.data;

                if (status) dispatch(updateBasketProduct(data));
            })
            .catch(e => {
                console.log(e);
            });
    };
}

export function getOrders() {
    return async function (dispatch: Dispatch<IOrdersDispatch>) {
        await instance
            .get("/api/order")
            .then((resp) => {
                const { status, data } = resp.data;

                if (status) dispatch(setOrders(data));
            })
            .catch(e => {
                console.log(e);
            });
    };
}

export function sendOrder(order: IOrder) {
    return async function (dispatch: Dispatch<IOrderDispatch>) {
        await instance
            .post("/api/order", order)
            .then((resp) => {
                const { status, data } = resp.data;

                if (status) {
                    dispatch(addOrder(data));
                    dispatch(setBasketProducts([]));
                }
            })
            .catch(e => {
                console.log(e);
            });
    };
}