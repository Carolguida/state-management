import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { AddValue } from '../state-management/action/form.action';
import { FormsFinalItems } from '../state-management/interface/forms-items.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  form: FormGroup;
  labels = {
    nome: 'nome',
    sobrenome: 'sobrenome',
    idade: 'idade',
    estado_civil: 'estado civil',
  };

  items = [
    { label: 'casado', value: 'casado' },
    { label: 'solteiro', value: 'solteiro' },
    { label: 'união estável', value: 'união estável' },
    { label: 'divorciado', value: 'divorciado' },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _store: Store<{ forms: FormsFinalItems }>,
    private _state: State<{ forms: FormsFinalItems }>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      idade: ['', Validators.required],
      estado_civil: ['', Validators.required],
    });

    this.selectedFormsValues();
  }

  submitForm() {
    const { nome, sobrenome, idade, estado_civil } = this.form.controls;

    const body = [
      { label: 'nome', value: nome.value },
      { label: 'sobrenome', value: sobrenome.value },
      { label: 'idade', value: idade.value },
      { label: 'estado civil', value: estado_civil.value },
    ];

    this._store.dispatch(AddValue({ formsItemsValue: body }));

    this.router.navigateByUrl('recebe-forms');
  }

  private selectedFormsValues(): void {    
    const { forms } = this._state.value;

    if (forms.length > 0) {
      const hasNameFounded = forms.find(
        (value) => value.label === this.labels.nome
      );
      this.form.controls.nome.patchValue(hasNameFounded.value);

      const hasLastNameFounded = forms.find(
        (lastName) => lastName.label === this.labels.sobrenome
      );
      this.form.controls.sobrenome.patchValue(hasLastNameFounded.value);

      const hasAgeFounded = forms.find(
        (age) => age.label === this.labels.idade
      );
      this.form.controls.idade.patchValue(hasAgeFounded.value);

      const hasCivilStateFounded = forms.find(
        (civilState) => civilState.label === this.labels.estado_civil
      );
      const selectedCivilState = this.items.find(
        (selected) => selected.value === hasCivilStateFounded.value
      );
      this.form.controls.estado_civil.patchValue(selectedCivilState.value);
    }
  }
}
