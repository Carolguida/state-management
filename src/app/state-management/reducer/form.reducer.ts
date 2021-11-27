import { Action, createReducer, on } from '@ngrx/store';
import { AddValue } from '../action/form.action';
import { FormsFinalItems } from '../interface/forms-items.model';

export const initialState: FormsFinalItems = {
  label: '',
  value: '',
};

const _AddValuesReducer = createReducer(
  initialState,
  on(
    AddValue,
    (state, action) =>
      (state = action['formsItemsValue']
        ? Object.assign(action['formsItemsValue'])
        : state)
  )
);

export function AddValuesReducer(
  state: FormsFinalItems | undefined,
  action: Action
) {
  return _AddValuesReducer(state, action);
}
