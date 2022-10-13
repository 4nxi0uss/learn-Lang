import type { PayloadAction } from "@reduxjs/toolkit";

export const sessionStoreMiddleware = (store: any) => (next: any) => (action: PayloadAction) => {
    const result = next(action);

    if (action.type === ('category/categoryName')) {
        sessionStorage.setItem('category', store.getState().category.cat)
    }

    if (action.type === ('formInput/inputFormRowData')) {
        try {
            sessionStorage.setItem('addForm', JSON.stringify(store.getState().inputForm.inputFormData))
        } catch (error) {
            console.warn(error);
        }
    }

    return result;
}