import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.js';
import { Configuration, ConfigurationOptions } from '../configuration.js'
import type { Middleware } from '../middleware.js';

import { ApiAutoLocation } from '../models/ApiAutoLocation.js';
import { ApiSeasonSpecificMatchDetailed } from '../models/ApiSeasonSpecificMatchDetailed.js';
import { ApiSeasonSpecificMatchDetailedList } from '../models/ApiSeasonSpecificMatchDetailedList.js';
import { ApiTeleopLocation } from '../models/ApiTeleopLocation.js';
import { ApiV1ActiveMatchList } from '../models/ApiV1ActiveMatchList.js';
import { ApiV1ElimsAlliance } from '../models/ApiV1ElimsAlliance.js';
import { ApiV1ElimsAllianceList } from '../models/ApiV1ElimsAllianceList.js';
import { ApiV1ElimsMatch } from '../models/ApiV1ElimsMatch.js';
import { ApiV1ElimsMatchList } from '../models/ApiV1ElimsMatchList.js';
import { ApiV1Error } from '../models/ApiV1Error.js';
import { ApiV1Event } from '../models/ApiV1Event.js';
import { ApiV1EventList } from '../models/ApiV1EventList.js';
import { ApiV1FullSeasonSpecificEvent } from '../models/ApiV1FullSeasonSpecificEvent.js';
import { ApiV1IntoTheDeepScoreBreakdown } from '../models/ApiV1IntoTheDeepScoreBreakdown.js';
import { ApiV1Key } from '../models/ApiV1Key.js';
import { ApiV1KeyStatus } from '../models/ApiV1KeyStatus.js';
import { ApiV1MatchBrief } from '../models/ApiV1MatchBrief.js';
import { ApiV1MatchBriefRed } from '../models/ApiV1MatchBriefRed.js';
import { ApiV1MatchDetailed } from '../models/ApiV1MatchDetailed.js';
import { ApiV1MatchDetailedList } from '../models/ApiV1MatchDetailedList.js';
import { ApiV1MatchList } from '../models/ApiV1MatchList.js';
import { ApiV1QualsAlliance } from '../models/ApiV1QualsAlliance.js';
import { ApiV1Ranking } from '../models/ApiV1Ranking.js';
import { ApiV1RankingList } from '../models/ApiV1RankingList.js';
import { ApiV1ScoreBreakdown } from '../models/ApiV1ScoreBreakdown.js';
import { ApiV1StatusList } from '../models/ApiV1StatusList.js';
import { ApiV1StatusType } from '../models/ApiV1StatusType.js';
import { ApiV1Team } from '../models/ApiV1Team.js';
import { ApiV1TeamDetailedList } from '../models/ApiV1TeamDetailedList.js';
import { ApiV1TeamList } from '../models/ApiV1TeamList.js';
import { ApiV1TeamStatus } from '../models/ApiV1TeamStatus.js';
import { ApiV1Version } from '../models/ApiV1Version.js';
import { ApiV1WifiAssignment } from '../models/ApiV1WifiAssignment.js';
import { ApiV1WifiAssignmentList } from '../models/ApiV1WifiAssignmentList.js';
import { ApiV2Award } from '../models/ApiV2Award.js';
import { ApiV2AwardAssignment } from '../models/ApiV2AwardAssignment.js';
import { ApiV2AwardList } from '../models/ApiV2AwardList.js';
import { ApiV2FullEvent } from '../models/ApiV2FullEvent.js';
import { ApiV2Update } from '../models/ApiV2Update.js';
import { ApiV2UpdateMatchPayload } from '../models/ApiV2UpdateMatchPayload.js';
import { ApiV2UpdateType } from '../models/ApiV2UpdateType.js';
import { ErrorCodes } from '../models/ErrorCodes.js';
import { StackTraceElement } from '../models/StackTraceElement.js';
import { Status } from '../models/Status.js';
import { Throwable } from '../models/Throwable.js';

import { ObservableAPIKeyManagementApi } from "./ObservableAPI.js";
import { APIKeyManagementApiRequestFactory, APIKeyManagementApiResponseProcessor} from "../apis/APIKeyManagementApi.js";

export interface APIKeyManagementApiKeyCheckRequest {
    /**
     * The key to check the status of.
     * Defaults to: undefined
     * @type string
     * @memberof APIKeyManagementApikeyCheck
     */
    authorization: string
}

