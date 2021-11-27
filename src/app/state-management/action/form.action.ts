import { createAction, props } from "@ngrx/store";
import { FormsFinalItems } from "../interface/forms-items.model";

export const AddValue = createAction(
    '[Forms Component], Add Value',
    props<{ formsItemsValue: FormsFinalItems[] }>(),
);