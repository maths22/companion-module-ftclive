# .Class2025APIApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getElimsSeasonMatchDetails**](Class2025APIApi.md#getElimsSeasonMatchDetails) | **GET** /api/2025/v2/events/{code}/elims/{name}/ | Gets the match scoring details for an elims match
[**getSeasonEventFull**](Class2025APIApi.md#getSeasonEventFull) | **GET** /api/2025/v1/events/{code}/full/ | Gets Full INTO THE DEEP Specific Event Details
[**getSeasonMatchDetails**](Class2025APIApi.md#getSeasonMatchDetails) | **GET** /api/2025/v1/events/{code}/matches/{match}/ | Gets the match scoring details.


# **getElimsSeasonMatchDetails**
> ApiSeasonSpecificMatchDetailed getElimsSeasonMatchDetails()

INTO THE DEEP game specific data.

### Example


```typescript
import { createConfiguration, Class2025APIApi } from '';
import type { Class2025APIApiGetElimsSeasonMatchDetailsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Class2025APIApi(configuration);

const request: Class2025APIApiGetElimsSeasonMatchDetailsRequest = {
    // The event code
  code: "code_example",
    // The match name
  name: "name_example",
};

const data = await apiInstance.getElimsSeasonMatchDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined
 **name** | [**string**] | The match name | defaults to undefined


### Return type

**ApiSeasonSpecificMatchDetailed**

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
**503** | Eliminations not started |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSeasonEventFull**
> ApiV1FullSeasonSpecificEvent getSeasonEventFull()

This returns a complete list of the INTO THE DEEP specific scores for an event as would be gained by querying all of the separate API routes. This route is intended only to be queried once when a client loads for the purposes of caching the current state. The rate limit on this route and the <code>/api/v2/events/{code}/full/</code> is 4 requests every 30 minutes combined. The point is not for a client to query this route that frequently, but rather to provide some margin of error in case the client must reboot and refresh the cache. This endpoint cannot be hit while a match is in the RANDOMIZED state and will return HTTP <code>503</code> if so. The amount of data returned is very large, about 165kB for a 32 team event.

### Example


```typescript
import { createConfiguration, Class2025APIApi } from '';
import type { Class2025APIApiGetSeasonEventFullRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Class2025APIApi(configuration);

const request: Class2025APIApiGetSeasonEventFullRequest = {
    // The event code
  code: "code_example",
};

const data = await apiInstance.getSeasonEventFull(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined


### Return type

**ApiV1FullSeasonSpecificEvent**

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

# **getSeasonMatchDetails**
> ApiSeasonSpecificMatchDetailed getSeasonMatchDetails()

INTO THE DEEP game specific data.

### Example


```typescript
import { createConfiguration, Class2025APIApi } from '';
import type { Class2025APIApiGetSeasonMatchDetailsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Class2025APIApi(configuration);

const request: Class2025APIApiGetSeasonMatchDetailsRequest = {
    // The event code
  code: "code_example",
    // The match number
  match: 1,
};

const data = await apiInstance.getSeasonMatchDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined
 **match** | [**number**] | The match number | defaults to undefined


### Return type

**ApiSeasonSpecificMatchDetailed**

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


