import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.js';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration.js'
import type { Middleware } from '../middleware.js';
import { Observable, of, from } from '../rxjsStub.js';
import {mergeMap, map} from  '../rxjsStub.js';
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

import { APIKeyManagementApiRequestFactory, APIKeyManagementApiResponseProcessor} from "../apis/APIKeyManagementApi.js";
export class ObservableAPIKeyManagementApi {
    private requestFactory: APIKeyManagementApiRequestFactory;
    private responseProcessor: APIKeyManagementApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: APIKeyManagementApiRequestFactory,
        responseProcessor?: APIKeyManagementApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new APIKeyManagementApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new APIKeyManagementApiResponseProcessor();
    }

    /**
     * This will immediately return the active status of the specified key.
     * Checks the status of the key requested
     * @param authorization The key to check the status of.
     */
    public keyCheckWithHttpInfo(authorization: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV1KeyStatus>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.keyCheck(authorization, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.keyCheckWithHttpInfo(rsp)));
            }));
    }

    /**
     * This will immediately return the active status of the specified key.
     * Checks the status of the key requested
     * @param authorization The key to check the status of.
     */
    public keyCheck(authorization: string, _options?: ConfigurationOptions): Observable<ApiV1KeyStatus> {
        return this.keyCheckWithHttpInfo(authorization, _options).pipe(map((apiResponse: HttpInfo<ApiV1KeyStatus>) => apiResponse.data));
    }

    /**
     * Must include the name of the application making the request by specifying the `name` param in the POST. This name will be displayed to the scorekeeper to validate the key. This will immediately return a key, but the key will not be valid until the scorekeeper approves the request. The status of the key can be checked with /apiv1/keycheck/. Once receiving the key, the application can pass the key as the Authorization header of the HTTP requests. Once the key is active, the rate limit will be increased for the specified key. 
     * Requests a key to be granted for an increase rate limit.
     * @param name The name of the program requesting the key.
     */
    public keyRequestWithHttpInfo(name: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV1Key>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.keyRequest(name, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.keyRequestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Must include the name of the application making the request by specifying the `name` param in the POST. This name will be displayed to the scorekeeper to validate the key. This will immediately return a key, but the key will not be valid until the scorekeeper approves the request. The status of the key can be checked with /apiv1/keycheck/. Once receiving the key, the application can pass the key as the Authorization header of the HTTP requests. Once the key is active, the rate limit will be increased for the specified key. 
     * Requests a key to be granted for an increase rate limit.
     * @param name The name of the program requesting the key.
     */
    public keyRequest(name: string, _options?: ConfigurationOptions): Observable<ApiV1Key> {
        return this.keyRequestWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<ApiV1Key>) => apiResponse.data));
    }

    /**
     * This request will return once the scorekeeper has activated the specified key, or immediately if the key is already active.
     * Waits until the specified key becomes active.
     * @param authorization The key to wait until it is valid for.
     */
    public keyWaitWithHttpInfo(authorization: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV1KeyStatus>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.keyWait(authorization, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.keyWaitWithHttpInfo(rsp)));
            }));
    }

    /**
     * This request will return once the scorekeeper has activated the specified key, or immediately if the key is already active.
     * Waits until the specified key becomes active.
     * @param authorization The key to wait until it is valid for.
     */
    public keyWait(authorization: string, _options?: ConfigurationOptions): Observable<ApiV1KeyStatus> {
        return this.keyWaitWithHttpInfo(authorization, _options).pipe(map((apiResponse: HttpInfo<ApiV1KeyStatus>) => apiResponse.data));
    }

}

