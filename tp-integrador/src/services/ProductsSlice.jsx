import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const LOCAL_STORAGE_KEY = "custom_products";

const localStorageLoad = () => {
    const guardados = localStorage.getItem(LOCAL_STORAGE_KEY);
    return guardados ? JSON.parse(guardados) : [];
};

const localStorageSave = (productos) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(productos));
};

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    return products;
})

const productsSlice = createSlice({
    name: "products",
    initialState: {
        lista: localStorageLoad(),
        favoritos: [],
        status: "idle",
    },
    reducers: {
        toggleFavorito: (state, action) => {
            const id = action.payload;
            state.favoritos = state.favoritos.includes(id)
                ? state.favoritos.filter(favId => favId !== id)
                : [...state.favoritos, id];
        },
        eliminarProducto: (state, action) => {
            const id = action.payload;
            state.lista = state.lista.filter(producto => producto.id !== id);
            state.favoritos = state.favoritos.filter(favId => favId !== id);
            localStorageSave(state.lista);

        },
        editarProducto: (state, action) => {
            const productoActualizado = action.payload;
            const index = state.lista.findIndex(p => p.id === productoActualizado.id);
            if (index !== -1) {
                state.lista[index] = productoActualizado;
                localStorageSave(state.lista);
            }
        },
        agregarProducto: (state, action) => {
            state.lista.push(action.payload);
            localStorageSave(state.lista)
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                const local = localStorageLoad();
                const localId = new Set(local.map(p => p.id));
                const merged = [
                    ...action.payload.filter(p => !localId.has(p.id)),
                    ...local
                ];
                state.lista = merged;
                state.status = "succeeded";
            })
            .addCase(fetchProducts.rejected, state => {
                state.status = "failed";
            });
    },
});

export const {
    toggleFavorito,
    eliminarProducto,
    editarProducto,
    agregarProducto,
} = productsSlice.actions;

export default productsSlice.reducer;