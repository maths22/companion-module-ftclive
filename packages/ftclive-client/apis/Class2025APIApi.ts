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


import { ApiSeasonSpecificMatchDetailed } from '../models/ApiSeasonSpecificMatchDetailed.js';
import { ApiV1Error } from '../models/ApiV1Error.js';
import { ApiV1FullSeasonSpecificEvent } from '../models/ApiV1FullSeasonSpecificEvent.js';

/**
 * no description
 */
export class Class2025APIApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * INTO THE DEEP game specific data.
     * Gets the match scoring details for an elims match
     * @param code The event code
     * @param name The match name
     */
    public async getElimsSeasonMatchDetails(code: string, name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("Class2025APIApi", "getElimsSeasonMatchDetails", "code");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("Class2025APIApi", "getElimsSeasonMatchDetails", "name");
        }


        // Path Params
        const localVarPath = '/api/2025/v2/events/{code}/elims/{name}/'
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This returns a complete list of the INTO THE DEEP specific scores for an event as would be gained by querying all of the separate API routes. This route is intended only to be queried once when a client loads for the purposes of caching the current state. The rate limit on this route and the <code>/api/v2/events/{code}/full/</code> is 4 requests every 30 minutes combined. The point is not for a client to query this route that frequently, but rather to provide some margin of error in case the client must reboot and refresh the cache. This endpoint cannot be hit while a match is in the RANDOMIZED state and will return HTTP <code>503</code> if so. The amount of data returned is very large, about 165kB for a 32 team event.
     * Gets Full INTO THE DEEP Specific Event Details
     * @param code The event code
     */
    public async getSeasonEventFull(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("Class2025APIApi", "getSeasonEventFull", "code");
        }


        // Path Params
        const localVarPath = '/api/2025/v1/events/{code}/full/'
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * INTO THE DEEP game specific data.
     * Gets the match scoring details.
     * @param code The event code
     * @param match The match number
     */
    public async getSeasonMatchDetails(code: string, match: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("Class2025APIApi", "getSeasonMatchDetails", "code");
        }


        // verify required parameter 'match' is not null or undefined
        if (match === null || match === undefined) {
            throw new RequiredError("Class2025APIApi", "getSeasonMatchDetails", "match");
        }


        // Path Params
        const localVarPath = '/api/2025/v1/events/{code}/matches/{match}/'
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'match' + '}', encodeURIComponent(String(match)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class Class2025APIApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getElimsSeasonMatchDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getElimsSeasonMatchDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiSeasonSpecificMatchDetailed >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiSeasonSpecificMatchDetailed = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiSeasonSpecificMatchDetailed", ""
            ) as ApiSeasonSpecificMatchDetailed;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiV1Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Error", ""
            ) as ApiV1Error;
            throw new ApiException<ApiV1Error>(response.httpStatusCode, "No such event", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ApiV1Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Error", ""
            ) as ApiV1Error;
            throw new ApiException<ApiV1Error>(response.httpStatusCode, "Eliminations not started", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiSeasonSpecificMatchDetailed = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiSeasonSpecificMatchDetailed", ""
            ) as ApiSeasonSpecificMatchDetailed;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSeasonEventFull
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSeasonEventFullWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1FullSeasonSpecificEvent >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1FullSeasonSpecificEvent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1FullSeasonSpecificEvent", ""
            ) as ApiV1FullSeasonSpecificEvent;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiV1Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Error", ""
            ) as ApiV1Error;
            throw new ApiException<ApiV1Error>(response.httpStatusCode, "No such event", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ApiV1Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Error", ""
            ) as ApiV1Error;
            throw new ApiException<ApiV1Error>(response.httpStatusCode, "This request cannot be completed because a match is about to start.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiV1FullSeasonSpecificEvent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1FullSeasonSpecificEvent", ""
            ) as ApiV1FullSeasonSpecificEvent;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSeasonMatchDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSeasonMatchDetailsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiSeasonSpecificMatchDetailed >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiSeasonSpecificMatchDetailed = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiSeasonSpecificMatchDetailed", ""
            ) as ApiSeasonSpecificMatchDetailed;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiV1Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Error", ""
            ) as ApiV1Error;
            throw new ApiException<ApiV1Error>(response.httpStatusCode, "No such event", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiSeasonSpecificMatchDetailed = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiSeasonSpecificMatchDetailed", ""
            ) as ApiSeasonSpecificMatchDetailed;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
