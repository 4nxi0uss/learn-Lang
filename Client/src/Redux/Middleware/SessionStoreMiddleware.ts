import type { PayloadAction } from "@reduxjs/toolkit";

export const sessionStoreMiddleware = (store: any) => (next: any) => (action: PayloadAction) => {
    const result = next(action);

    if (action.type === ('category/categoryName')) {
        sessionStorage.setItem('category', store.getState().category.cat)
    }

    return result;
}