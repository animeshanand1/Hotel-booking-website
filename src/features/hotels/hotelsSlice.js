import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchHotels } from "../../services/hotelService";

const initialState = {
    hotels: [],
    status: 'idle',
    error: null,
    filters: {
        priceRange: null,
        rating: null,
        amenities: [],
    }
}

export const fetchHotelsThunk = createAsyncThunk(
    'hotels/fetchHotels',
    async (params, { rejectWithValue }) => {
        try {
            const response = await fetchHotels(params);
            return response;
        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
)

const hotelsSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },

        clearFilters: (state) => {
            state.filters = initialState.filters
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHotelsThunk.pending, (state) => {
            state.status = 'loading'
        })
            .addCase(fetchHotelsThunk.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.hotels = action.payload

            })
            .addCase(fetchHotelsThunk.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }

})

export const {setFilters,clearFilters}=hotelsSlice.actions
export default hotelsSlice.reducer

// Selectors
export const selectAllHotels = (state) => state.hotels.hotels;
export const selectHotelsStatus = (state) => state.hotels.status;
export const selectHotelsError = (state) => state.hotels.error;
export const selectFilters = (state) => state.hotels.filters;