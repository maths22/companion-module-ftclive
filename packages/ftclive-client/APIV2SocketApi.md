# .APIV2SocketApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**matchEventStream**](APIV2SocketApi.md#matchEventStream) | **GET** /api/v2/stream/ | (Websocket Only) Match Event Stream


# **matchEventStream**
> ApiV2Update matchEventStream()

Connects a websocket to listen for match events. Events come as messages on the socket in near-real-time to when they occur. Each event has a timestamp in millis. Notable events are MATCH_LOAD, MATCH_START, MATCH_COMMIT, MATCH_POST, and MATCH_ABORT. The message only contains minimal data about the match involved. ApiV1 HTTP endpoints can be hit to get more details about the match. Note: The Swagger \'Try it out\' feature does not support Websockets. 

### Example


```typescript
import { createConfiguration, APIV2SocketApi } from '';
import type { APIV2SocketApiMatchEventStreamRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIV2SocketApi(configuration);

const request: APIV2SocketApiMatchEventStreamRequest = {
    // The event code
  code: "code_example",
};

const data = await apiInstance.matchEventStream(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | The event code | defaults to undefined


### Return type

**ApiV2Update**

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