import { APIV1ApiRequestFactory, APIV1ApiResponseProcessor} from "../apis/APIV1Api.js";
export class ObservableAPIV1Api {
    private requestFactory: APIV1ApiRequestFactory;
    private responseProcessor: APIV1ApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: APIV1ApiRequestFactory,
        responseProcessor?: APIV1ApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new APIV1ApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new APIV1ApiResponseProcessor();
    }

    /**
     * List of matches currently loaded for play.
     * Gets Active Matches
     * @param code The event code
     */
    public getActiveMatchesWithHttpInfo(code: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV1ActiveMatchList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getActiveMatches(code, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getActiveMatchesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List of matches currently loaded for play.
     * Gets Active Matches
     * @param code The event code
     */
    public getActiveMatches(code: string, _options?: ConfigurationOptions): Observable<ApiV1ActiveMatchList> {
        return this.getActiveMatchesWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<ApiV1ActiveMatchList>) => apiResponse.data));
    }

    /**
     * The elimination alliances.
     * Gets Alliances
     * @param code The event code
     */
    public getAlliancesWithHttpInfo(code: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV1ElimsAllianceList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAlliances(code, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAlliancesWithHttpInfo(rsp)));
            }));
    }

    /**
     * The elimination alliances.
     * Gets Alliances
     * @param code The event code
     */
    public getAlliances(code: string, _options?: ConfigurationOptions): Observable<ApiV1ElimsAllianceList> {
        return this.getAlliancesWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<ApiV1ElimsAllianceList>) => apiResponse.data));
    }

    /**
     * A list of teams defined by team numbers participating in any given event.
     * Gets list of teams competing at an event
     * @param code The event code
     */
    public getCompetingTeamsWithHttpInfo(code: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV1TeamList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getCompetingTeams(code, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCompetingTeamsWithHttpInfo(rsp)));
            }));
    }

    /**
     * A list of teams defined by team numbers participating in any given event.
     * Gets list of teams competing at an event
     * @param code The event code
     */
    public getCompetingTeams(code: string, _options?: ConfigurationOptions): Observable<ApiV1TeamList> {
        return this.getCompetingTeamsWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<ApiV1TeamList>) => apiResponse.data));
    }

    /**
     * A detailed description of an event for any given event code.
     * Gets an event
     * @param code The event code
     */
    public getEventWithHttpInfo(code: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV1Event>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getEvent(code, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * A detailed description of an event for any given event code.
     * Gets an event
     * @param code The event code
     */
    public getEvent(code: string, _options?: ConfigurationOptions): Observable<ApiV1Event> {
        return this.getEventWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<ApiV1Event>) => apiResponse.data));
    }

    /**
     * Returns a detailed description of a team with a given number competing at a given event. This will return the team info as it was when the event occurred. 
     * Gets event-specific team info
     * @param code The event code
     * @param number The team\&#39;s number
     */
    public getEventTeamInfoWithHttpInfo(code: string, number: number, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV1Team>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getEventTeamInfo(code, number, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEventTeamInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a detailed description of a team with a given number competing at a given event. This will return the team info as it was when the event occurred. 
     * Gets event-specific team info
     * @param code The event code
     * @param number The team\&#39;s number
     */
    public getEventTeamInfo(code: string, number: number, _options?: ConfigurationOptions): Observable<ApiV1Team> {
        return this.getEventTeamInfoWithHttpInfo(code, number, _options).pipe(map((apiResponse: HttpInfo<ApiV1Team>) => apiResponse.data));
    }

    /**
     * A list of all event codes that this instance of the FTCLive server knows about.
     * Gets list of events
     */
    public getEventsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ApiV1EventList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getEvents(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * A list of all event codes that this instance of the FTCLive server knows about.
     * Gets list of events
     */
    public getEvents(_options?: ConfigurationOptions): Observable<ApiV1EventList> {
        return this.getEventsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ApiV1EventList>) => apiResponse.data));
    }

    /**
     * Results for a match that has been played. NO_SUCH_MATCH indicates either an invalid match number or the match has not been played yet.
     * Gets Qualification Match
     * @param code The event code
     * @param number The match number
     * @param [ifModifiedSince] GMT time of last hit
     */
    public getMatchWithHttpInfo(code: string, number: number, ifModifiedSince?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV1MatchDetailed>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMatch(code, number, ifModifiedSince, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Results for a match that has been played. NO_SUCH_MATCH indicates either an invalid match number or the match has not been played yet.
     * Gets Qualification Match
     * @param code The event code
     * @param number The match number
     * @param [ifModifiedSince] GMT time of last hit
     */
    public getMatch(code: string, number: number, ifModifiedSince?: string, _options?: ConfigurationOptions): Observable<ApiV1MatchDetailed> {
        return this.getMatchWithHttpInfo(code, number, ifModifiedSince, _options).pipe(map((apiResponse: HttpInfo<ApiV1MatchDetailed>) => apiResponse.data));
    }

    /**
     * The Qualification match list for a given event. If matchmaker has not been run when this is requested the match list will be empty.
     * Gets Qualification match list
     * @param code The event code
     * @param [ifModifiedSince] GMT time of last hit
     */
    public getMatchesWithHttpInfo(code: string, ifModifiedSince?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV1MatchBrief>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getMatches(code, ifModifiedSince, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMatchesWithHttpInfo(rsp)));
            }));
    }

    /**
     * The Qualification match list for a given event. If matchmaker has not been run when this is requested the match list will be empty.
     * Gets Qualification match list
     * @param code The event code
     * @param [ifModifiedSince] GMT time of last hit
     */
    public getMatches(code: string, ifModifiedSince?: string, _options?: ConfigurationOptions): Observable<ApiV1MatchBrief> {
        return this.getMatchesWithHttpInfo(code, ifModifiedSince, _options).pipe(map((apiResponse: HttpInfo<ApiV1MatchBrief>) => apiResponse.data));
    }

    /**
     * A list of rankings for the event. Clients should understand that rankings are rather static and schedule their polling appropriately. 
     * Gets Rankings
     * @param code The event code
     */
    public getRankingsWithHttpInfo(code: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV1RankingList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRankings(code, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRankingsWithHttpInfo(rsp)));
            }));
    }

    /**
     * A list of rankings for the event. Clients should understand that rankings are rather static and schedule their polling appropriately. 
     * Gets Rankings
     * @param code The event code
     */
    public getRankings(code: string, _options?: ConfigurationOptions): Observable<ApiV1RankingList> {
        return this.getRankingsWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<ApiV1RankingList>) => apiResponse.data));
    }

    /**
     * A list of combined league rankings for all leagues present at an event. Clients should understand that rankings are rather static and schedule their polling appropriately. 
     * Gets Rankings Combined
     * @param code The event code
     */
    public getRankingsCombinedWithHttpInfo(code: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV1RankingList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getRankingsCombined(code, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRankingsCombinedWithHttpInfo(rsp)));
            }));
    }

    /**
     * A list of combined league rankings for all leagues present at an event. Clients should understand that rankings are rather static and schedule their polling appropriately. 
     * Gets Rankings Combined
     * @param code The event code
     */
    public getRankingsCombined(code: string, _options?: ConfigurationOptions): Observable<ApiV1RankingList> {
        return this.getRankingsCombinedWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<ApiV1RankingList>) => apiResponse.data));
    }

    /**
     * A detailed description of a team for any given team number.
     * Gets a team\'s info.
     * @param team The team number
     */
    public getTeamWithHttpInfo(team: number, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV1Team>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTeam(team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTeamWithHttpInfo(rsp)));
            }));
    }

    /**
     * A detailed description of a team for any given team number.
     * Gets a team\'s info.
     * @param team The team number
     */
    public getTeam(team: number, _options?: ConfigurationOptions): Observable<ApiV1Team> {
        return this.getTeamWithHttpInfo(team, _options).pipe(map((apiResponse: HttpInfo<ApiV1Team>) => apiResponse.data));
    }

    /**
     * Returns the team status tracking data. This data should match what appears on the status display. The status is one of NONE, IN_PROGRESS, FAIL, PASS, READY, LATE, VERY_LATE. 
     * Gets Team Status
     * @param code The event code
     */
    public getTeamStatusWithHttpInfo(code: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV1StatusList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTeamStatus(code, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTeamStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the team status tracking data. This data should match what appears on the status display. The status is one of NONE, IN_PROGRESS, FAIL, PASS, READY, LATE, VERY_LATE. 
     * Gets Team Status
     * @param code The event code
     */
    public getTeamStatus(code: string, _options?: ConfigurationOptions): Observable<ApiV1StatusList> {
        return this.getTeamStatusWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<ApiV1StatusList>) => apiResponse.data));
    }

    /**
     * Returns the wifi assignment for a specific team.
     * Gets Team Wifi Assignments
     * @param code The event code
     * @param team The team number
     */
    public getTeamWifiAssignmentWithHttpInfo(code: string, team: number, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV1WifiAssignment>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTeamWifiAssignment(code, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTeamWifiAssignmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the wifi assignment for a specific team.
     * Gets Team Wifi Assignments
     * @param code The event code
     * @param team The team number
     */
    public getTeamWifiAssignment(code: string, team: number, _options?: ConfigurationOptions): Observable<ApiV1WifiAssignment> {
        return this.getTeamWifiAssignmentWithHttpInfo(code, team, _options).pipe(map((apiResponse: HttpInfo<ApiV1WifiAssignment>) => apiResponse.data));
    }

    /**
     * Returns all team numbers that have registered with FIRST as of the last sync to the FIRST registration database for this release of FTCLive. This is a very long list. Applications that want this data should query once upon startup and then never again. The packaged team list will always be returned. 
     * Gets list of teams
     */
    public getTeamsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ApiV1TeamList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getTeams(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTeamsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all team numbers that have registered with FIRST as of the last sync to the FIRST registration database for this release of FTCLive. This is a very long list. Applications that want this data should query once upon startup and then never again. The packaged team list will always be returned. 
     * Gets list of teams
     */
    public getTeams(_options?: ConfigurationOptions): Observable<ApiV1TeamList> {
        return this.getTeamsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ApiV1TeamList>) => apiResponse.data));
    }

    /**
     * Returns the list of team wifi channel assignments once it is published.
     * Gets Team Wifi Assignments
     * @param code The event code
     */
    public getWifiAssignmentsWithHttpInfo(code: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV1WifiAssignmentList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getWifiAssignments(code, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWifiAssignmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the list of team wifi channel assignments once it is published.
     * Gets Team Wifi Assignments
     * @param code The event code
     */
    public getWifiAssignments(code: string, _options?: ConfigurationOptions): Observable<ApiV1WifiAssignmentList> {
        return this.getWifiAssignmentsWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<ApiV1WifiAssignmentList>) => apiResponse.data));
    }

    /**
     * Returns the version of the scoring system software.
     * Gets the version of the scoring system.
     */
    public versionWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<ApiV1Version>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.version(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.versionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the version of the scoring system software.
     * Gets the version of the scoring system.
     */
    public version(_options?: ConfigurationOptions): Observable<ApiV1Version> {
        return this.versionWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ApiV1Version>) => apiResponse.data));
    }

}

