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
import { ApiV1MatchDetailed } from '../models/ApiV1MatchDetailed.js';
import { ApiV1MatchList } from '../models/ApiV1MatchList.js';
import { ApiV2AwardList } from '../models/ApiV2AwardList.js';
import { ApiV2FullEvent } from '../models/ApiV2FullEvent.js';

/**
 * no description
 */
export class APIV2ApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List of award winners that have been presented. The list changes as awards are <em>presented</em>. Award winners are shown in this list once they have been publicly presented. For individual awards, the team affiliation may or may not be included. For most awards, the winner is series=1, second place is 2, third place is 3. 
     * Gets Awards
     * @param code The event code
     */
    public async getAwards(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("APIV2Api", "getAwards", "code");
        }


        // Path Params
        const localVarPath = '/api/v2/events/{code}/awards/'
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
     * Results for a match that has been played. NO_SUCH_MATCH indicates either an invalid match number or the match has not been played yet. 
     * Gets Elimination Match
     * @param code The event code
     * @param name The match name (in lowercase)
     * @param ifModifiedSince GMT time of last hit
     */
    public async getElimMatch(code: string, name: string, ifModifiedSince?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("APIV2Api", "getElimMatch", "code");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("APIV2Api", "getElimMatch", "name");
        }



        // Path Params
        const localVarPath = '/api/v2/events/{code}/elims/{name}/'
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("If-Modified-Since", ObjectSerializer.serialize(ifModifiedSince, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns an array of all elimination matches currently scheduled. Does not return all possible matches, only those that are guaranteed to occur. 
     * Gets All Elims
     * @param code The event code
     */
    public async getElimsMatchesV2(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("APIV2Api", "getElimsMatchesV2", "code");
        }


        // Path Params
        const localVarPath = '/api/v2/events/{code}/elims/'
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
     * This returns a complete snapshot of the event as would be gained by querying all of the separate API routes. This route is intended only to be queried once when a client loads for the purposes of caching the current state. The rate limit on this route and the `/api/{season}/v1/events/{code}/full/` is 4 requests every 30 minutes combined. The point is not for a client to query this route that frequently, but rather to provide some margin of error in case the client must reboot and refresh the cache. This endpoint cannot be hit while a match is in the RANDOMIZED state and will return HTTP `503` if so. The amount of data returned is very large, about 75kB for a 32 team event. 
     * Gets Full Event Details
     * @param code The event code
     */
    public async getEventFull(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("APIV2Api", "getEventFull", "code");
        }


        // Path Params
        const localVarPath = '/api/v2/events/{code}/full/'
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

}

export class APIV2ApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAwards
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAwardsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV2AwardList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV2AwardList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV2AwardList", ""
            ) as ApiV2AwardList;
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
            const body: ApiV2AwardList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV2AwardList", ""
            ) as ApiV2AwardList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getElimMatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getElimMatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1MatchDetailed >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1MatchDetailed = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1MatchDetailed", ""
            ) as ApiV1MatchDetailed;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("304", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "No changes since last hit", undefined, response.headers);
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
            const body: ApiV1MatchDetailed = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1MatchDetailed", ""
            ) as ApiV1MatchDetailed;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getElimsMatchesV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getElimsMatchesV2WithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1MatchList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1MatchList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1MatchList", ""
            ) as ApiV1MatchList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: ApiV1MatchList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1MatchList", ""
            ) as ApiV1MatchList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEventFull
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEventFullWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV2FullEvent >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV2FullEvent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV2FullEvent", ""
            ) as ApiV2FullEvent;
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
            const body: ApiV2FullEvent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV2FullEvent", ""
            ) as ApiV2FullEvent;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
