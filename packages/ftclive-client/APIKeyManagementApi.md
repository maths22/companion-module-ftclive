# .APIKeyManagementApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**keyCheck**](APIKeyManagementApi.md#keyCheck) | **GET** /api/v1/keycheck/ | Checks the status of the key requested
[**keyRequest**](APIKeyManagementApi.md#keyRequest) | **POST** /api/v1/keyrequest/ | Requests a key to be granted for an increase rate limit.
[**keyWait**](APIKeyManagementApi.md#keyWait) | **GET** /api/v1/keywait/ | Waits until the specified key becomes active.


# **keyCheck**
> ApiV1KeyStatus keyCheck()

This will immediately return the active status of the specified key.

### Example


```typescript
import { createConfiguration, APIKeyManagementApi } from '';
import type { APIKeyManagementApiKeyCheckRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIKeyManagementApi(configuration);

const request: APIKeyManagementApiKeyCheckRequest = {
    // The key to check the status of.
  authorization: "Authorization_example",
};

const data = await apiInstance.keyCheck(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**string**] | The key to check the status of. | defaults to undefined


### Return type

**ApiV1KeyStatus**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Key not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **keyRequest**
> ApiV1Key keyRequest()

Must include the name of the application making the request by specifying the `name` param in the POST. This name will be displayed to the scorekeeper to validate the key. This will immediately return a key, but the key will not be valid until the scorekeeper approves the request. The status of the key can be checked with /apiv1/keycheck/. Once receiving the key, the application can pass the key as the Authorization header of the HTTP requests. Once the key is active, the rate limit will be increased for the specified key. 

### Example


```typescript
import { createConfiguration, APIKeyManagementApi } from '';
import type { APIKeyManagementApiKeyRequestRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIKeyManagementApi(configuration);

const request: APIKeyManagementApiKeyRequestRequest = {
    // The name of the program requesting the key.
  name: "name_example",
};

const data = await apiInstance.keyRequest(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | The name of the program requesting the key. | defaults to undefined


### Return type

**ApiV1Key**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Must include &#x60;name&#x60; as a parameter to be displayed to the scorekeeper |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **keyWait**
> ApiV1KeyStatus keyWait()

This request will return once the scorekeeper has activated the specified key, or immediately if the key is already active.

### Example


```typescript
import { createConfiguration, APIKeyManagementApi } from '';
import type { APIKeyManagementApiKeyWaitRequest } from '';

const configuration = createConfiguration();
const apiInstance = new APIKeyManagementApi(configuration);

const request: APIKeyManagementApiKeyWaitRequest = {
    // The key to wait until it is valid for.
  authorization: "Authorization_example",
};

const data = await apiInstance.keyWait(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | [**string**] | The key to wait until it is valid for. | defaults to undefined


### Return type

**ApiV1KeyStatus**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Key not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


