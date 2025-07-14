# .APIV2Api

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAwards**](APIV2Api.md#getAwards) | **GET** /api/v2/events/{code}/awards/ | Gets Awards
[**getElimMatch**](APIV2Api.md#getElimMatch) | **GET** /api/v2/events/{code}/elims/{name}/ | Gets Elimination Match
[**getElimsMatchesV2**](APIV2Api.md#getElimsMatchesV2) | **GET** /api/v2/events/{code}/elims/ | Gets All Elims
[**getEventFull**](APIV2Api.md#getEventFull) | **GET** /api/v2/events/{code}/full/ | Gets Full Event Details


# **getAwards**
> ApiV2AwardList getAwards()

List of award winners that have been presented. The list changes as awards are <em>presented</em>. Award winners are shown in this list once they have been publicly presented. For individual awards, the team affiliation may or may not be included. For most awards, the winner is series=1, second place is 2, third place is 3. 

### Example


```typescript
import { createConfiguration, APIV2Api } from '';
import type { APIV2ApiGetAwardsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIV2Api(configuration);

const request: APIV2ApiGetAwardsRequest = {
    // The event code
  code: "code_example",
};

const data = await apiInstance.getAwards(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined


### Return type

**ApiV2AwardList**

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

# **getElimMatch**
> ApiV1MatchDetailed getElimMatch()

Results for a match that has been played. NO_SUCH_MATCH indicates either an invalid match number or the match has not been played yet. 

### Example


```typescript
import { createConfiguration, APIV2Api } from '';
import type { APIV2ApiGetElimMatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIV2Api(configuration);

const request: APIV2ApiGetElimMatchRequest = {
    // The event code
  code: "code_example",
    // The match name (in lowercase)
  name: "name_example",
    // GMT time of last hit (optional)
  ifModifiedSince: "If-Modified-Since_example",
};

const data = await apiInstance.getElimMatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined
 **name** | [**string**] | The match name (in lowercase) | defaults to undefined
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
**404** | No such event |  -  |
**503** | Eliminations not started |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getElimsMatchesV2**
> ApiV1MatchList getElimsMatchesV2()

Returns an array of all elimination matches currently scheduled. Does not return all possible matches, only those that are guaranteed to occur. 

### Example


```typescript
import { createConfiguration, APIV2Api } from '';
import type { APIV2ApiGetElimsMatchesV2Request } from '';

const configuration = createConfiguration();
const apiInstance = new APIV2Api(configuration);

const request: APIV2ApiGetElimsMatchesV2Request = {
    // The event code
  code: "code_example",
};

const data = await apiInstance.getElimsMatchesV2(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined


### Return type

**ApiV1MatchList**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**503** | Eliminations not started |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEventFull**
> ApiV2FullEvent getEventFull()

This returns a complete snapshot of the event as would be gained by querying all of the separate API routes. This route is intended only to be queried once when a client loads for the purposes of caching the current state. The rate limit on this route and the `/api/{season}/v1/events/{code}/full/` is 4 requests every 30 minutes combined. The point is not for a client to query this route that frequently, but rather to provide some margin of error in case the client must reboot and refresh the cache. This endpoint cannot be hit while a match is in the RANDOMIZED state and will return HTTP `503` if so. The amount of data returned is very large, about 75kB for a 32 team event. 

### Example


```typescript
import { createConfiguration, APIV2Api } from '';
import type { APIV2ApiGetEventFullRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIV2Api(configuration);

const request: APIV2ApiGetEventFullRequest = {
    // The event code
  code: "code_example",
};

const data = await apiInstance.getEventFull(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined


### Return type

**ApiV2FullEvent**

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
**503** | This request cannot be completed because a match is about to start. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


