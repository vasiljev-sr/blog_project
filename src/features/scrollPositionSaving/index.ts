export {
  scrollSavingSliceReducer,
  scrollSavingSliceActions,
} from './model/slice/scrollSavingSlice';
export type { ScrollSavingSchema } from './model/types/scrollSavingSchema';

export { getScrollByPath } from 'features/scrollPositionSaving/model/selectors/getScrollPositions';
