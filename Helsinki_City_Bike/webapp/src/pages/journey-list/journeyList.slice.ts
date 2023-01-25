import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { ListParams, ListResponse, PaginationParams, Journey } from '../../models';

export interface SudentState {
    loading?: boolean;
    list: Journey[];
    filter: ListParams;
    pagination: PaginationParams;
}

