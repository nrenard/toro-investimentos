export interface IHttpResponse {
  statusCode: number
  body: any
}

export type IHelperReponse = (data: IHttpResponse) => any
