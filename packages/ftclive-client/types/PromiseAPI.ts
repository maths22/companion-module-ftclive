import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.js';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration.js'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware.js';

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
import { ObservableAPIKeyManagementApi } from './ObservableAPI.js';

import { APIKeyManagementApiRequestFactory, APIKeyManagementApiResponseProcessor} from "../apis/APIKeyManagementApi.js";
export class PromiseAPIKeyManagementApi {
    private api: ObservableAPIKeyManagementApi

    public constructor(
        configuration: Configuration,
        requestFactory?: APIKeyManagementApiRequestFactory,
        responseProcessor?: APIKeyManagementApiResponseProcessor
    ) {
        this.api = new ObservableAPIKeyManagementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This will immediately return the active status of the specified key.
     * Checks the status of the key requested
     * @param authorization The key to check the status of.
     */
    public keyCheckWithHttpInfo(authorization: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1KeyStatus>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.keyCheckWithHttpInfo(authorization, observableOptions);
        return result.toPromise();
    }

    /**
     * This will immediately return the active status of the specified key.
     * Checks the status of the key requested
     * @param authorization The key to check the status of.
     */
    public keyCheck(authorization: string, _options?: PromiseConfigurationOptions): Promise<ApiV1KeyStatus> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.keyCheck(authorization, observableOptions);
        return result.toPromise();
    }

    /**
     * Must include the name of the application making the request by specifying the `name` param in the POST. This name will be displayed to the scorekeeper to validate the key. This will immediately return a key, but the key will not be valid until the scorekeeper approves the request. The status of the key can be checked with /apiv1/keycheck/. Once receiving the key, the application can pass the key as the Authorization header of the HTTP requests. Once the key is active, the rate limit will be increased for the specified key. 
     * Requests a key to be granted for an increase rate limit.
     * @param name The name of the program requesting the key.
     */
    public keyRequestWithHttpInfo(name: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1Key>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.keyRequestWithHttpInfo(name, observableOptions);
        return result.toPromise();
    }

    /**
     * Must include the name of the application making the request by specifying the `name` param in the POST. This name will be displayed to the scorekeeper to validate the key. This will immediately return a key, but the key will not be valid until the scorekeeper approves the request. The status of the key can be checked with /apiv1/keycheck/. Once receiving the key, the application can pass the key as the Authorization header of the HTTP requests. Once the key is active, the rate limit will be increased for the specified key. 
     * Requests a key to be granted for an increase rate limit.
     * @param name The name of the program requesting the key.
     */
    public keyRequest(name: string, _options?: PromiseConfigurationOptions): Promise<ApiV1Key> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.keyRequest(name, observableOptions);
        return result.toPromise();
    }

    /**
     * This request will return once the scorekeeper has activated the specified key, or immediately if the key is already active.
     * Waits until the specified key becomes active.
     * @param authorization The key to wait until it is valid for.
     */
    public keyWaitWithHttpInfo(authorization: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1KeyStatus>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.keyWaitWithHttpInfo(authorization, observableOptions);
        return result.toPromise();
    }

    /**
     * This request will return once the scorekeeper has activated the specified key, or immediately if the key is already active.
     * Waits until the specified key becomes active.
     * @param authorization The key to wait until it is valid for.
     */
    public keyWait(authorization: string, _options?: PromiseConfigurationOptions): Promise<ApiV1KeyStatus> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.keyWait(authorization, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAPIV1Api } from './ObservableAPI.js';

import { APIV1ApiRequestFactory, APIV1ApiResponseProcessor} from "../apis/APIV1Api.js";
export class PromiseAPIV1Api {
    private api: ObservableAPIV1Api