export interface APIKeyManagementApiKeyRequestRequest {
    /**
     * The name of the program requesting the key.
     * Defaults to: undefined
     * @type string
     * @memberof APIKeyManagementApikeyRequest
     */
    name: string
}

export interface APIKeyManagementApiKeyWaitRequest {
    /**
     * The key to wait until it is valid for.
     * Defaults to: undefined
     * @type string
     * @memberof APIKeyManagementApikeyWait
     */
    authorization: string
}

export class ObjectAPIKeyManagementApi {
    private api: ObservableAPIKeyManagementApi

    public constructor(configuration: Configuration, requestFactory?: APIKeyManagementApiRequestFactory, responseProcessor?: APIKeyManagementApiResponseProcessor) {
        this.api = new ObservableAPIKeyManagementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This will immediately return the active status of the specified key.
     * Checks the status of the key requested
     * @param param the request object
     */
    public keyCheckWithHttpInfo(param: APIKeyManagementApiKeyCheckRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1KeyStatus>> {
        return this.api.keyCheckWithHttpInfo(param.authorization,  options).toPromise();
    }

    /**
     * This will immediately return the active status of the specified key.
     * Checks the status of the key requested
     * @param param the request object
     */
    public keyCheck(param: APIKeyManagementApiKeyCheckRequest, options?: ConfigurationOptions): Promise<ApiV1KeyStatus> {
        return this.api.keyCheck(param.authorization,  options).toPromise();
    }

    /**
     * Must include the name of the application making the request by specifying the `name` param in the POST. This name will be displayed to the scorekeeper to validate the key. This will immediately return a key, but the key will not be valid until the scorekeeper approves the request. The status of the key can be checked with /apiv1/keycheck/. Once receiving the key, the application can pass the key as the Authorization header of the HTTP requests. Once the key is active, the rate limit will be increased for the specified key. 
     * Requests a key to be granted for an increase rate limit.
     * @param param the request object
     */
    public keyRequestWithHttpInfo(param: APIKeyManagementApiKeyRequestRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1Key>> {
        return this.api.keyRequestWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Must include the name of the application making the request by specifying the `name` param in the POST. This name will be displayed to the scorekeeper to validate the key. This will immediately return a key, but the key will not be valid until the scorekeeper approves the request. The status of the key can be checked with /apiv1/keycheck/. Once receiving the key, the application can pass the key as the Authorization header of the HTTP requests. Once the key is active, the rate limit will be increased for the specified key. 
     * Requests a key to be granted for an increase rate limit.
     * @param param the request object
     */
    public keyRequest(param: APIKeyManagementApiKeyRequestRequest, options?: ConfigurationOptions): Promise<ApiV1Key> {
        return this.api.keyRequest(param.name,  options).toPromise();
    }

    /**
     * This request will return once the scorekeeper has activated the specified key, or immediately if the key is already active.
     * Waits until the specified key becomes active.
     * @param param the request object
     */
    public keyWaitWithHttpInfo(param: APIKeyManagementApiKeyWaitRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1KeyStatus>> {
        return this.api.keyWaitWithHttpInfo(param.authorization,  options).toPromise();
    }

    /**
     * This request will return once the scorekeeper has activated the specified key, or immediately if the key is already active.
     * Waits until the specified key becomes active.
     * @param param the request object
     */
    public keyWait(param: APIKeyManagementApiKeyWaitRequest, options?: ConfigurationOptions): Promise<ApiV1KeyStatus> {
        return this.api.keyWait(param.authorization,  options).toPromise();
    }

}

import { ObservableAPIV1Api } from "./ObservableAPI.js";
import { APIV1ApiRequestFactory, APIV1ApiResponseProcessor} from "../apis/APIV1Api.js";

export interface APIV1ApiGetActiveMatchesRequest {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof APIV1ApigetActiveMatches
     */
    code: string
}

export interface APIV1ApiGetAlliancesRequest {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof APIV1ApigetAlliances
     */
    code: string
}

export interface APIV1ApiGetCompetingTeamsRequest {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof APIV1ApigetCompetingTeams
     */
    code: string
}

export interface APIV1ApiGetEventRequest {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof APIV1ApigetEvent
     */
    code: string
}

export interface APIV1ApiGetEventTeamInfoRequest {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof APIV1ApigetEventTeamInfo
     */
    code: string
    /**
     * The team\&#39;s number
     * Defaults to: undefined
     * @type number
     * @memberof APIV1ApigetEventTeamInfo
     */
    number: number
}

export interface APIV1ApiGetEventsRequest {
}

export interface APIV1ApiGetMatchRequest {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof APIV1ApigetMatch
     */
    code: string
    /**
     * The match number
     * Defaults to: undefined
     * @type number
     * @memberof APIV1ApigetMatch
     */
    number: number
    /**
     * GMT time of last hit
     * Defaults to: undefined
     * @type string
     * @memberof APIV1ApigetMatch
     */
    ifModifiedSince?: string
}

export interface APIV1ApiGetMatchesRequest {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof APIV1ApigetMatches
     */
    code: string
    /**
     * GMT time of last hit
     * Defaults to: undefined
     * @type string
     * @memberof APIV1ApigetMatches
     */
    ifModifiedSince?: string
}

export interface APIV1ApiGetRankingsRequest {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof APIV1ApigetRankings
     */
    code: string
}

export interface APIV1ApiGetRankingsCombinedRequest {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof APIV1ApigetRankingsCombined
     */
    code: string
}

export interface APIV1ApiGetTeamRequest {
    /**
     * The team number
     * Defaults to: undefined
     * @type number
     * @memberof APIV1ApigetTeam
     */
    team: number
}

export interface APIV1ApiGetTeamStatusRequest {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof APIV1ApigetTeamStatus
     */
    code: string
}

export interface APIV1ApiGetTeamWifiAssignmentRequest {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof APIV1ApigetTeamWifiAssignment
     */
    code: string
    /**
     * The team number
     * Defaults to: undefined
     * @type number
     * @memberof APIV1ApigetTeamWifiAssignment
     */
    team: number
}

export interface APIV1ApiGetTeamsRequest {
}

export interface APIV1ApiGetWifiAssignmentsRequest {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof APIV1ApigetWifiAssignments
     */
    code: string
}

export interface APIV1ApiVersionRequest {
}

export class ObjectAPIV1Api {
    private api: ObservableAPIV1Api

    public constructor(configuration: Configuration, requestFactory?: APIV1ApiRequestFactory, responseProcessor?: APIV1ApiResponseProcessor) {
        this.api = new ObservableAPIV1Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of matches currently loaded for play.
     * Gets Active Matches
     * @param param the request object
     */
    public getActiveMatchesWithHttpInfo(param: APIV1ApiGetActiveMatchesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1ActiveMatchList>> {
        return this.api.getActiveMatchesWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * List of matches currently loaded for play.
     * Gets Active Matches
     * @param param the request object
     */
    public getActiveMatches(param: APIV1ApiGetActiveMatchesRequest, options?: ConfigurationOptions): Promise<ApiV1ActiveMatchList> {
        return this.api.getActiveMatches(param.code,  options).toPromise();
    }

    /**
     * The elimination alliances.
     * Gets Alliances
     * @param param the request object
     */
    public getAlliancesWithHttpInfo(param: APIV1ApiGetAlliancesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1ElimsAllianceList>> {
        return this.api.getAlliancesWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * The elimination alliances.
     * Gets Alliances
     * @param param the request object
     */
    public getAlliances(param: APIV1ApiGetAlliancesRequest, options?: ConfigurationOptions): Promise<ApiV1ElimsAllianceList> {
        return this.api.getAlliances(param.code,  options).toPromise();
    }

    /**
     * A list of teams defined by team numbers participating in any given event.
     * Gets list of teams competing at an event
     * @param param the request object
     */
    public getCompetingTeamsWithHttpInfo(param: APIV1ApiGetCompetingTeamsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1TeamList>> {
        return this.api.getCompetingTeamsWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * A list of teams defined by team numbers participating in any given event.
     * Gets list of teams competing at an event
     * @param param the request object
     */
    public getCompetingTeams(param: APIV1ApiGetCompetingTeamsRequest, options?: ConfigurationOptions): Promise<ApiV1TeamList> {
        return this.api.getCompetingTeams(param.code,  options).toPromise();
    }

    /**
     * A detailed description of an event for any given event code.
     * Gets an event
     * @param param the request object
     */
    public getEventWithHttpInfo(param: APIV1ApiGetEventRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1Event>> {
        return this.api.getEventWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * A detailed description of an event for any given event code.
     * Gets an event
     * @param param the request object
     */
    public getEvent(param: APIV1ApiGetEventRequest, options?: ConfigurationOptions): Promise<ApiV1Event> {
        return this.api.getEvent(param.code,  options).toPromise();
    }

    /**
     * Returns a detailed description of a team with a given number competing at a given event. This will return the team info as it was when the event occurred. 
     * Gets event-specific team info
     * @param param the request object
     */
    public getEventTeamInfoWithHttpInfo(param: APIV1ApiGetEventTeamInfoRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1Team>> {
        return this.api.getEventTeamInfoWithHttpInfo(param.code, param.number,  options).toPromise();
    }

    /**
     * Returns a detailed description of a team with a given number competing at a given event. This will return the team info as it was when the event occurred. 
     * Gets event-specific team info
     * @param param the request object
     */
    public getEventTeamInfo(param: APIV1ApiGetEventTeamInfoRequest, options?: ConfigurationOptions): Promise<ApiV1Team> {
        return this.api.getEventTeamInfo(param.code, param.number,  options).toPromise();
    }

    /**
     * A list of all event codes that this instance of the FTCLive server knows about.
     * Gets list of events
     * @param param the request object
     */
    public getEventsWithHttpInfo(param: APIV1ApiGetEventsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1EventList>> {
        return this.api.getEventsWithHttpInfo( options).toPromise();
    }

    /**
     * A list of all event codes that this instance of the FTCLive server knows about.
     * Gets list of events
     * @param param the request object
     */
    public getEvents(param: APIV1ApiGetEventsRequest = {}, options?: ConfigurationOptions): Promise<ApiV1EventList> {
        return this.api.getEvents( options).toPromise();
    }

    /**
     * Results for a match that has been played. NO_SUCH_MATCH indicates either an invalid match number or the match has not been played yet.
     * Gets Qualification Match
     * @param param the request object
     */
    public getMatchWithHttpInfo(param: APIV1ApiGetMatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1MatchDetailed>> {
        return this.api.getMatchWithHttpInfo(param.code, param.number, param.ifModifiedSince,  options).toPromise();
    }

    /**
     * Results for a match that has been played. NO_SUCH_MATCH indicates either an invalid match number or the match has not been played yet.
     * Gets Qualification Match
     * @param param the request object
     */
    public getMatch(param: APIV1ApiGetMatchRequest, options?: ConfigurationOptions): Promise<ApiV1MatchDetailed> {
        return this.api.getMatch(param.code, param.number, param.ifModifiedSince,  options).toPromise();
    }

    /**
     * The Qualification match list for a given event. If matchmaker has not been run when this is requested the match list will be empty.
     * Gets Qualification match list
     * @param param the request object
     */
    public getMatchesWithHttpInfo(param: APIV1ApiGetMatchesRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1MatchBrief>> {
        return this.api.getMatchesWithHttpInfo(param.code, param.ifModifiedSince,  options).toPromise();
    }

    /**
     * The Qualification match list for a given event. If matchmaker has not been run when this is requested the match list will be empty.
     * Gets Qualification match list
     * @param param the request object
     */
    public getMatches(param: APIV1ApiGetMatchesRequest, options?: ConfigurationOptions): Promise<ApiV1MatchBrief> {
        return this.api.getMatches(param.code, param.ifModifiedSince,  options).toPromise();
    }

    /**
     * A list of rankings for the event. Clients should understand that rankings are rather static and schedule their polling appropriately. 
     * Gets Rankings
     * @param param the request object
     */
    public getRankingsWithHttpInfo(param: APIV1ApiGetRankingsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1RankingList>> {
        return this.api.getRankingsWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * A list of rankings for the event. Clients should understand that rankings are rather static and schedule their polling appropriately. 
     * Gets Rankings
     * @param param the request object
     */
    public getRankings(param: APIV1ApiGetRankingsRequest, options?: ConfigurationOptions): Promise<ApiV1RankingList> {
        return this.api.getRankings(param.code,  options).toPromise();
    }

    /**
     * A list of combined league rankings for all leagues present at an event. Clients should understand that rankings are rather static and schedule their polling appropriately. 
     * Gets Rankings Combined
     * @param param the request object
     */
    public getRankingsCombinedWithHttpInfo(param: APIV1ApiGetRankingsCombinedRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1RankingList>> {
        return this.api.getRankingsCombinedWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * A list of combined league rankings for all leagues present at an event. Clients should understand that rankings are rather static and schedule their polling appropriately. 
     * Gets Rankings Combined
     * @param param the request object
     */
    public getRankingsCombined(param: APIV1ApiGetRankingsCombinedRequest, options?: ConfigurationOptions): Promise<ApiV1RankingList> {
        return this.api.getRankingsCombined(param.code,  options).toPromise();
    }

    /**
     * A detailed description of a team for any given team number.
     * Gets a team\'s info.
     * @param param the request object
     */
    public getTeamWithHttpInfo(param: APIV1ApiGetTeamRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1Team>> {
        return this.api.getTeamWithHttpInfo(param.team,  options).toPromise();
    }

    /**
     * A detailed description of a team for any given team number.
     * Gets a team\'s info.
     * @param param the request object
     */
    public getTeam(param: APIV1ApiGetTeamRequest, options?: ConfigurationOptions): Promise<ApiV1Team> {
        return this.api.getTeam(param.team,  options).toPromise();
    }

    /**
     * Returns the team status tracking data. This data should match what appears on the status display. The status is one of NONE, IN_PROGRESS, FAIL, PASS, READY, LATE, VERY_LATE. 
     * Gets Team Status
     * @param param the request object
     */
    public getTeamStatusWithHttpInfo(param: APIV1ApiGetTeamStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1StatusList>> {
        return this.api.getTeamStatusWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * Returns the team status tracking data. This data should match what appears on the status display. The status is one of NONE, IN_PROGRESS, FAIL, PASS, READY, LATE, VERY_LATE. 
     * Gets Team Status
     * @param param the request object
     */
    public getTeamStatus(param: APIV1ApiGetTeamStatusRequest, options?: ConfigurationOptions): Promise<ApiV1StatusList> {
        return this.api.getTeamStatus(param.code,  options).toPromise();
    }

    /**
     * Returns the wifi assignment for a specific team.
     * Gets Team Wifi Assignments
     * @param param the request object
     */
    public getTeamWifiAssignmentWithHttpInfo(param: APIV1ApiGetTeamWifiAssignmentRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1WifiAssignment>> {
        return this.api.getTeamWifiAssignmentWithHttpInfo(param.code, param.team,  options).toPromise();
    }

    /**
     * Returns the wifi assignment for a specific team.
     * Gets Team Wifi Assignments
     * @param param the request object
     */
    public getTeamWifiAssignment(param: APIV1ApiGetTeamWifiAssignmentRequest, options?: ConfigurationOptions): Promise<ApiV1WifiAssignment> {
        return this.api.getTeamWifiAssignment(param.code, param.team,  options).toPromise();
    }

    /**
     * Returns all team numbers that have registered with FIRST as of the last sync to the FIRST registration database for this release of FTCLive. This is a very long list. Applications that want this data should query once upon startup and then never again. The packaged team list will always be returned. 
     * Gets list of teams
     * @param param the request object
     */
    public getTeamsWithHttpInfo(param: APIV1ApiGetTeamsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1TeamList>> {
        return this.api.getTeamsWithHttpInfo( options).toPromise();
    }

    /**
     * Returns all team numbers that have registered with FIRST as of the last sync to the FIRST registration database for this release of FTCLive. This is a very long list. Applications that want this data should query once upon startup and then never again. The packaged team list will always be returned. 
     * Gets list of teams
     * @param param the request object
     */
    public getTeams(param: APIV1ApiGetTeamsRequest = {}, options?: ConfigurationOptions): Promise<ApiV1TeamList> {
        return this.api.getTeams( options).toPromise();
    }

    /**
     * Returns the list of team wifi channel assignments once it is published.
     * Gets Team Wifi Assignments
     * @param param the request object
     */
    public getWifiAssignmentsWithHttpInfo(param: APIV1ApiGetWifiAssignmentsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1WifiAssignmentList>> {
        return this.api.getWifiAssignmentsWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * Returns the list of team wifi channel assignments once it is published.
     * Gets Team Wifi Assignments
     * @param param the request object
     */
    public getWifiAssignments(param: APIV1ApiGetWifiAssignmentsRequest, options?: ConfigurationOptions): Promise<ApiV1WifiAssignmentList> {
        return this.api.getWifiAssignments(param.code,  options).toPromise();
    }

    /**
     * Returns the version of the scoring system software.
     * Gets the version of the scoring system.
     * @param param the request object
     */
    public versionWithHttpInfo(param: APIV1ApiVersionRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1Version>> {
        return this.api.versionWithHttpInfo( options).toPromise();
    }

    /**
     * Returns the version of the scoring system software.
     * Gets the version of the scoring system.
     * @param param the request object
     */
    public version(param: APIV1ApiVersionRequest = {}, options?: ConfigurationOptions): Promise<ApiV1Version> {
        return this.api.version( options).toPromise();
    }

}

import { ObservableAPIV2Api } from "./ObservableAPI.js";
import { APIV2ApiRequestFactory, APIV2ApiResponseProcessor} from "../apis/APIV2Api.js";

export interface APIV2ApiGetAwardsRequest {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof APIV2ApigetAwards
     */
    code: string
}

export interface APIV2ApiGetElimMatchRequest {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof APIV2ApigetElimMatch
     */
    code: string
    /**
     * The match name (in lowercase)
     * Defaults to: undefined
     * @type string
     * @memberof APIV2ApigetElimMatch
     */
    name: string
    /**
     * GMT time of last hit
     * Defaults to: undefined
     * @type string
     * @memberof APIV2ApigetElimMatch
     */
    ifModifiedSince?: string
}

export interface APIV2ApiGetElimsMatchesV2Request {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof APIV2ApigetElimsMatchesV2
     */
    code: string
}

export interface APIV2ApiGetEventFullRequest {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof APIV2ApigetEventFull
     */
    code: string
}

export class ObjectAPIV2Api {
    private api: ObservableAPIV2Api

    public constructor(configuration: Configuration, requestFactory?: APIV2ApiRequestFactory, responseProcessor?: APIV2ApiResponseProcessor) {
        this.api = new ObservableAPIV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of award winners that have been presented. The list changes as awards are <em>presented</em>. Award winners are shown in this list once they have been publicly presented. For individual awards, the team affiliation may or may not be included. For most awards, the winner is series=1, second place is 2, third place is 3. 
     * Gets Awards
     * @param param the request object
     */
    public getAwardsWithHttpInfo(param: APIV2ApiGetAwardsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV2AwardList>> {
        return this.api.getAwardsWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * List of award winners that have been presented. The list changes as awards are <em>presented</em>. Award winners are shown in this list once they have been publicly presented. For individual awards, the team affiliation may or may not be included. For most awards, the winner is series=1, second place is 2, third place is 3. 
     * Gets Awards
     * @param param the request object
     */
    public getAwards(param: APIV2ApiGetAwardsRequest, options?: ConfigurationOptions): Promise<ApiV2AwardList> {
        return this.api.getAwards(param.code,  options).toPromise();
    }

    /**
     * Results for a match that has been played. NO_SUCH_MATCH indicates either an invalid match number or the match has not been played yet. 
     * Gets Elimination Match
     * @param param the request object
     */
    public getElimMatchWithHttpInfo(param: APIV2ApiGetElimMatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1MatchDetailed>> {
        return this.api.getElimMatchWithHttpInfo(param.code, param.name, param.ifModifiedSince,  options).toPromise();
    }

    /**
     * Results for a match that has been played. NO_SUCH_MATCH indicates either an invalid match number or the match has not been played yet. 
     * Gets Elimination Match
     * @param param the request object
     */
    public getElimMatch(param: APIV2ApiGetElimMatchRequest, options?: ConfigurationOptions): Promise<ApiV1MatchDetailed> {
        return this.api.getElimMatch(param.code, param.name, param.ifModifiedSince,  options).toPromise();
    }

    /**
     * Returns an array of all elimination matches currently scheduled. Does not return all possible matches, only those that are guaranteed to occur. 
     * Gets All Elims
     * @param param the request object
     */
    public getElimsMatchesV2WithHttpInfo(param: APIV2ApiGetElimsMatchesV2Request, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1MatchList>> {
        return this.api.getElimsMatchesV2WithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * Returns an array of all elimination matches currently scheduled. Does not return all possible matches, only those that are guaranteed to occur. 
     * Gets All Elims
     * @param param the request object
     */
    public getElimsMatchesV2(param: APIV2ApiGetElimsMatchesV2Request, options?: ConfigurationOptions): Promise<ApiV1MatchList> {
        return this.api.getElimsMatchesV2(param.code,  options).toPromise();
    }

    /**
     * This returns a complete snapshot of the event as would be gained by querying all of the separate API routes. This route is intended only to be queried once when a client loads for the purposes of caching the current state. The rate limit on this route and the `/api/{season}/v1/events/{code}/full/` is 4 requests every 30 minutes combined. The point is not for a client to query this route that frequently, but rather to provide some margin of error in case the client must reboot and refresh the cache. This endpoint cannot be hit while a match is in the RANDOMIZED state and will return HTTP `503` if so. The amount of data returned is very large, about 75kB for a 32 team event. 
     * Gets Full Event Details
     * @param param the request object
     */
    public getEventFullWithHttpInfo(param: APIV2ApiGetEventFullRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV2FullEvent>> {
        return this.api.getEventFullWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * This returns a complete snapshot of the event as would be gained by querying all of the separate API routes. This route is intended only to be queried once when a client loads for the purposes of caching the current state. The rate limit on this route and the `/api/{season}/v1/events/{code}/full/` is 4 requests every 30 minutes combined. The point is not for a client to query this route that frequently, but rather to provide some margin of error in case the client must reboot and refresh the cache. This endpoint cannot be hit while a match is in the RANDOMIZED state and will return HTTP `503` if so. The amount of data returned is very large, about 75kB for a 32 team event. 
     * Gets Full Event Details
     * @param param the request object
     */
    public getEventFull(param: APIV2ApiGetEventFullRequest, options?: ConfigurationOptions): Promise<ApiV2FullEvent> {
        return this.api.getEventFull(param.code,  options).toPromise();
    }

}

import { ObservableAPIV2SocketApi } from "./ObservableAPI.js";
import { APIV2SocketApiRequestFactory, APIV2SocketApiResponseProcessor} from "../apis/APIV2SocketApi.js";

export interface APIV2SocketApiMatchEventStreamRequest {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof APIV2SocketApimatchEventStream
     */
    code: string
}

export class ObjectAPIV2SocketApi {
    private api: ObservableAPIV2SocketApi

    public constructor(configuration: Configuration, requestFactory?: APIV2SocketApiRequestFactory, responseProcessor?: APIV2SocketApiResponseProcessor) {
        this.api = new ObservableAPIV2SocketApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Connects a websocket to listen for match events. Events come as messages on the socket in near-real-time to when they occur. Each event has a timestamp in millis. Notable events are MATCH_LOAD, MATCH_START, MATCH_COMMIT, MATCH_POST, and MATCH_ABORT. The message only contains minimal data about the match involved. ApiV1 HTTP endpoints can be hit to get more details about the match. Note: The Swagger \'Try it out\' feature does not support Websockets. 
     * (Websocket Only) Match Event Stream
     * @param param the request object
     */
    public matchEventStreamWithHttpInfo(param: APIV2SocketApiMatchEventStreamRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV2Update>> {
        return this.api.matchEventStreamWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * Connects a websocket to listen for match events. Events come as messages on the socket in near-real-time to when they occur. Each event has a timestamp in millis. Notable events are MATCH_LOAD, MATCH_START, MATCH_COMMIT, MATCH_POST, and MATCH_ABORT. The message only contains minimal data about the match involved. ApiV1 HTTP endpoints can be hit to get more details about the match. Note: The Swagger \'Try it out\' feature does not support Websockets. 
     * (Websocket Only) Match Event Stream
     * @param param the request object
     */
    public matchEventStream(param: APIV2SocketApiMatchEventStreamRequest, options?: ConfigurationOptions): Promise<ApiV2Update> {
        return this.api.matchEventStream(param.code,  options).toPromise();
    }

}

import { ObservableClass2025APIApi } from "./ObservableAPI.js";
import { Class2025APIApiRequestFactory, Class2025APIApiResponseProcessor} from "../apis/Class2025APIApi.js";

export interface Class2025APIApiGetElimsSeasonMatchDetailsRequest {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof Class2025APIApigetElimsSeasonMatchDetails
     */
    code: string
    /**
     * The match name
     * Defaults to: undefined
     * @type string
     * @memberof Class2025APIApigetElimsSeasonMatchDetails
     */
    name: string
}

export interface Class2025APIApiGetSeasonEventFullRequest {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof Class2025APIApigetSeasonEventFull
     */
    code: string
}

export interface Class2025APIApiGetSeasonMatchDetailsRequest {
    /**
     * The event code
     * Defaults to: undefined
     * @type string
     * @memberof Class2025APIApigetSeasonMatchDetails
     */
    code: string
    /**
     * The match number
     * Defaults to: undefined
     * @type number
     * @memberof Class2025APIApigetSeasonMatchDetails
     */
    match: number
}

export class ObjectClass2025APIApi {
    private api: ObservableClass2025APIApi

    public constructor(configuration: Configuration, requestFactory?: Class2025APIApiRequestFactory, responseProcessor?: Class2025APIApiResponseProcessor) {
        this.api = new ObservableClass2025APIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * INTO THE DEEP game specific data.
     * Gets the match scoring details for an elims match
     * @param param the request object
     */
    public getElimsSeasonMatchDetailsWithHttpInfo(param: Class2025APIApiGetElimsSeasonMatchDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiSeasonSpecificMatchDetailed>> {
        return this.api.getElimsSeasonMatchDetailsWithHttpInfo(param.code, param.name,  options).toPromise();
    }

    /**
     * INTO THE DEEP game specific data.
     * Gets the match scoring details for an elims match
     * @param param the request object
     */
    public getElimsSeasonMatchDetails(param: Class2025APIApiGetElimsSeasonMatchDetailsRequest, options?: ConfigurationOptions): Promise<ApiSeasonSpecificMatchDetailed> {
        return this.api.getElimsSeasonMatchDetails(param.code, param.name,  options).toPromise();
    }

    /**
     * This returns a complete list of the INTO THE DEEP specific scores for an event as would be gained by querying all of the separate API routes. This route is intended only to be queried once when a client loads for the purposes of caching the current state. The rate limit on this route and the <code>/api/v2/events/{code}/full/</code> is 4 requests every 30 minutes combined. The point is not for a client to query this route that frequently, but rather to provide some margin of error in case the client must reboot and refresh the cache. This endpoint cannot be hit while a match is in the RANDOMIZED state and will return HTTP <code>503</code> if so. The amount of data returned is very large, about 165kB for a 32 team event.
     * Gets Full INTO THE DEEP Specific Event Details
     * @param param the request object
     */
    public getSeasonEventFullWithHttpInfo(param: Class2025APIApiGetSeasonEventFullRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiV1FullSeasonSpecificEvent>> {
        return this.api.getSeasonEventFullWithHttpInfo(param.code,  options).toPromise();
    }

    /**
     * This returns a complete list of the INTO THE DEEP specific scores for an event as would be gained by querying all of the separate API routes. This route is intended only to be queried once when a client loads for the purposes of caching the current state. The rate limit on this route and the <code>/api/v2/events/{code}/full/</code> is 4 requests every 30 minutes combined. The point is not for a client to query this route that frequently, but rather to provide some margin of error in case the client must reboot and refresh the cache. This endpoint cannot be hit while a match is in the RANDOMIZED state and will return HTTP <code>503</code> if so. The amount of data returned is very large, about 165kB for a 32 team event.
     * Gets Full INTO THE DEEP Specific Event Details
     * @param param the request object
     */
    public getSeasonEventFull(param: Class2025APIApiGetSeasonEventFullRequest, options?: ConfigurationOptions): Promise<ApiV1FullSeasonSpecificEvent> {
        return this.api.getSeasonEventFull(param.code,  options).toPromise();
    }

    /**
     * INTO THE DEEP game specific data.
     * Gets the match scoring details.
     * @param param the request object
     */
    public getSeasonMatchDetailsWithHttpInfo(param: Class2025APIApiGetSeasonMatchDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiSeasonSpecificMatchDetailed>> {
        return this.api.getSeasonMatchDetailsWithHttpInfo(param.code, param.match,  options).toPromise();
    }

    /**
     * INTO THE DEEP game specific data.
     * Gets the match scoring details.
     * @param param the request object
     */
    public getSeasonMatchDetails(param: Class2025APIApiGetSeasonMatchDetailsRequest, options?: ConfigurationOptions): Promise<ApiSeasonSpecificMatchDetailed> {
        return this.api.getSeasonMatchDetails(param.code, param.match,  options).toPromise();
    }

}
