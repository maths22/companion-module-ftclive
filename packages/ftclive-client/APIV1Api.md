# .APIV1Api

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActiveMatches**](APIV1Api.md#getActiveMatches) | **GET** /api/v1/events/{code}/matches/active/ | Gets Active Matches
[**getAlliances**](APIV1Api.md#getAlliances) | **GET** /api/v1/events/{code}/elim/alliances/ | Gets Alliances
[**getCompetingTeams**](APIV1Api.md#getCompetingTeams) | **GET** /api/v1/events/{code}/teams/ | Gets list of teams competing at an event
[**getEvent**](APIV1Api.md#getEvent) | **GET** /api/v1/events/{code}/ | Gets an event
[**getEventTeamInfo**](APIV1Api.md#getEventTeamInfo) | **GET** /api/v1/events/{code}/teams/{number}/ | Gets event-specific team info
[**getEvents**](APIV1Api.md#getEvents) | **GET** /api/v1/events/ | Gets list of events
[**getMatch**](APIV1Api.md#getMatch) | **GET** /api/v1/events/{code}/matches/{number}/ | Gets Qualification Match
[**getMatches**](APIV1Api.md#getMatches) | **GET** /api/v1/events/{code}/matches/ | Gets Qualification match list
[**getRankings**](APIV1Api.md#getRankings) | **GET** /api/v1/events/{code}/rankings/ | Gets Rankings
[**getRankingsCombined**](APIV1Api.md#getRankingsCombined) | **GET** /api/v1/events/{code}/rankings/combined/ | Gets Rankings Combined
[**getTeam**](APIV1Api.md#getTeam) | **GET** /api/v1/teams/{team}/ | Gets a team\&#39;s info.
[**getTeamStatus**](APIV1Api.md#getTeamStatus) | **GET** /api/v1/events/{code}/teamstatus/ | Gets Team Status
[**getTeamWifiAssignment**](APIV1Api.md#getTeamWifiAssignment) | **GET** /api/v1/events/{code}/wifi/team/{team}/ | Gets Team Wifi Assignments
[**getTeams**](APIV1Api.md#getTeams) | **GET** /api/v1/teams/ | Gets list of teams
[**getWifiAssignments**](APIV1Api.md#getWifiAssignments) | **GET** /api/v1/events/{code}/wifi/ | Gets Team Wifi Assignments
[**version**](APIV1Api.md#version) | **GET** /api/v1/version/ | Gets the version of the scoring system.


# **getActiveMatches**
> ApiV1ActiveMatchList getActiveMatches()

List of matches currently loaded for play.

### Example


```typescript
import { createConfiguration, APIV1Api } from '';
import type { APIV1ApiGetActiveMatchesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIV1Api(configuration);

const request: APIV1ApiGetActiveMatchesRequest = {
    // The event code
  code: "code_example",
};

const data = await apiInstance.getActiveMatches(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined


### Return type

**ApiV1ActiveMatchList**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | No such event |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAlliances**
> ApiV1ElimsAllianceList getAlliances()

The elimination alliances.

### Example


```typescript
import { createConfiguration, APIV1Api } from '';
import type { APIV1ApiGetAlliancesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIV1Api(configuration);

const request: APIV1ApiGetAlliancesRequest = {
    // The event code
  code: "code_example",
};

const data = await apiInstance.getAlliances(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined


### Return type

**ApiV1ElimsAllianceList**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | No such event |  -  |
**503** | Event not yet in eliminations |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCompetingTeams**
> ApiV1TeamList getCompetingTeams()

A list of teams defined by team numbers participating in any given event.

### Example


```typescript
import { createConfiguration, APIV1Api } from '';
import type { APIV1ApiGetCompetingTeamsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIV1Api(configuration);

const request: APIV1ApiGetCompetingTeamsRequest = {
    // The event code
  code: "code_example",
};

const data = await apiInstance.getCompetingTeams(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined


### Return type

**ApiV1TeamList**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | No such event |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEvent**
> ApiV1Event getEvent()

A detailed description of an event for any given event code.

### Example


```typescript
import { createConfiguration, APIV1Api } from '';
import type { APIV1ApiGetEventRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIV1Api(configuration);

const request: APIV1ApiGetEventRequest = {
    // The event code
  code: "code_example",
};

const data = await apiInstance.getEvent(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined


### Return type

**ApiV1Event**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | No such event |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEventTeamInfo**
> ApiV1Team getEventTeamInfo()

Returns a detailed description of a team with a given number competing at a given event. This will return the team info as it was when the event occurred. 

### Example


```typescript
import { createConfiguration, APIV1Api } from '';
import type { APIV1ApiGetEventTeamInfoRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIV1Api(configuration);

const request: APIV1ApiGetEventTeamInfoRequest = {
    // The event code
  code: "code_example",
    // The team\'s number
  number: 1,
};

const data = await apiInstance.getEventTeamInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined
 **number** | [**number**] | The team\&#39;s number | defaults to undefined


### Return type

**ApiV1Team**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | No such team or event |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEvents**
> ApiV1EventList getEvents()

A list of all event codes that this instance of the FTCLive server knows about.

### Example


```typescript
import { createConfiguration, APIV1Api } from '';

const configuration = createConfiguration();
const apiInstance = new APIV1Api(configuration);

const request = {};

const data = await apiInstance.getEvents(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ApiV1EventList**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMatch**
> ApiV1MatchDetailed getMatch()

Results for a match that has been played. NO_SUCH_MATCH indicates either an invalid match number or the match has not been played yet.

### Example


```typescript
import { createConfiguration, APIV1Api } from '';
import type { APIV1ApiGetMatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIV1Api(configuration);

const request: APIV1ApiGetMatchRequest = {
    // The event code
  code: "code_example",
    // The match number
  number: 1,
    // GMT time of last hit (optional)
  ifModifiedSince: "If-Modified-Since_example",
};

const data = await apiInstance.getMatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined
 **number** | [**number**] | The match number | defaults to undefined
 **ifModifiedSince** | [**string**] | GMT time of last hit | (optional) defaults to undefined


### Return type

**ApiV1MatchDetailed**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Last-Modified - Last commit time of this match, or matchmaker run time. <br>  |
**304** | No changes since last hit |  -  |
**404** | Event or Match not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMatches**
> ApiV1MatchBrief getMatches()

The Qualification match list for a given event. If matchmaker has not been run when this is requested the match list will be empty.

### Example


```typescript
import { createConfiguration, APIV1Api } from '';
import type { APIV1ApiGetMatchesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIV1Api(configuration);

const request: APIV1ApiGetMatchesRequest = {
    // The event code
  code: "code_example",
    // GMT time of last hit (optional)
  ifModifiedSince: "If-Modified-Since_example",
};

const data = await apiInstance.getMatches(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined
 **ifModifiedSince** | [**string**] | GMT time of last hit | (optional) defaults to undefined


### Return type

**ApiV1MatchBrief**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Last-Modified - Last commit time of this match, or matchmaker run time. <br>  |
**304** | No changes since last hit |  -  |
**404** | No such event |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRankings**
> ApiV1RankingList getRankings()

A list of rankings for the event. Clients should understand that rankings are rather static and schedule their polling appropriately. 

### Example


```typescript
import { createConfiguration, APIV1Api } from '';
import type { APIV1ApiGetRankingsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIV1Api(configuration);

const request: APIV1ApiGetRankingsRequest = {
    // The event code
  code: "code_example",
};

const data = await apiInstance.getRankings(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined


### Return type

**ApiV1RankingList**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | No such event |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRankingsCombined**
> ApiV1RankingList getRankingsCombined()

A list of combined league rankings for all leagues present at an event. Clients should understand that rankings are rather static and schedule their polling appropriately. 

### Example


```typescript
import { createConfiguration, APIV1Api } from '';
import type { APIV1ApiGetRankingsCombinedRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIV1Api(configuration);

const request: APIV1ApiGetRankingsCombinedRequest = {
    // The event code
  code: "code_example",
};

const data = await apiInstance.getRankingsCombined(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined


### Return type

**ApiV1RankingList**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | No such event |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTeam**
> ApiV1Team getTeam()

A detailed description of a team for any given team number.

### Example


```typescript
import { createConfiguration, APIV1Api } from '';
import type { APIV1ApiGetTeamRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIV1Api(configuration);

const request: APIV1ApiGetTeamRequest = {
    // The team number
  team: 1,
};

const data = await apiInstance.getTeam(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team** | [**number**] | The team number | defaults to undefined


### Return type

**ApiV1Team**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Team not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTeamStatus**
> ApiV1StatusList getTeamStatus()

Returns the team status tracking data. This data should match what appears on the status display. The status is one of NONE, IN_PROGRESS, FAIL, PASS, READY, LATE, VERY_LATE. 

### Example


```typescript
import { createConfiguration, APIV1Api } from '';
import type { APIV1ApiGetTeamStatusRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIV1Api(configuration);

const request: APIV1ApiGetTeamStatusRequest = {
    // The event code
  code: "code_example",
};

const data = await apiInstance.getTeamStatus(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined


### Return type

**ApiV1StatusList**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | No such event |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTeamWifiAssignment**
> ApiV1WifiAssignment getTeamWifiAssignment()

Returns the wifi assignment for a specific team.

### Example


```typescript
import { createConfiguration, APIV1Api } from '';
import type { APIV1ApiGetTeamWifiAssignmentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIV1Api(configuration);

const request: APIV1ApiGetTeamWifiAssignmentRequest = {
    // The event code
  code: "code_example",
    // The team number
  team: 1,
};

const data = await apiInstance.getTeamWifiAssignment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined
 **team** | [**number**] | The team number | defaults to undefined


### Return type

**ApiV1WifiAssignment**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | No such or team event |  -  |
**503** | Wifi assignments not published |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTeams**
> ApiV1TeamList getTeams()

Returns all team numbers that have registered with FIRST as of the last sync to the FIRST registration database for this release of FTCLive. This is a very long list. Applications that want this data should query once upon startup and then never again. The packaged team list will always be returned. 

### Example


```typescript
import { createConfiguration, APIV1Api } from '';

const configuration = createConfiguration();
const apiInstance = new APIV1Api(configuration);

const request = {};

const data = await apiInstance.getTeams(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ApiV1TeamList**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWifiAssignments**
> ApiV1WifiAssignmentList getWifiAssignments()

Returns the list of team wifi channel assignments once it is published.

### Example


```typescript
import { createConfiguration, APIV1Api } from '';
import type { APIV1ApiGetWifiAssignmentsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIV1Api(configuration);

const request: APIV1ApiGetWifiAssignmentsRequest = {
    // The event code
  code: "code_example",
};

const data = await apiInstance.getWifiAssignments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined


### Return type

**ApiV1WifiAssignmentList**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | No such event |  -  |
**503** | Wifi assignments not published |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **version**
> ApiV1Version version()

Returns the version of the scoring system software.

### Example


```typescript
import { createConfiguration, APIV1Api } from '';

const configuration = createConfiguration();
const apiInstance = new APIV1Api(configuration);

const request = {};

const data = await apiInstance.version(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ApiV1Version**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


