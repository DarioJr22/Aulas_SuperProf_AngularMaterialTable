import { Component, OnInit } from '@angular/core';
import { TableEditService } from './tableEdit.service';
import { ColumnConfig, FieldType, TableData } from 'src/app/model/table-model';

@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.scss']
})
export class TableEditComponent implements OnInit{
  filter:string = ''
  filteredData:TableData[] = []
  tableData:TableData[] = []
  // TODO - Add no planejamento da aula
    // Explicar - Mudança de uma lista strings para uma lista de objetos
    columns:ColumnConfig[] = [
    {
      title:'ID',
      field:'id',
      type:FieldType.TEXT,
      resource:'',
      value:''
    },
    {
      title:'Nome',
      field:'name',
      type:FieldType.TEXT,
      resource:'',
      value:''
    },
    {
      title:'Descricão',
      field:'description',
      type:FieldType.TEXT,
      resource:'',
      value:''
    },
    {
      title:'Preço',
      field:'price',
      type:FieldType.TEXT,
      resource:'',
      value:''
    },
    {
      title:'Categória',
      field:'category',
      type:FieldType.SELECT,
      resource: [
        'Computadores',
        'Celulares',
        'Tablets',
        'Periféricos',
        'Acessórios'
      ],
      value:'Computadores'
    },
    {
      title:'Vendas',
      field:'sales',
      type:FieldType.TEXT,
      resource:'',
      value:''
    }

  ]



  ngOnInit(): void {
    this.getTableData()
  }



  //Converção para recepcionar os dados na tabela
  recieveData(data:any[]){

  }

  constructor(private tableService:TableEditService) {

  }

  getTableData(){
    this.tableService.getProducts().subscribe({
      next:(data)=>{
        this.tableData = [...data]
        console.log(this.tableData);

        this.filteredData = this.tableData
        }
      }
    )
  }

  addColumn(){
    //TODO - Add no planejamento da aula
    //
    this.columns.push()
  }

  removeColumn(){
    this.columns.pop()
  }

  aplicarFiltro(event:string){
//[ a b c ].filter(x => x == a)
//"ABC".toLowerCase() = "abc"
    this.filteredData = this.tableData.filter(
      x => x.name.toLowerCase().includes(event.toLowerCase()) ||
      x.description.toLowerCase().includes(event.toLowerCase()) ||
      x.id.toLowerCase().includes(event.toLowerCase()) ||
      x.category.toLowerCase().includes(event.toLowerCase()) ||
      x.price.toLowerCase().includes(event.toLowerCase()) ||
      x.sales.toLowerCase().includes(event.toLowerCase())
    )
  }


  //TODO - Add no planejamento da aula
  getColumName(){
    return this.columns.map(i => i.field)
  }

}
