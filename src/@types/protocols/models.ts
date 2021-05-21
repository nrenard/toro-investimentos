export interface IBaseModel {
  show: (key: string) => any
  delete: (key: string) => any
  update: (key: string, data: any) => any
  create: (data: any) => any
}
