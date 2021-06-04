import ApiBase from "@/api/api-base";
import { AxiosResponse } from "axios";

export type UnionType = {
  name: string;
  description: string;
  members_can_invite: boolean;
  icon?: string;
  banner?: string;
};

export type UnionImagesType = {
  id: string;
  banner: string;
  icon: string;
};

export default class UnionApi extends ApiBase {
  public static postUnion = (data: any): Promise<any> => {
    return UnionApi.requestPost("unions", { data }).then(response => response);
  };

  public static getUnion = (
    name: string
  ): Promise<AxiosResponse<UnionType>> => {
    return UnionApi.requestGet<UnionType>("unions", name);
  };

  public static getUnions = (): Promise<AxiosResponse<UnionType>> => {
    return UnionApi.requestGetAll<UnionType>("unions/overview");
  };

  public static postUnionImages = (data: any): Promise<any> => {
    return UnionApi.requestPost("unions/images/", { data: data.data,
      headers: { 'Content-Type' :
            'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' }})
        .then(response => response);
  };

  public static getUnionImages = (
    name: string
  ): Promise<AxiosResponse<UnionImagesType>> => {
    return UnionApi.requestGetUnionImages<UnionImagesType>("unions/images/", name);
  };

}
