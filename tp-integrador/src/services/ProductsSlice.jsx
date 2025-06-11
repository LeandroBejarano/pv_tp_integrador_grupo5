import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    return products;
})

const productsSlice = createSlice({
    name: "products",
    initialState: {
        lista: [],
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
        },
        editarProducto: (state, action) => {
            const productoActualizado = action.payload;
            const index = state.lista.findIndex(p => p.id === productoActualizado.id);
            if (index !== -1) {
                state.lista[index] = productoActualizado;
            }
        },
        agregarProducto: (state, action) => {
            state.lista.push(action.payload);
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts .pending, state => {
                state.status = "loading";
            })
            .addCase(fetchProducts .fulfilled, (state, action) => {
                state.lista = action.payload;
                state.status = "succeeded";
            })
            .addCase(fetchProducts .rejected, state => {
                state.status = "failed";
            });
    },
})

export default productsSlice.reducer