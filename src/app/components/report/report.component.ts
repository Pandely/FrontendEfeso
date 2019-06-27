import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria';
import { DataApiService } from "src/app/services/data-api.service";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  
  categoriaArray: Categoria[] = [
    {id: 1, name:'Utiles Escolares'},
    {id: 2, name: 'Articulos Higiene'},
    {id: 3, name: 'Mercería'},
    ];

  publisherArray ;


  constructor(private dataApi: DataApiService) {}

  ngOnInit() {
    this.getListPublisher()
    }

  getListPublisher(){
    this.dataApi.getlAllPublisher().subscribe((publishers) => {
      console.log('-------------------------------------------------');
      console.log(publishers);
      console.log('-------------------------------------------------');
      publisherArray:publishers;
      console.log();
      console.log('-------------------------------------------------');
    });
  }

}