import { APIV2ApiRequestFactory, APIV2ApiResponseProcessor} from "../apis/APIV2Api.js";
export class ObservableAPIV2Api {
    private requestFactory: APIV2ApiRequestFactory;
    private responseProcessor: APIV2ApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: APIV2ApiRequestFactory,
        responseProcessor?: APIV2ApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new APIV2ApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new APIV2ApiResponseProcessor();
    }

    /**
     * List of award winners that have been presented. The list changes as awards are <em>presented</em>. Award winners are shown in this list once they have been publicly presented. For individual awards, the team affiliation may or may not be included. For most awards, the winner is series=1, second place is 2, third place is 3. 
     * Gets Awards
     * @param code The event code
     */
    public getAwardsWithHttpInfo(code: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV2AwardList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getAwards(code, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAwardsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List of award winners that have been presented. The list changes as awards are <em>presented</em>. Award winners are shown in this list once they have been publicly presented. For individual awards, the team affiliation may or may not be included. For most awards, the winner is series=1, second place is 2, third place is 3. 
     * Gets Awards
     * @param code The event code
     */
    public getAwards(code: string, _options?: ConfigurationOptions): Observable<ApiV2AwardList> {
        return this.getAwardsWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<ApiV2AwardList>) => apiResponse.data));
    }

    /**
     * Results for a match that has been played. NO_SUCH_MATCH indicates either an invalid match number or the match has not been played yet. 
     * Gets Elimination Match
     * @param code The event code
     * @param name The match name (in lowercase)
     * @param [ifModifiedSince] GMT time of last hit
     */
    public getElimMatchWithHttpInfo(code: string, name: string, ifModifiedSince?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV1MatchDetailed>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getElimMatch(code, name, ifModifiedSince, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getElimMatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Results for a match that has been played. NO_SUCH_MATCH indicates either an invalid match number or the match has not been played yet. 
     * Gets Elimination Match
     * @param code The event code
     * @param name The match name (in lowercase)
     * @param [ifModifiedSince] GMT time of last hit
     */
    public getElimMatch(code: string, name: string, ifModifiedSince?: string, _options?: ConfigurationOptions): Observable<ApiV1MatchDetailed> {
        return this.getElimMatchWithHttpInfo(code, name, ifModifiedSince, _options).pipe(map((apiResponse: HttpInfo<ApiV1MatchDetailed>) => apiResponse.data));
    }

    /**
     * Returns an array of all elimination matches currently scheduled. Does not return all possible matches, only those that are guaranteed to occur. 
     * Gets All Elims
     * @param code The event code
     */
    public getElimsMatchesV2WithHttpInfo(code: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV1MatchList>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getElimsMatchesV2(code, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getElimsMatchesV2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns an array of all elimination matches currently scheduled. Does not return all possible matches, only those that are guaranteed to occur. 
     * Gets All Elims
     * @param code The event code
     */
    public getElimsMatchesV2(code: string, _options?: ConfigurationOptions): Observable<ApiV1MatchList> {
        return this.getElimsMatchesV2WithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<ApiV1MatchList>) => apiResponse.data));
    }

    /**
     * This returns a complete snapshot of the event as would be gained by querying all of the separate API routes. This route is intended only to be queried once when a client loads for the purposes of caching the current state. The rate limit on this route and the `/api/{season}/v1/events/{code}/full/` is 4 requests every 30 minutes combined. The point is not for a client to query this route that frequently, but rather to provide some margin of error in case the client must reboot and refresh the cache. This endpoint cannot be hit while a match is in the RANDOMIZED state and will return HTTP `503` if so. The amount of data returned is very large, about 75kB for a 32 team event. 
     * Gets Full Event Details
     * @param code The event code
     */
    public getEventFullWithHttpInfo(code: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV2FullEvent>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getEventFull(code, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEventFullWithHttpInfo(rsp)));
            }));
    }

    /**
     * This returns a complete snapshot of the event as would be gained by querying all of the separate API routes. This route is intended only to be queried once when a client loads for the purposes of caching the current state. The rate limit on this route and the `/api/{season}/v1/events/{code}/full/` is 4 requests every 30 minutes combined. The point is not for a client to query this route that frequently, but rather to provide some margin of error in case the client must reboot and refresh the cache. This endpoint cannot be hit while a match is in the RANDOMIZED state and will return HTTP `503` if so. The amount of data returned is very large, about 75kB for a 32 team event. 
     * Gets Full Event Details
     * @param code The event code
     */
    public getEventFull(code: string, _options?: ConfigurationOptions): Observable<ApiV2FullEvent> {
        return this.getEventFullWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<ApiV2FullEvent>) => apiResponse.data));
    }

}

