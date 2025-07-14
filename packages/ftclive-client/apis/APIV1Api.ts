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


import { ApiV1ActiveMatchList } from '../models/ApiV1ActiveMatchList.js';
import { ApiV1ElimsAllianceList } from '../models/ApiV1ElimsAllianceList.js';
import { ApiV1Error } from '../models/ApiV1Error.js';
import { ApiV1Event } from '../models/ApiV1Event.js';
import { ApiV1EventList } from '../models/ApiV1EventList.js';
import { ApiV1MatchBrief } from '../models/ApiV1MatchBrief.js';
import { ApiV1MatchDetailed } from '../models/ApiV1MatchDetailed.js';
import { ApiV1RankingList } from '../models/ApiV1RankingList.js';
import { ApiV1StatusList } from '../models/ApiV1StatusList.js';
import { ApiV1Team } from '../models/ApiV1Team.js';
import { ApiV1TeamList } from '../models/ApiV1TeamList.js';
import { ApiV1Version } from '../models/ApiV1Version.js';
import { ApiV1WifiAssignment } from '../models/ApiV1WifiAssignment.js';
import { ApiV1WifiAssignmentList } from '../models/ApiV1WifiAssignmentList.js';

/**
 * no description
 */
export class APIV1ApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List of matches currently loaded for play.
     * Gets Active Matches
     * @param code The event code
     */
    public async getActiveMatches(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("APIV1Api", "getActiveMatches", "code");
        }


        // Path Params
        const localVarPath = '/api/v1/events/{code}/matches/active/'
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
     * The elimination alliances.
     * Gets Alliances
     * @param code The event code
     */
    public async getAlliances(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("APIV1Api", "getAlliances", "code");
        }


        // Path Params
        const localVarPath = '/api/v1/events/{code}/elim/alliances/'
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
     * A list of teams defined by team numbers participating in any given event.
     * Gets list of teams competing at an event
     * @param code The event code
     */
    public async getCompetingTeams(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("APIV1Api", "getCompetingTeams", "code");
        }


        // Path Params
        const localVarPath = '/api/v1/events/{code}/teams/'
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
     * A detailed description of an event for any given event code.
     * Gets an event
     * @param code The event code
     */
    public async getEvent(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("APIV1Api", "getEvent", "code");
        }


        // Path Params
        const localVarPath = '/api/v1/events/{code}/'
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
     * Returns a detailed description of a team with a given number competing at a given event. This will return the team info as it was when the event occurred. 
     * Gets event-specific team info
     * @param code The event code
     * @param number The team\&#39;s number
     */
    public async getEventTeamInfo(code: string, number: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("APIV1Api", "getEventTeamInfo", "code");
        }


        // verify required parameter 'number' is not null or undefined
        if (number === null || number === undefined) {
            throw new RequiredError("APIV1Api", "getEventTeamInfo", "number");
        }


        // Path Params
        const localVarPath = '/api/v1/events/{code}/teams/{number}/'
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'number' + '}', encodeURIComponent(String(number)));

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
     * A list of all event codes that this instance of the FTCLive server knows about.
     * Gets list of events
     */
    public async getEvents(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api/v1/events/';

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
     * Gets Qualification Match
     * @param code The event code
     * @param number The match number
     * @param ifModifiedSince GMT time of last hit
     */
    public async getMatch(code: string, number: number, ifModifiedSince?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("APIV1Api", "getMatch", "code");
        }


        // verify required parameter 'number' is not null or undefined
        if (number === null || number === undefined) {
            throw new RequiredError("APIV1Api", "getMatch", "number");
        }



        // Path Params
        const localVarPath = '/api/v1/events/{code}/matches/{number}/'
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'number' + '}', encodeURIComponent(String(number)));

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
     * The Qualification match list for a given event. If matchmaker has not been run when this is requested the match list will be empty.
     * Gets Qualification match list
     * @param code The event code
     * @param ifModifiedSince GMT time of last hit
     */
    public async getMatches(code: string, ifModifiedSince?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("APIV1Api", "getMatches", "code");
        }



        // Path Params
        const localVarPath = '/api/v1/events/{code}/matches/'
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

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
     * A list of rankings for the event. Clients should understand that rankings are rather static and schedule their polling appropriately. 
     * Gets Rankings
     * @param code The event code
     */
    public async getRankings(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("APIV1Api", "getRankings", "code");
        }


        // Path Params
        const localVarPath = '/api/v1/events/{code}/rankings/'
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
     * A list of combined league rankings for all leagues present at an event. Clients should understand that rankings are rather static and schedule their polling appropriately. 
     * Gets Rankings Combined
     * @param code The event code
     */
    public async getRankingsCombined(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("APIV1Api", "getRankingsCombined", "code");
        }


        // Path Params
        const localVarPath = '/api/v1/events/{code}/rankings/combined/'
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
     * A detailed description of a team for any given team number.
     * Gets a team\'s info.
     * @param team The team number
     */
    public async getTeam(team: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("APIV1Api", "getTeam", "team");
        }


        // Path Params
        const localVarPath = '/api/v1/teams/{team}/'
            .replace('{' + 'team' + '}', encodeURIComponent(String(team)));

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
     * Returns the team status tracking data. This data should match what appears on the status display. The status is one of NONE, IN_PROGRESS, FAIL, PASS, READY, LATE, VERY_LATE. 
     * Gets Team Status
     * @param code The event code
     */
    public async getTeamStatus(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("APIV1Api", "getTeamStatus", "code");
        }


        // Path Params
        const localVarPath = '/api/v1/events/{code}/teamstatus/'
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
     * Returns the wifi assignment for a specific team.
     * Gets Team Wifi Assignments
     * @param code The event code
     * @param team The team number
     */
    public async getTeamWifiAssignment(code: string, team: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("APIV1Api", "getTeamWifiAssignment", "code");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("APIV1Api", "getTeamWifiAssignment", "team");
        }


        // Path Params
        const localVarPath = '/api/v1/events/{code}/wifi/team/{team}/'
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'team' + '}', encodeURIComponent(String(team)));

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
     * Returns all team numbers that have registered with FIRST as of the last sync to the FIRST registration database for this release of FTCLive. This is a very long list. Applications that want this data should query once upon startup and then never again. The packaged team list will always be returned. 
     * Gets list of teams
     */
    public async getTeams(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api/v1/teams/';

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
     * Returns the list of team wifi channel assignments once it is published.
     * Gets Team Wifi Assignments
     * @param code The event code
     */
    public async getWifiAssignments(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("APIV1Api", "getWifiAssignments", "code");
        }


        // Path Params
        const localVarPath = '/api/v1/events/{code}/wifi/'
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
     * Returns the version of the scoring system software.
     * Gets the version of the scoring system.
     */
    public async version(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api/v1/version/';

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

export class APIV1ApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getActiveMatches
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getActiveMatchesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1ActiveMatchList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1ActiveMatchList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1ActiveMatchList", ""
            ) as ApiV1ActiveMatchList;
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
            const body: ApiV1ActiveMatchList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1ActiveMatchList", ""
            ) as ApiV1ActiveMatchList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAlliances
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAlliancesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1ElimsAllianceList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1ElimsAllianceList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1ElimsAllianceList", ""
            ) as ApiV1ElimsAllianceList;
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
            throw new ApiException<ApiV1Error>(response.httpStatusCode, "Event not yet in eliminations", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiV1ElimsAllianceList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1ElimsAllianceList", ""
            ) as ApiV1ElimsAllianceList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCompetingTeams
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCompetingTeamsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1TeamList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1TeamList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1TeamList", ""
            ) as ApiV1TeamList;
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
            const body: ApiV1TeamList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1TeamList", ""
            ) as ApiV1TeamList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEventWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1Event >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1Event = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Event", ""
            ) as ApiV1Event;
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
            const body: ApiV1Event = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Event", ""
            ) as ApiV1Event;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEventTeamInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEventTeamInfoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1Team >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1Team = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Team", ""
            ) as ApiV1Team;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiV1Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Error", ""
            ) as ApiV1Error;
            throw new ApiException<ApiV1Error>(response.httpStatusCode, "No such team or event", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiV1Team = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Team", ""
            ) as ApiV1Team;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEventsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1EventList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1EventList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1EventList", ""
            ) as ApiV1EventList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiV1EventList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1EventList", ""
            ) as ApiV1EventList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1MatchDetailed >> {
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
            throw new ApiException<ApiV1Error>(response.httpStatusCode, "Event or Match not found", body, response.headers);
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
     * @params response Response returned by the server for a request to getMatches
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMatchesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1MatchBrief >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1MatchBrief = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1MatchBrief", ""
            ) as ApiV1MatchBrief;
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

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiV1MatchBrief = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1MatchBrief", ""
            ) as ApiV1MatchBrief;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRankings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRankingsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1RankingList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1RankingList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1RankingList", ""
            ) as ApiV1RankingList;
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
            const body: ApiV1RankingList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1RankingList", ""
            ) as ApiV1RankingList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRankingsCombined
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRankingsCombinedWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1RankingList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1RankingList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1RankingList", ""
            ) as ApiV1RankingList;
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
            const body: ApiV1RankingList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1RankingList", ""
            ) as ApiV1RankingList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTeamWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1Team >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1Team = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Team", ""
            ) as ApiV1Team;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiV1Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Error", ""
            ) as ApiV1Error;
            throw new ApiException<ApiV1Error>(response.httpStatusCode, "Team not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiV1Team = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Team", ""
            ) as ApiV1Team;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTeamStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTeamStatusWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1StatusList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1StatusList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1StatusList", ""
            ) as ApiV1StatusList;
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
            const body: ApiV1StatusList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1StatusList", ""
            ) as ApiV1StatusList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTeamWifiAssignment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTeamWifiAssignmentWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1WifiAssignment >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1WifiAssignment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1WifiAssignment", ""
            ) as ApiV1WifiAssignment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiV1Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Error", ""
            ) as ApiV1Error;
            throw new ApiException<ApiV1Error>(response.httpStatusCode, "No such or team event", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ApiV1Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Error", ""
            ) as ApiV1Error;
            throw new ApiException<ApiV1Error>(response.httpStatusCode, "Wifi assignments not published", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiV1WifiAssignment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1WifiAssignment", ""
            ) as ApiV1WifiAssignment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTeams
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTeamsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1TeamList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1TeamList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1TeamList", ""
            ) as ApiV1TeamList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiV1TeamList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1TeamList", ""
            ) as ApiV1TeamList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWifiAssignments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWifiAssignmentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1WifiAssignmentList >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1WifiAssignmentList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1WifiAssignmentList", ""
            ) as ApiV1WifiAssignmentList;
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
            throw new ApiException<ApiV1Error>(response.httpStatusCode, "Wifi assignments not published", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiV1WifiAssignmentList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1WifiAssignmentList", ""
            ) as ApiV1WifiAssignmentList;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to version
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async versionWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApiV1Version >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiV1Version = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Version", ""
            ) as ApiV1Version;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiV1Version = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiV1Version", ""
            ) as ApiV1Version;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
