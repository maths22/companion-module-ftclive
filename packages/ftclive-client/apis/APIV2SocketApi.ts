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


import { ApiV2Update } from '../models/ApiV2Update.js';

/**
 * no description
 */
export class APIV2SocketApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Connects a websocket to listen for match events. Events come as messages on the socket in near-real-time to when they occur. Each event has a timestamp in millis. Notable events are MATCH_LOAD, MATCH_START, MATCH_COMMIT, MATCH_POST, and MATCH_ABORT. The message only contains minimal data about the match involved. ApiV1 HTTP endpoints can be hit to get more details about the match. Note: The Swagger \'Try it out\' feature does not support Websockets. 
     * (Websocket Only) Match Event Stream
     * @param code The event code
     */
    public async matchEventStream(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("APIV2SocketApi", "matchEventStream", "code");
        }


        // Path Params
        const localVarPath = '/api/v2/stream/';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (code !== undefined) {
            requestContext.setQueryParam("code", ObjectSerializer.serialize(code, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class APIV2SocketApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to matchEventStream
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async matchEventStreamWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV2Update >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV2Update = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV2Update", ""
            ) as ApiV2Update;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiV2Update = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV2Update", ""
            ) as ApiV2Update;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