import { APIV2SocketApiRequestFactory, APIV2SocketApiResponseProcessor} from "../apis/APIV2SocketApi.js";
export class ObservableAPIV2SocketApi {
    private requestFactory: APIV2SocketApiRequestFactory;
    private responseProcessor: APIV2SocketApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: APIV2SocketApiRequestFactory,
        responseProcessor?: APIV2SocketApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new APIV2SocketApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new APIV2SocketApiResponseProcessor();
    }

    /**
     * Connects a websocket to listen for match events. Events come as messages on the socket in near-real-time to when they occur. Each event has a timestamp in millis. Notable events are MATCH_LOAD, MATCH_START, MATCH_COMMIT, MATCH_POST, and MATCH_ABORT. The message only contains minimal data about the match involved. ApiV1 HTTP endpoints can be hit to get more details about the match. Note: The Swagger \'Try it out\' feature does not support Websockets. 
     * (Websocket Only) Match Event Stream
     * @param code The event code
     */
    public matchEventStreamWithHttpInfo(code: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV2Update>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.matchEventStream(code, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.matchEventStreamWithHttpInfo(rsp)));
            }));
    }

    /**
     * Connects a websocket to listen for match events. Events come as messages on the socket in near-real-time to when they occur. Each event has a timestamp in millis. Notable events are MATCH_LOAD, MATCH_START, MATCH_COMMIT, MATCH_POST, and MATCH_ABORT. The message only contains minimal data about the match involved. ApiV1 HTTP endpoints can be hit to get more details about the match. Note: The Swagger \'Try it out\' feature does not support Websockets. 
     * (Websocket Only) Match Event Stream
     * @param code The event code
     */
    public matchEventStream(code: string, _options?: ConfigurationOptions): Observable<ApiV2Update> {
        return this.matchEventStreamWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<ApiV2Update>) => apiResponse.data));
    }

}

