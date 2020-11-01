/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ActivityLogEntryQueryResult } from '../models';
/**
 * ActivityLogApi - axios parameter creator
 * @export
 */
export const ActivityLogApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets activity log entries.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [minDate] Optional. The minimum date. Format &#x3D; ISO.
         * @param {boolean} [hasUserId] Optional. Filter log entries if it has user id, or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogEntries: async (startIndex?: number, limit?: number, minDate?: string, hasUserId?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/System/ActivityLog/Entries`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication CustomAuthentication required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Emby-Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Emby-Authorization"] = localVarApiKeyValue;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (minDate !== undefined) {
                localVarQueryParameter['minDate'] = (minDate as any instanceof Date) ?
                    (minDate as any).toISOString() :
                    minDate;
            }

            if (hasUserId !== undefined) {
                localVarQueryParameter['hasUserId'] = hasUserId;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ActivityLogApi - functional programming interface
 * @export
 */
export const ActivityLogApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets activity log entries.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [minDate] Optional. The minimum date. Format &#x3D; ISO.
         * @param {boolean} [hasUserId] Optional. Filter log entries if it has user id, or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLogEntries(startIndex?: number, limit?: number, minDate?: string, hasUserId?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ActivityLogEntryQueryResult>> {
            const localVarAxiosArgs = await ActivityLogApiAxiosParamCreator(configuration).getLogEntries(startIndex, limit, minDate, hasUserId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ActivityLogApi - factory interface
 * @export
 */
export const ActivityLogApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Gets activity log entries.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [minDate] Optional. The minimum date. Format &#x3D; ISO.
         * @param {boolean} [hasUserId] Optional. Filter log entries if it has user id, or not.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogEntries(startIndex?: number, limit?: number, minDate?: string, hasUserId?: boolean, options?: any): AxiosPromise<ActivityLogEntryQueryResult> {
            return ActivityLogApiFp(configuration).getLogEntries(startIndex, limit, minDate, hasUserId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getLogEntries operation in ActivityLogApi.
 * @export
 * @interface ActivityLogApiGetLogEntriesRequest
 */
export interface ActivityLogApiGetLogEntriesRequest {
    /**
     * Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @type {number}
     * @memberof ActivityLogApiGetLogEntries
     */
    readonly startIndex?: number

    /**
     * Optional. The maximum number of records to return.
     * @type {number}
     * @memberof ActivityLogApiGetLogEntries
     */
    readonly limit?: number

    /**
     * Optional. The minimum date. Format &#x3D; ISO.
     * @type {string}
     * @memberof ActivityLogApiGetLogEntries
     */
    readonly minDate?: string

    /**
     * Optional. Filter log entries if it has user id, or not.
     * @type {boolean}
     * @memberof ActivityLogApiGetLogEntries
     */
    readonly hasUserId?: boolean
}

/**
 * ActivityLogApi - object-oriented interface
 * @export
 * @class ActivityLogApi
 * @extends {BaseAPI}
 */
export class ActivityLogApi extends BaseAPI {
    /**
     * 
     * @summary Gets activity log entries.
     * @param {ActivityLogApiGetLogEntriesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivityLogApi
     */
    public getLogEntries(requestParameters: ActivityLogApiGetLogEntriesRequest = {}, options?: any) {
        return ActivityLogApiFp(this.configuration).getLogEntries(requestParameters.startIndex, requestParameters.limit, requestParameters.minDate, requestParameters.hasUserId, options).then((request) => request(this.axios, this.basePath));
    }
}
