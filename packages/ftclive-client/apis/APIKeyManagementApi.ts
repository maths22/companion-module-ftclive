// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.js';
import {Configuration} from '../configuration.js';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.js';
import  FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer.js';
import {ApiException} from './exception.js';
import {canConsumeForm, isCodeInRange} from '../util.js';
import {SecurityAuthentication} from '../auth/auth.js';


import { ApiV1Error } from '../models/ApiV1Error.js';
import { ApiV1Key } from '../models/ApiV1Key.js';
import { ApiV1KeyStatus } from '../models/ApiV1KeyStatus.js';

/**
 * no description
 */
export class APIKeyManagementApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This will immediately return the active status of the specified key.
     * Checks the status of the key requested
     * @param authorization The key to check the status of.
     */
    public async keyCheck(authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("APIKeyManagementApi", "keyCheck", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/keycheck/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Must include the name of the application making the request by specifying the `name` param in the POST. This name will be displayed to the scorekeeper to validate the key. This will immediately return a key, but the key will not be valid until the scorekeeper approves the request. The status of the key can be checked with /apiv1/keycheck/. Once receiving the key, the application can pass the key as the Authorization header of the HTTP requests. Once the key is active, the rate limit will be increased for the specified key. 
     * Requests a key to be granted for an increase rate limit.
     * @param name The name of the program requesting the key.
     */
    public async keyRequest(name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("APIKeyManagementApi", "keyRequest", "name");
        }


        // Path Params
        const localVarPath = '/api/v1/keyrequest/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This request will return once the scorekeeper has activated the specified key, or immediately if the key is already active.
     * Waits until the specified key becomes active.
     * @param authorization The key to wait until it is valid for.
     */
    public async keyWait(authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("APIKeyManagementApi", "keyWait", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/keywait/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class APIKeyManagementApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to keyCheck
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async keyCheckWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1KeyStatus >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1KeyStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1KeyStatus", ""
            ) as ApiV1KeyStatus;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiV1Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Error", ""
            ) as ApiV1Error;
            throw new ApiException<ApiV1Error>(response.httpStatusCode, "Key not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiV1KeyStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1KeyStatus", ""
            ) as ApiV1KeyStatus;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to keyRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async keyRequestWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1Key >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1Key = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Key", ""
            ) as ApiV1Key;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ApiV1Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Error", ""
            ) as ApiV1Error;
            throw new ApiException<ApiV1Error>(response.httpStatusCode, "Must include &#x60;name&#x60; as a parameter to be displayed to the scorekeeper", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiV1Key = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Key", ""
            ) as ApiV1Key;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to keyWait
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async keyWaitWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1KeyStatus >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1KeyStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1KeyStatus", ""
            ) as ApiV1KeyStatus;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiV1Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Error", ""
            ) as ApiV1Error;
            throw new ApiException<ApiV1Error>(response.httpStatusCode, "Key not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiV1KeyStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1KeyStatus", ""
            ) as ApiV1KeyStatus;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