import { Class2025APIApiRequestFactory, Class2025APIApiResponseProcessor} from "../apis/Class2025APIApi.js";
export class ObservableClass2025APIApi {
    private requestFactory: Class2025APIApiRequestFactory;
    private responseProcessor: Class2025APIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: Class2025APIApiRequestFactory,
        responseProcessor?: Class2025APIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new Class2025APIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new Class2025APIApiResponseProcessor();
    }

    /**
     * INTO THE DEEP game specific data.
     * Gets the match scoring details for an elims match
     * @param code The event code
     * @param name The match name
     */
    public getElimsSeasonMatchDetailsWithHttpInfo(code: string, name: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiSeasonSpecificMatchDetailed>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getElimsSeasonMatchDetails(code, name, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getElimsSeasonMatchDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * INTO THE DEEP game specific data.
     * Gets the match scoring details for an elims match
     * @param code The event code
     * @param name The match name
     */
    public getElimsSeasonMatchDetails(code: string, name: string, _options?: ConfigurationOptions): Observable<ApiSeasonSpecificMatchDetailed> {
        return this.getElimsSeasonMatchDetailsWithHttpInfo(code, name, _options).pipe(map((apiResponse: HttpInfo<ApiSeasonSpecificMatchDetailed>) => apiResponse.data));
    }

    /**
     * This returns a complete list of the INTO THE DEEP specific scores for an event as would be gained by querying all of the separate API routes. This route is intended only to be queried once when a client loads for the purposes of caching the current state. The rate limit on this route and the <code>/api/v2/events/{code}/full/</code> is 4 requests every 30 minutes combined. The point is not for a client to query this route that frequently, but rather to provide some margin of error in case the client must reboot and refresh the cache. This endpoint cannot be hit while a match is in the RANDOMIZED state and will return HTTP <code>503</code> if so. The amount of data returned is very large, about 165kB for a 32 team event.
     * Gets Full INTO THE DEEP Specific Event Details
     * @param code The event code
     */
    public getSeasonEventFullWithHttpInfo(code: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiV1FullSeasonSpecificEvent>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSeasonEventFull(code, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSeasonEventFullWithHttpInfo(rsp)));
            }));
    }

    /**
     * This returns a complete list of the INTO THE DEEP specific scores for an event as would be gained by querying all of the separate API routes. This route is intended only to be queried once when a client loads for the purposes of caching the current state. The rate limit on this route and the <code>/api/v2/events/{code}/full/</code> is 4 requests every 30 minutes combined. The point is not for a client to query this route that frequently, but rather to provide some margin of error in case the client must reboot and refresh the cache. This endpoint cannot be hit while a match is in the RANDOMIZED state and will return HTTP <code>503</code> if so. The amount of data returned is very large, about 165kB for a 32 team event.
     * Gets Full INTO THE DEEP Specific Event Details
     * @param code The event code
     */
    public getSeasonEventFull(code: string, _options?: ConfigurationOptions): Observable<ApiV1FullSeasonSpecificEvent> {
        return this.getSeasonEventFullWithHttpInfo(code, _options).pipe(map((apiResponse: HttpInfo<ApiV1FullSeasonSpecificEvent>) => apiResponse.data));
    }

    /**
     * INTO THE DEEP game specific data.
     * Gets the match scoring details.
     * @param code The event code
     * @param match The match number
     */
    public getSeasonMatchDetailsWithHttpInfo(code: string, match: number, _options?: ConfigurationOptions): Observable<HttpInfo<ApiSeasonSpecificMatchDetailed>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.getSeasonMatchDetails(code, match, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSeasonMatchDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * INTO THE DEEP game specific data.
     * Gets the match scoring details.
     * @param code The event code
     * @param match The match number
     */
    public getSeasonMatchDetails(code: string, match: number, _options?: ConfigurationOptions): Observable<ApiSeasonSpecificMatchDetailed> {
        return this.getSeasonMatchDetailsWithHttpInfo(code, match, _options).pipe(map((apiResponse: HttpInfo<ApiSeasonSpecificMatchDetailed>) => apiResponse.data));
    }

}
