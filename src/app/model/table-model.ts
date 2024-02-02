export interface TableData{
    id:string,
    name:string,
    description:string,
    price:string,
    category:string,
    sales:string
  }

// TODO - Add no planejamento da aula
export interface ColumnConfig{
  title:string,
  field:string,
  type:FieldType,
  resource:any | any[],
  value:any
}

// TODO - Add no planejamento da aula
export enum FieldType{
  TEXT = 'text',
  NUMBER = 'number',
  DATE = 'date',
  SELECT = 'select'
}
