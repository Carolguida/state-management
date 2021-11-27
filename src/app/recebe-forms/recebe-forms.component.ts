import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormsFinalItems } from '../state-management/interface/forms-items.model';

@Component({
  selector: 'app-recebe-forms',
  templateUrl: './recebe-forms.component.html',
  styleUrls: ['./recebe-forms.component.css']
})
export class RecebeFormsComponent implements OnInit {
  
  result: FormsFinalItems;

  constructor(private _store: Store<{forms: FormsFinalItems}>, private router: Router) { }

  ngOnInit(): void {
    this.selectFormsItems();
  }
  
  private selectFormsItems(): void {
    this._store.select('forms').subscribe((res) => {
      this.result = res;      
    });
  }

  backToForm() {
    this.router.navigateByUrl('');
  }
}
