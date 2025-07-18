import type { RootState } from 'app/store.interface';
import {useSelector } from 'react-redux';

export const useAppSelector = <T>(fn: (state: RootState) => T) => useSelector<RootState, T>(fn);
// export const useRootSelector : TypedUseSelectorHook<RootState> = selectorHook

// export const useSelector : TypedUseSelectorHook<RootState> = selectorHook