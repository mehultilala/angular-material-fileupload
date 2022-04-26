import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface IInput {
  httpUrl: string;
  httpRequestHeaders:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  httpRequestParams:
    | HttpParams
    | {
        [param: string]: string | string[];
      };

  fileAlias: string;
  requestBody: any;
}

export interface IUploadProgress {
  isLoading?: boolean;
  progressPercentage?: number;
  loaded: number;
  total: number;
}
