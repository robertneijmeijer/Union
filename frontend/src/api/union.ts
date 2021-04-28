import ApiBase from "@/api/api-base";

export default class UnionApi extends ApiBase {
  public static postUnion = (data: any): Promise<any> => {
    return UnionApi.requestPost("unions", { data: data })
      .then(response => response)
      .catch(error => error);
  };
}
