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
import { BaseItemDto } from '../models';
// @ts-ignore
import { BaseItemDtoQueryResult } from '../models';
// @ts-ignore
import { ImageType } from '../models';
// @ts-ignore
import { ItemFilter } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
/**
 * PersonsApi - axios parameter creator
 * @export
 */
export const PersonsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get person by name.
         * @param {string} name Person name.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPerson: async (name: string, userId?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling getPerson.');
            }
            const localVarPath = `/Persons/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
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
        /**
         * 
         * @summary Gets all persons from a given item, folder, or the entire library.
         * @param {number} [minCommunityRating] Optional filter by minimum community rating.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] The search term.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {string} [fields] Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.
         * @param {string} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
         * @param {string} [includeItemTypes] Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.
         * @param {Array<ItemFilter>} [filters] Optional. Specify additional filters to apply. This allows multiple, comma delimited. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
         * @param {string} [mediaTypes] Optional filter by MediaType. Allows multiple, comma delimited.
         * @param {string} [genres] Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.
         * @param {string} [genreIds] Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.
         * @param {string} [officialRatings] Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.
         * @param {string} [tags] Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.
         * @param {string} [years] Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.
         * @param {boolean} [enableUserData] Optional, include user data.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [person] Optional. If specified, results will be filtered to include only those containing the specified person.
         * @param {string} [personIds] Optional. If specified, results will be filtered to include only those containing the specified person id.
         * @param {string} [personTypes] Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.
         * @param {string} [studios] Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.
         * @param {string} [studioIds] Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.
         * @param {string} [userId] User id.
         * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
         * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
         * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {boolean} [enableTotalRecordCount] Optional. Include total record count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPersons: async (minCommunityRating?: number, startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: string, excludeItemTypes?: string, includeItemTypes?: string, filters?: Array<ItemFilter>, isFavorite?: boolean, mediaTypes?: string, genres?: string, genreIds?: string, officialRatings?: string, tags?: string, years?: string, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, person?: string, personIds?: string, personTypes?: string, studios?: string, studioIds?: string, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, enableImages?: boolean, enableTotalRecordCount?: boolean, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/Persons`;
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

            if (minCommunityRating !== undefined) {
                localVarQueryParameter['minCommunityRating'] = minCommunityRating;
            }

            if (startIndex !== undefined) {
                localVarQueryParameter['startIndex'] = startIndex;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (searchTerm !== undefined) {
                localVarQueryParameter['searchTerm'] = searchTerm;
            }

            if (parentId !== undefined) {
                localVarQueryParameter['parentId'] = parentId;
            }

            if (fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            if (excludeItemTypes !== undefined) {
                localVarQueryParameter['excludeItemTypes'] = excludeItemTypes;
            }

            if (includeItemTypes !== undefined) {
                localVarQueryParameter['includeItemTypes'] = includeItemTypes;
            }

            if (filters) {
                localVarQueryParameter['filters'] = filters;
            }

            if (isFavorite !== undefined) {
                localVarQueryParameter['isFavorite'] = isFavorite;
            }

            if (mediaTypes !== undefined) {
                localVarQueryParameter['mediaTypes'] = mediaTypes;
            }

            if (genres !== undefined) {
                localVarQueryParameter['genres'] = genres;
            }

            if (genreIds !== undefined) {
                localVarQueryParameter['genreIds'] = genreIds;
            }

            if (officialRatings !== undefined) {
                localVarQueryParameter['officialRatings'] = officialRatings;
            }

            if (tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            if (years !== undefined) {
                localVarQueryParameter['years'] = years;
            }

            if (enableUserData !== undefined) {
                localVarQueryParameter['enableUserData'] = enableUserData;
            }

            if (imageTypeLimit !== undefined) {
                localVarQueryParameter['imageTypeLimit'] = imageTypeLimit;
            }

            if (enableImageTypes) {
                localVarQueryParameter['enableImageTypes'] = enableImageTypes;
            }

            if (person !== undefined) {
                localVarQueryParameter['person'] = person;
            }

            if (personIds !== undefined) {
                localVarQueryParameter['personIds'] = personIds;
            }

            if (personTypes !== undefined) {
                localVarQueryParameter['personTypes'] = personTypes;
            }

            if (studios !== undefined) {
                localVarQueryParameter['studios'] = studios;
            }

            if (studioIds !== undefined) {
                localVarQueryParameter['studioIds'] = studioIds;
            }

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (nameStartsWithOrGreater !== undefined) {
                localVarQueryParameter['nameStartsWithOrGreater'] = nameStartsWithOrGreater;
            }

            if (nameStartsWith !== undefined) {
                localVarQueryParameter['nameStartsWith'] = nameStartsWith;
            }

            if (nameLessThan !== undefined) {
                localVarQueryParameter['nameLessThan'] = nameLessThan;
            }

            if (enableImages !== undefined) {
                localVarQueryParameter['enableImages'] = enableImages;
            }

            if (enableTotalRecordCount !== undefined) {
                localVarQueryParameter['enableTotalRecordCount'] = enableTotalRecordCount;
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
 * PersonsApi - functional programming interface
 * @export
 */
export const PersonsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get person by name.
         * @param {string} name Person name.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPerson(name: string, userId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDto>> {
            const localVarAxiosArgs = await PersonsApiAxiosParamCreator(configuration).getPerson(name, userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Gets all persons from a given item, folder, or the entire library.
         * @param {number} [minCommunityRating] Optional filter by minimum community rating.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] The search term.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {string} [fields] Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.
         * @param {string} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
         * @param {string} [includeItemTypes] Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.
         * @param {Array<ItemFilter>} [filters] Optional. Specify additional filters to apply. This allows multiple, comma delimited. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
         * @param {string} [mediaTypes] Optional filter by MediaType. Allows multiple, comma delimited.
         * @param {string} [genres] Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.
         * @param {string} [genreIds] Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.
         * @param {string} [officialRatings] Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.
         * @param {string} [tags] Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.
         * @param {string} [years] Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.
         * @param {boolean} [enableUserData] Optional, include user data.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [person] Optional. If specified, results will be filtered to include only those containing the specified person.
         * @param {string} [personIds] Optional. If specified, results will be filtered to include only those containing the specified person id.
         * @param {string} [personTypes] Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.
         * @param {string} [studios] Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.
         * @param {string} [studioIds] Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.
         * @param {string} [userId] User id.
         * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
         * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
         * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {boolean} [enableTotalRecordCount] Optional. Include total record count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPersons(minCommunityRating?: number, startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: string, excludeItemTypes?: string, includeItemTypes?: string, filters?: Array<ItemFilter>, isFavorite?: boolean, mediaTypes?: string, genres?: string, genreIds?: string, officialRatings?: string, tags?: string, years?: string, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, person?: string, personIds?: string, personTypes?: string, studios?: string, studioIds?: string, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, enableImages?: boolean, enableTotalRecordCount?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseItemDtoQueryResult>> {
            const localVarAxiosArgs = await PersonsApiAxiosParamCreator(configuration).getPersons(minCommunityRating, startIndex, limit, searchTerm, parentId, fields, excludeItemTypes, includeItemTypes, filters, isFavorite, mediaTypes, genres, genreIds, officialRatings, tags, years, enableUserData, imageTypeLimit, enableImageTypes, person, personIds, personTypes, studios, studioIds, userId, nameStartsWithOrGreater, nameStartsWith, nameLessThan, enableImages, enableTotalRecordCount, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PersonsApi - factory interface
 * @export
 */
export const PersonsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Get person by name.
         * @param {string} name Person name.
         * @param {string} [userId] Optional. Filter by user id, and attach user data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPerson(name: string, userId?: string, options?: any): AxiosPromise<BaseItemDto> {
            return PersonsApiFp(configuration).getPerson(name, userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Gets all persons from a given item, folder, or the entire library.
         * @param {number} [minCommunityRating] Optional filter by minimum community rating.
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return.
         * @param {string} [searchTerm] The search term.
         * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root.
         * @param {string} [fields] Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.
         * @param {string} [excludeItemTypes] Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
         * @param {string} [includeItemTypes] Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.
         * @param {Array<ItemFilter>} [filters] Optional. Specify additional filters to apply. This allows multiple, comma delimited. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes.
         * @param {boolean} [isFavorite] Optional filter by items that are marked as favorite, or not.
         * @param {string} [mediaTypes] Optional filter by MediaType. Allows multiple, comma delimited.
         * @param {string} [genres] Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.
         * @param {string} [genreIds] Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.
         * @param {string} [officialRatings] Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.
         * @param {string} [tags] Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.
         * @param {string} [years] Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.
         * @param {boolean} [enableUserData] Optional, include user data.
         * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type.
         * @param {Array<ImageType>} [enableImageTypes] Optional. The image types to include in the output.
         * @param {string} [person] Optional. If specified, results will be filtered to include only those containing the specified person.
         * @param {string} [personIds] Optional. If specified, results will be filtered to include only those containing the specified person id.
         * @param {string} [personTypes] Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.
         * @param {string} [studios] Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.
         * @param {string} [studioIds] Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.
         * @param {string} [userId] User id.
         * @param {string} [nameStartsWithOrGreater] Optional filter by items whose name is sorted equally or greater than a given input string.
         * @param {string} [nameStartsWith] Optional filter by items whose name is sorted equally than a given input string.
         * @param {string} [nameLessThan] Optional filter by items whose name is equally or lesser than a given input string.
         * @param {boolean} [enableImages] Optional, include image information in output.
         * @param {boolean} [enableTotalRecordCount] Optional. Include total record count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPersons(minCommunityRating?: number, startIndex?: number, limit?: number, searchTerm?: string, parentId?: string, fields?: string, excludeItemTypes?: string, includeItemTypes?: string, filters?: Array<ItemFilter>, isFavorite?: boolean, mediaTypes?: string, genres?: string, genreIds?: string, officialRatings?: string, tags?: string, years?: string, enableUserData?: boolean, imageTypeLimit?: number, enableImageTypes?: Array<ImageType>, person?: string, personIds?: string, personTypes?: string, studios?: string, studioIds?: string, userId?: string, nameStartsWithOrGreater?: string, nameStartsWith?: string, nameLessThan?: string, enableImages?: boolean, enableTotalRecordCount?: boolean, options?: any): AxiosPromise<BaseItemDtoQueryResult> {
            return PersonsApiFp(configuration).getPersons(minCommunityRating, startIndex, limit, searchTerm, parentId, fields, excludeItemTypes, includeItemTypes, filters, isFavorite, mediaTypes, genres, genreIds, officialRatings, tags, years, enableUserData, imageTypeLimit, enableImageTypes, person, personIds, personTypes, studios, studioIds, userId, nameStartsWithOrGreater, nameStartsWith, nameLessThan, enableImages, enableTotalRecordCount, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getPerson operation in PersonsApi.
 * @export
 * @interface PersonsApiGetPersonRequest
 */
export interface PersonsApiGetPersonRequest {
    /**
     * Person name.
     * @type {string}
     * @memberof PersonsApiGetPerson
     */
    readonly name: string

    /**
     * Optional. Filter by user id, and attach user data.
     * @type {string}
     * @memberof PersonsApiGetPerson
     */
    readonly userId?: string
}

/**
 * Request parameters for getPersons operation in PersonsApi.
 * @export
 * @interface PersonsApiGetPersonsRequest
 */
export interface PersonsApiGetPersonsRequest {
    /**
     * Optional filter by minimum community rating.
     * @type {number}
     * @memberof PersonsApiGetPersons
     */
    readonly minCommunityRating?: number

    /**
     * Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @type {number}
     * @memberof PersonsApiGetPersons
     */
    readonly startIndex?: number

    /**
     * Optional. The maximum number of records to return.
     * @type {number}
     * @memberof PersonsApiGetPersons
     */
    readonly limit?: number

    /**
     * The search term.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly searchTerm?: string

    /**
     * Specify this to localize the search to a specific item or folder. Omit to use the root.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly parentId?: string

    /**
     * Optional. Specify additional fields of information to return in the output. This allows multiple, comma delimited. Options: Budget, Chapters, DateCreated, Genres, HomePageUrl, IndexOptions, MediaStreams, Overview, ParentId, Path, People, ProviderIds, PrimaryImageAspectRatio, Revenue, SortName, Studios, Taglines.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly fields?: string

    /**
     * Optional. If specified, results will be filtered out based on item type. This allows multiple, comma delimited.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly excludeItemTypes?: string

    /**
     * Optional. If specified, results will be filtered in based on item type. This allows multiple, comma delimited.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly includeItemTypes?: string

    /**
     * Optional. Specify additional filters to apply. This allows multiple, comma delimited. Options: IsFolder, IsNotFolder, IsUnplayed, IsPlayed, IsFavorite, IsResumable, Likes, Dislikes.
     * @type {Array<ItemFilter>}
     * @memberof PersonsApiGetPersons
     */
    readonly filters?: Array<ItemFilter>

    /**
     * Optional filter by items that are marked as favorite, or not.
     * @type {boolean}
     * @memberof PersonsApiGetPersons
     */
    readonly isFavorite?: boolean

    /**
     * Optional filter by MediaType. Allows multiple, comma delimited.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly mediaTypes?: string

    /**
     * Optional. If specified, results will be filtered based on genre. This allows multiple, pipe delimited.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly genres?: string

    /**
     * Optional. If specified, results will be filtered based on genre id. This allows multiple, pipe delimited.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly genreIds?: string

    /**
     * Optional. If specified, results will be filtered based on OfficialRating. This allows multiple, pipe delimited.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly officialRatings?: string

    /**
     * Optional. If specified, results will be filtered based on tag. This allows multiple, pipe delimited.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly tags?: string

    /**
     * Optional. If specified, results will be filtered based on production year. This allows multiple, comma delimited.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly years?: string

    /**
     * Optional, include user data.
     * @type {boolean}
     * @memberof PersonsApiGetPersons
     */
    readonly enableUserData?: boolean

    /**
     * Optional, the max number of images to return, per image type.
     * @type {number}
     * @memberof PersonsApiGetPersons
     */
    readonly imageTypeLimit?: number

    /**
     * Optional. The image types to include in the output.
     * @type {Array<ImageType>}
     * @memberof PersonsApiGetPersons
     */
    readonly enableImageTypes?: Array<ImageType>

    /**
     * Optional. If specified, results will be filtered to include only those containing the specified person.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly person?: string

    /**
     * Optional. If specified, results will be filtered to include only those containing the specified person id.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly personIds?: string

    /**
     * Optional. If specified, along with Person, results will be filtered to include only those containing the specified person and PersonType. Allows multiple, comma-delimited.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly personTypes?: string

    /**
     * Optional. If specified, results will be filtered based on studio. This allows multiple, pipe delimited.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly studios?: string

    /**
     * Optional. If specified, results will be filtered based on studio id. This allows multiple, pipe delimited.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly studioIds?: string

    /**
     * User id.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly userId?: string

    /**
     * Optional filter by items whose name is sorted equally or greater than a given input string.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly nameStartsWithOrGreater?: string

    /**
     * Optional filter by items whose name is sorted equally than a given input string.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly nameStartsWith?: string

    /**
     * Optional filter by items whose name is equally or lesser than a given input string.
     * @type {string}
     * @memberof PersonsApiGetPersons
     */
    readonly nameLessThan?: string

    /**
     * Optional, include image information in output.
     * @type {boolean}
     * @memberof PersonsApiGetPersons
     */
    readonly enableImages?: boolean

    /**
     * Optional. Include total record count.
     * @type {boolean}
     * @memberof PersonsApiGetPersons
     */
    readonly enableTotalRecordCount?: boolean
}

/**
 * PersonsApi - object-oriented interface
 * @export
 * @class PersonsApi
 * @extends {BaseAPI}
 */
export class PersonsApi extends BaseAPI {
    /**
     * 
     * @summary Get person by name.
     * @param {PersonsApiGetPersonRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonsApi
     */
    public getPerson(requestParameters: PersonsApiGetPersonRequest, options?: any) {
        return PersonsApiFp(this.configuration).getPerson(requestParameters.name, requestParameters.userId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Gets all persons from a given item, folder, or the entire library.
     * @param {PersonsApiGetPersonsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonsApi
     */
    public getPersons(requestParameters: PersonsApiGetPersonsRequest = {}, options?: any) {
        return PersonsApiFp(this.configuration).getPersons(requestParameters.minCommunityRating, requestParameters.startIndex, requestParameters.limit, requestParameters.searchTerm, requestParameters.parentId, requestParameters.fields, requestParameters.excludeItemTypes, requestParameters.includeItemTypes, requestParameters.filters, requestParameters.isFavorite, requestParameters.mediaTypes, requestParameters.genres, requestParameters.genreIds, requestParameters.officialRatings, requestParameters.tags, requestParameters.years, requestParameters.enableUserData, requestParameters.imageTypeLimit, requestParameters.enableImageTypes, requestParameters.person, requestParameters.personIds, requestParameters.personTypes, requestParameters.studios, requestParameters.studioIds, requestParameters.userId, requestParameters.nameStartsWithOrGreater, requestParameters.nameStartsWith, requestParameters.nameLessThan, requestParameters.enableImages, requestParameters.enableTotalRecordCount, options).then((request) => request(this.axios, this.basePath));
    }
}