    public constructor(
        configuration: Configuration,
        requestFactory?: APIV1ApiRequestFactory,
        responseProcessor?: APIV1ApiResponseProcessor
    ) {
        this.api = new ObservableAPIV1Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of matches currently loaded for play.
     * Gets Active Matches
     * @param code The event code
     */
    public getActiveMatchesWithHttpInfo(code: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1ActiveMatchList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getActiveMatchesWithHttpInfo(code, observableOptions);
        return result.toPromise();
    }

    /**
     * List of matches currently loaded for play.
     * Gets Active Matches
     * @param code The event code
     */
    public getActiveMatches(code: string, _options?: PromiseConfigurationOptions): Promise<ApiV1ActiveMatchList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getActiveMatches(code, observableOptions);
        return result.toPromise();
    }

    /**
     * The elimination alliances.
     * Gets Alliances
     * @param code The event code
     */
    public getAlliancesWithHttpInfo(code: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1ElimsAllianceList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlliancesWithHttpInfo(code, observableOptions);
        return result.toPromise();
    }

    /**
     * The elimination alliances.
     * Gets Alliances
     * @param code The event code
     */
    public getAlliances(code: string, _options?: PromiseConfigurationOptions): Promise<ApiV1ElimsAllianceList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAlliances(code, observableOptions);
        return result.toPromise();
    }

    /**
     * A list of teams defined by team numbers participating in any given event.
     * Gets list of teams competing at an event
     * @param code The event code
     */
    public getCompetingTeamsWithHttpInfo(code: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1TeamList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCompetingTeamsWithHttpInfo(code, observableOptions);
        return result.toPromise();
    }

    /**
     * A list of teams defined by team numbers participating in any given event.
     * Gets list of teams competing at an event
     * @param code The event code
     */
    public getCompetingTeams(code: string, _options?: PromiseConfigurationOptions): Promise<ApiV1TeamList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getCompetingTeams(code, observableOptions);
        return result.toPromise();
    }

    /**
     * A detailed description of an event for any given event code.
     * Gets an event
     * @param code The event code
     */
    public getEventWithHttpInfo(code: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1Event>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEventWithHttpInfo(code, observableOptions);
        return result.toPromise();
    }

    /**
     * A detailed description of an event for any given event code.
     * Gets an event
     * @param code The event code
     */
    public getEvent(code: string, _options?: PromiseConfigurationOptions): Promise<ApiV1Event> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEvent(code, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a detailed description of a team with a given number competing at a given event. This will return the team info as it was when the event occurred. 
     * Gets event-specific team info
     * @param code The event code
     * @param number The team\&#39;s number
     */
    public getEventTeamInfoWithHttpInfo(code: string, number: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1Team>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEventTeamInfoWithHttpInfo(code, number, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a detailed description of a team with a given number competing at a given event. This will return the team info as it was when the event occurred. 
     * Gets event-specific team info
     * @param code The event code
     * @param number The team\&#39;s number
     */
    public getEventTeamInfo(code: string, number: number, _options?: PromiseConfigurationOptions): Promise<ApiV1Team> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEventTeamInfo(code, number, observableOptions);
        return result.toPromise();
    }

    /**
     * A list of all event codes that this instance of the FTCLive server knows about.
     * Gets list of events
     */
    public getEventsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1EventList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEventsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * A list of all event codes that this instance of the FTCLive server knows about.
     * Gets list of events
     */
    public getEvents(_options?: PromiseConfigurationOptions): Promise<ApiV1EventList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEvents(observableOptions);
        return result.toPromise();
    }

    /**
     * Results for a match that has been played. NO_SUCH_MATCH indicates either an invalid match number or the match has not been played yet.
     * Gets Qualification Match
     * @param code The event code
     * @param number The match number
     * @param [ifModifiedSince] GMT time of last hit
     */
    public getMatchWithHttpInfo(code: string, number: number, ifModifiedSince?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1MatchDetailed>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMatchWithHttpInfo(code, number, ifModifiedSince, observableOptions);
        return result.toPromise();
    }

    /**
     * Results for a match that has been played. NO_SUCH_MATCH indicates either an invalid match number or the match has not been played yet.
     * Gets Qualification Match
     * @param code The event code
     * @param number The match number
     * @param [ifModifiedSince] GMT time of last hit
     */
    public getMatch(code: string, number: number, ifModifiedSince?: string, _options?: PromiseConfigurationOptions): Promise<ApiV1MatchDetailed> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMatch(code, number, ifModifiedSince, observableOptions);
        return result.toPromise();
    }

    /**
     * The Qualification match list for a given event. If matchmaker has not been run when this is requested the match list will be empty.
     * Gets Qualification match list
     * @param code The event code
     * @param [ifModifiedSince] GMT time of last hit
     */
    public getMatchesWithHttpInfo(code: string, ifModifiedSince?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1MatchBrief>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMatchesWithHttpInfo(code, ifModifiedSince, observableOptions);
        return result.toPromise();
    }

    /**
     * The Qualification match list for a given event. If matchmaker has not been run when this is requested the match list will be empty.
     * Gets Qualification match list
     * @param code The event code
     * @param [ifModifiedSince] GMT time of last hit
     */
    public getMatches(code: string, ifModifiedSince?: string, _options?: PromiseConfigurationOptions): Promise<ApiV1MatchBrief> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getMatches(code, ifModifiedSince, observableOptions);
        return result.toPromise();
    }

    /**
     * A list of rankings for the event. Clients should understand that rankings are rather static and schedule their polling appropriately. 
     * Gets Rankings
     * @param code The event code
     */
    public getRankingsWithHttpInfo(code: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1RankingList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRankingsWithHttpInfo(code, observableOptions);
        return result.toPromise();
    }

    /**
     * A list of rankings for the event. Clients should understand that rankings are rather static and schedule their polling appropriately. 
     * Gets Rankings
     * @param code The event code
     */
    public getRankings(code: string, _options?: PromiseConfigurationOptions): Promise<ApiV1RankingList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRankings(code, observableOptions);
        return result.toPromise();
    }

    /**
     * A list of combined league rankings for all leagues present at an event. Clients should understand that rankings are rather static and schedule their polling appropriately. 
     * Gets Rankings Combined
     * @param code The event code
     */
    public getRankingsCombinedWithHttpInfo(code: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1RankingList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRankingsCombinedWithHttpInfo(code, observableOptions);
        return result.toPromise();
    }

    /**
     * A list of combined league rankings for all leagues present at an event. Clients should understand that rankings are rather static and schedule their polling appropriately. 
     * Gets Rankings Combined
     * @param code The event code
     */
    public getRankingsCombined(code: string, _options?: PromiseConfigurationOptions): Promise<ApiV1RankingList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getRankingsCombined(code, observableOptions);
        return result.toPromise();
    }

    /**
     * A detailed description of a team for any given team number.
     * Gets a team\'s info.
     * @param team The team number
     */
    public getTeamWithHttpInfo(team: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1Team>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTeamWithHttpInfo(team, observableOptions);
        return result.toPromise();
    }

    /**
     * A detailed description of a team for any given team number.
     * Gets a team\'s info.
     * @param team The team number
     */
    public getTeam(team: number, _options?: PromiseConfigurationOptions): Promise<ApiV1Team> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTeam(team, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the team status tracking data. This data should match what appears on the status display. The status is one of NONE, IN_PROGRESS, FAIL, PASS, READY, LATE, VERY_LATE. 
     * Gets Team Status
     * @param code The event code
     */
    public getTeamStatusWithHttpInfo(code: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1StatusList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTeamStatusWithHttpInfo(code, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the team status tracking data. This data should match what appears on the status display. The status is one of NONE, IN_PROGRESS, FAIL, PASS, READY, LATE, VERY_LATE. 
     * Gets Team Status
     * @param code The event code
     */
    public getTeamStatus(code: string, _options?: PromiseConfigurationOptions): Promise<ApiV1StatusList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTeamStatus(code, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the wifi assignment for a specific team.
     * Gets Team Wifi Assignments
     * @param code The event code
     * @param team The team number
     */
    public getTeamWifiAssignmentWithHttpInfo(code: string, team: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1WifiAssignment>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTeamWifiAssignmentWithHttpInfo(code, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the wifi assignment for a specific team.
     * Gets Team Wifi Assignments
     * @param code The event code
     * @param team The team number
     */
    public getTeamWifiAssignment(code: string, team: number, _options?: PromiseConfigurationOptions): Promise<ApiV1WifiAssignment> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTeamWifiAssignment(code, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns all team numbers that have registered with FIRST as of the last sync to the FIRST registration database for this release of FTCLive. This is a very long list. Applications that want this data should query once upon startup and then never again. The packaged team list will always be returned. 
     * Gets list of teams
     */
    public getTeamsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1TeamList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTeamsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns all team numbers that have registered with FIRST as of the last sync to the FIRST registration database for this release of FTCLive. This is a very long list. Applications that want this data should query once upon startup and then never again. The packaged team list will always be returned. 
     * Gets list of teams
     */
    public getTeams(_options?: PromiseConfigurationOptions): Promise<ApiV1TeamList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getTeams(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the list of team wifi channel assignments once it is published.
     * Gets Team Wifi Assignments
     * @param code The event code
     */
    public getWifiAssignmentsWithHttpInfo(code: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1WifiAssignmentList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getWifiAssignmentsWithHttpInfo(code, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the list of team wifi channel assignments once it is published.
     * Gets Team Wifi Assignments
     * @param code The event code
     */
    public getWifiAssignments(code: string, _options?: PromiseConfigurationOptions): Promise<ApiV1WifiAssignmentList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getWifiAssignments(code, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the version of the scoring system software.
     * Gets the version of the scoring system.
     */
    public versionWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1Version>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.versionWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the version of the scoring system software.
     * Gets the version of the scoring system.
     */
    public version(_options?: PromiseConfigurationOptions): Promise<ApiV1Version> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.version(observableOptions);
        return result.toPromise();
    }


}



import { ObservableAPIV2Api } from './ObservableAPI.js';

import { APIV2ApiRequestFactory, APIV2ApiResponseProcessor} from "../apis/APIV2Api.js";
export class PromiseAPIV2Api {
    private api: ObservableAPIV2Api

    public constructor(
        configuration: Configuration,
        requestFactory?: APIV2ApiRequestFactory,
        responseProcessor?: APIV2ApiResponseProcessor
    ) {
        this.api = new ObservableAPIV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of award winners that have been presented. The list changes as awards are <em>presented</em>. Award winners are shown in this list once they have been publicly presented. For individual awards, the team affiliation may or may not be included. For most awards, the winner is series=1, second place is 2, third place is 3. 
     * Gets Awards
     * @param code The event code
     */
    public getAwardsWithHttpInfo(code: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV2AwardList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAwardsWithHttpInfo(code, observableOptions);
        return result.toPromise();
    }

    /**
     * List of award winners that have been presented. The list changes as awards are <em>presented</em>. Award winners are shown in this list once they have been publicly presented. For individual awards, the team affiliation may or may not be included. For most awards, the winner is series=1, second place is 2, third place is 3. 
     * Gets Awards
     * @param code The event code
     */
    public getAwards(code: string, _options?: PromiseConfigurationOptions): Promise<ApiV2AwardList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getAwards(code, observableOptions);
        return result.toPromise();
    }

    /**
     * Results for a match that has been played. NO_SUCH_MATCH indicates either an invalid match number or the match has not been played yet. 
     * Gets Elimination Match
     * @param code The event code
     * @param name The match name (in lowercase)
     * @param [ifModifiedSince] GMT time of last hit
     */
    public getElimMatchWithHttpInfo(code: string, name: string, ifModifiedSince?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1MatchDetailed>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getElimMatchWithHttpInfo(code, name, ifModifiedSince, observableOptions);
        return result.toPromise();
    }

    /**
     * Results for a match that has been played. NO_SUCH_MATCH indicates either an invalid match number or the match has not been played yet. 
     * Gets Elimination Match
     * @param code The event code
     * @param name The match name (in lowercase)
     * @param [ifModifiedSince] GMT time of last hit
     */
    public getElimMatch(code: string, name: string, ifModifiedSince?: string, _options?: PromiseConfigurationOptions): Promise<ApiV1MatchDetailed> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getElimMatch(code, name, ifModifiedSince, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns an array of all elimination matches currently scheduled. Does not return all possible matches, only those that are guaranteed to occur. 
     * Gets All Elims
     * @param code The event code
     */
    public getElimsMatchesV2WithHttpInfo(code: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1MatchList>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getElimsMatchesV2WithHttpInfo(code, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns an array of all elimination matches currently scheduled. Does not return all possible matches, only those that are guaranteed to occur. 
     * Gets All Elims
     * @param code The event code
     */
    public getElimsMatchesV2(code: string, _options?: PromiseConfigurationOptions): Promise<ApiV1MatchList> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getElimsMatchesV2(code, observableOptions);
        return result.toPromise();
    }

    /**
     * This returns a complete snapshot of the event as would be gained by querying all of the separate API routes. This route is intended only to be queried once when a client loads for the purposes of caching the current state. The rate limit on this route and the `/api/{season}/v1/events/{code}/full/` is 4 requests every 30 minutes combined. The point is not for a client to query this route that frequently, but rather to provide some margin of error in case the client must reboot and refresh the cache. This endpoint cannot be hit while a match is in the RANDOMIZED state and will return HTTP `503` if so. The amount of data returned is very large, about 75kB for a 32 team event. 
     * Gets Full Event Details
     * @param code The event code
     */
    public getEventFullWithHttpInfo(code: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV2FullEvent>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEventFullWithHttpInfo(code, observableOptions);
        return result.toPromise();
    }

    /**
     * This returns a complete snapshot of the event as would be gained by querying all of the separate API routes. This route is intended only to be queried once when a client loads for the purposes of caching the current state. The rate limit on this route and the `/api/{season}/v1/events/{code}/full/` is 4 requests every 30 minutes combined. The point is not for a client to query this route that frequently, but rather to provide some margin of error in case the client must reboot and refresh the cache. This endpoint cannot be hit while a match is in the RANDOMIZED state and will return HTTP `503` if so. The amount of data returned is very large, about 75kB for a 32 team event. 
     * Gets Full Event Details
     * @param code The event code
     */
    public getEventFull(code: string, _options?: PromiseConfigurationOptions): Promise<ApiV2FullEvent> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getEventFull(code, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAPIV2SocketApi } from './ObservableAPI.js';

import { APIV2SocketApiRequestFactory, APIV2SocketApiResponseProcessor} from "../apis/APIV2SocketApi.js";
export class PromiseAPIV2SocketApi {
    private api: ObservableAPIV2SocketApi

    public constructor(
        configuration: Configuration,
        requestFactory?: APIV2SocketApiRequestFactory,
        responseProcessor?: APIV2SocketApiResponseProcessor
    ) {
        this.api = new ObservableAPIV2SocketApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Connects a websocket to listen for match events. Events come as messages on the socket in near-real-time to when they occur. Each event has a timestamp in millis. Notable events are MATCH_LOAD, MATCH_START, MATCH_COMMIT, MATCH_POST, and MATCH_ABORT. The message only contains minimal data about the match involved. ApiV1 HTTP endpoints can be hit to get more details about the match. Note: The Swagger \'Try it out\' feature does not support Websockets. 
     * (Websocket Only) Match Event Stream
     * @param code The event code
     */
    public matchEventStreamWithHttpInfo(code: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV2Update>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.matchEventStreamWithHttpInfo(code, observableOptions);
        return result.toPromise();
    }

    /**
     * Connects a websocket to listen for match events. Events come as messages on the socket in near-real-time to when they occur. Each event has a timestamp in millis. Notable events are MATCH_LOAD, MATCH_START, MATCH_COMMIT, MATCH_POST, and MATCH_ABORT. The message only contains minimal data about the match involved. ApiV1 HTTP endpoints can be hit to get more details about the match. Note: The Swagger \'Try it out\' feature does not support Websockets. 
     * (Websocket Only) Match Event Stream
     * @param code The event code
     */
    public matchEventStream(code: string, _options?: PromiseConfigurationOptions): Promise<ApiV2Update> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.matchEventStream(code, observableOptions);
        return result.toPromise();
    }


}



import { ObservableClass2025APIApi } from './ObservableAPI.js';

import { Class2025APIApiRequestFactory, Class2025APIApiResponseProcessor} from "../apis/Class2025APIApi.js";
export class PromiseClass2025APIApi {
    private api: ObservableClass2025APIApi

    public constructor(
        configuration: Configuration,
        requestFactory?: Class2025APIApiRequestFactory,
        responseProcessor?: Class2025APIApiResponseProcessor
    ) {
        this.api = new ObservableClass2025APIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * INTO THE DEEP game specific data.
     * Gets the match scoring details for an elims match
     * @param code The event code
     * @param name The match name
     */
    public getElimsSeasonMatchDetailsWithHttpInfo(code: string, name: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiSeasonSpecificMatchDetailed>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getElimsSeasonMatchDetailsWithHttpInfo(code, name, observableOptions);
        return result.toPromise();
    }

    /**
     * INTO THE DEEP game specific data.
     * Gets the match scoring details for an elims match
     * @param code The event code
     * @param name The match name
     */
    public getElimsSeasonMatchDetails(code: string, name: string, _options?: PromiseConfigurationOptions): Promise<ApiSeasonSpecificMatchDetailed> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getElimsSeasonMatchDetails(code, name, observableOptions);
        return result.toPromise();
    }

    /**
     * This returns a complete list of the INTO THE DEEP specific scores for an event as would be gained by querying all of the separate API routes. This route is intended only to be queried once when a client loads for the purposes of caching the current state. The rate limit on this route and the <code>/api/v2/events/{code}/full/</code> is 4 requests every 30 minutes combined. The point is not for a client to query this route that frequently, but rather to provide some margin of error in case the client must reboot and refresh the cache. This endpoint cannot be hit while a match is in the RANDOMIZED state and will return HTTP <code>503</code> if so. The amount of data returned is very large, about 165kB for a 32 team event.
     * Gets Full INTO THE DEEP Specific Event Details
     * @param code The event code
     */
    public getSeasonEventFullWithHttpInfo(code: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiV1FullSeasonSpecificEvent>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSeasonEventFullWithHttpInfo(code, observableOptions);
        return result.toPromise();
    }

    /**
     * This returns a complete list of the INTO THE DEEP specific scores for an event as would be gained by querying all of the separate API routes. This route is intended only to be queried once when a client loads for the purposes of caching the current state. The rate limit on this route and the <code>/api/v2/events/{code}/full/</code> is 4 requests every 30 minutes combined. The point is not for a client to query this route that frequently, but rather to provide some margin of error in case the client must reboot and refresh the cache. This endpoint cannot be hit while a match is in the RANDOMIZED state and will return HTTP <code>503</code> if so. The amount of data returned is very large, about 165kB for a 32 team event.
     * Gets Full INTO THE DEEP Specific Event Details
     * @param code The event code
     */
    public getSeasonEventFull(code: string, _options?: PromiseConfigurationOptions): Promise<ApiV1FullSeasonSpecificEvent> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSeasonEventFull(code, observableOptions);
        return result.toPromise();
    }

    /**
     * INTO THE DEEP game specific data.
     * Gets the match scoring details.
     * @param code The event code
     * @param match The match number
     */
    public getSeasonMatchDetailsWithHttpInfo(code: string, match: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiSeasonSpecificMatchDetailed>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSeasonMatchDetailsWithHttpInfo(code, match, observableOptions);
        return result.toPromise();
    }

    /**
     * INTO THE DEEP game specific data.
     * Gets the match scoring details.
     * @param code The event code
     * @param match The match number
     */
    public getSeasonMatchDetails(code: string, match: number, _options?: PromiseConfigurationOptions): Promise<ApiSeasonSpecificMatchDetailed> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.getSeasonMatchDetails(code, match, observableOptions);
        return result.toPromise();
    }


}



