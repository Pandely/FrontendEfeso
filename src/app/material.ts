import {MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatToolbarModule, MatCardModule, MatListModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, 
            MatCheckboxModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatMenuModule,
            MatToolbarModule,
            MatCardModule,
            MatListModule
            ],

  exports: [MatButtonModule,
            MatCheckboxModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatMenuModule,
            MatToolbarModule,
            MatCardModule,
            MatListModule
          ],
})
export class MaterialModule { }