package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"
)

var token string

func TestLoginAndGetToken(t *testing.T) {
	// Simulate a login request
	loginData := map[string]string{
		"username": "admin",
		"password": "Kt3RickS0n",
	}
	loginBody, _ := json.Marshal(loginData)
	req, err := http.NewRequest("POST", "http://localhost:8080/login", bytes.NewReader(loginBody))
	if err != nil {
		t.Fatal(err)
	}

	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()

	// Call the loginHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(loginHandler).ServeHTTP(rr, req)

	// Check the status code
	if status := rr.Code; status != http.StatusOK {
		t.Fatalf("Login handler returned wrong status code: got %v want %v", status, http.StatusOK)
	}

	// Extract token from the response body
	var tokenResponse map[string]string
	if err := json.Unmarshal(rr.Body.Bytes(), &tokenResponse); err != nil {
		t.Fatalf("Error decoding token response: %v", err)
	}
	token = tokenResponse["token"]
	fmt.Printf("The token is %s", token)
}

func TestGetAllUsersHandler(t *testing.T) {
	// Simulate a request to get all users
	req, err := http.NewRequest("GET", "/api/users", nil)
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the getAllUsersHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(getAllUsersHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
func TestCreateUserHandler(t *testing.T) {
	// Simulate a request body to create a user
	requestBody := []byte(`{
		"username": "testuser",
		"email": "testuser@example.com",
		"password": "password123"
	}`)
	// Create a new HTTP request with the request body
	req, err := http.NewRequest("POST", "/api/users/create", bytes.NewBuffer(requestBody))
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the createUserHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(createUserHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
func TestGetUserByIdHandler(t *testing.T) {
	// Simulate a request to get a user by ID
	req, err := http.NewRequest("GET", "/api/users/get?id=1", nil)
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the getUserByIdHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(getUserByIdHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
func TestUpdateUserHandler(t *testing.T) {
	// Simulate a request body to update a user
	requestBody := []byte(`{
		"id": "1",
		"username": "updateduser",
		"email": "updateduser@example.com"
	}`)
	// Create a new HTTP request with the request body
	req, err := http.NewRequest("PUT", "/api/users/update", bytes.NewBuffer(requestBody))
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the updateUserHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(updateUserHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
func TestDeleteUserHandler(t *testing.T) {
	// Simulate a request with a user ID to delete
	req, err := http.NewRequest("DELETE", "/api/users/delete?id=1", nil)
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the deleteUserHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(deleteUserHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
func TestGetAllEventsHandler(t *testing.T) {
	// Simulate a request to get all events
	req, err := http.NewRequest("GET", "/api/events", nil)
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the getAllEventsHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(getAllEventsHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
func TestCreateEventHandler(t *testing.T) {
	// Simulate a request body to create an event
	requestBody := []byte(`{
		"name": "Test Event",
		"description": "Test Description",
		"date": "2024-04-13T12:00:00Z"
	}`)
	// Create a new HTTP request with the request body
	req, err := http.NewRequest("POST", "/api/events/create", bytes.NewBuffer(requestBody))
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the createEventHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(createEventHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
func TestGetEventHandler(t *testing.T) {
	// Simulate a request to get an event by ID
	req, err := http.NewRequest("GET", "/api/events/get?id=1", nil)
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the getEventHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(getEventHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
func TestUpdateEventHandler(t *testing.T) {
	// Simulate a request body to update an event
	requestBody := []byte(`{
		"id": "1",
		"name": "Updated Test Event",
		"description": "Updated Test Description",
		"date": "2024-04-14T12:00:00Z"
	}`)
	// Create a new HTTP request with the request body
	req, err := http.NewRequest("PUT", "/api/events/update", bytes.NewBuffer(requestBody))
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the updateEventHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(updateEventHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
func TestDeleteEventHandler(t *testing.T) {
	// Simulate a request with an event ID to delete
	req, err := http.NewRequest("DELETE", "/api/events/delete?id=1", nil)
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the deleteEventHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(deleteEventHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
func TestGetAllGuestsHandler(t *testing.T) {
	// Simulate a request to get all guests
	req, err := http.NewRequest("GET", "/api/guests", nil)
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the getAllGuestsHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(getAllGuestsHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
func TestCreateGuestHandler(t *testing.T) {
	// Simulate a request body to create a guest
	requestBody := []byte(`{
		"name": "Test Guest",
		"email": "testguest@example.com"
	}`)
	// Create a new HTTP request with the request body
	req, err := http.NewRequest("POST", "/api/guests/create", bytes.NewBuffer(requestBody))
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the createGuestHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(createGuestHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
func TestGetGuestHandler(t *testing.T) {
	// Simulate a request to get a guest by ID
	req, err := http.NewRequest("GET", "/api/guests/get?id=1", nil)
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the getGuestHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(getGuestHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
func TestUpdateGuestHandler(t *testing.T) {
	// Simulate a request body to update a guest
	requestBody := []byte(`{
		"id": "1",
		"name": "Updated Test Guest",
		"email": "updatedtestguest@example.com"
	}`)
	// Create a new HTTP request with the request body
	req, err := http.NewRequest("PUT", "/api/guests/update", bytes.NewBuffer(requestBody))
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the updateGuestHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(updateGuestHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
func TestDeleteGuestHandler(t *testing.T) {
	// Simulate a request with a guest ID to delete
	req, err := http.NewRequest("DELETE", "/api/guests/delete?id=1", nil)
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the deleteGuestHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(deleteGuestHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
func TestGetAllInviteRequestsHandler(t *testing.T) {
	// Simulate a request to get all invite requests
	req, err := http.NewRequest("GET", "/api/invite-requests", nil)
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the getAllInviteRequestsHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(getAllInviteRequestsHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
func TestCreateInviteRequestHandler(t *testing.T) {
	// Simulate a request body to create an invite request
	requestBody := []byte(`{
		"eventName": "Test Event",
		"guestName": "Test Guest",
		"email": "testguest@example.com"
	}`)
	// Create a new HTTP request with the request body
	req, err := http.NewRequest("POST", "/api/invite-requests/create", bytes.NewBuffer(requestBody))
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the createInviteRequestHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(createInviteRequestHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
func TestGetInviteRequestHandler(t *testing.T) {
	// Simulate a request to get an invite request by ID
	req, err := http.NewRequest("GET", "/api/invite-requests/get?id=1", nil)
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the getInviteRequestHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(getInviteRequestHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
func TestUpdateInviteRequestHandler(t *testing.T) {
	// Simulate a request body to update an invite request
	requestBody := []byte(`{
		"id": "1",
		"status": "accepted"
	}`)
	// Create a new HTTP request with the request body
	req, err := http.NewRequest("PUT", "/api/invite-requests/update", bytes.NewBuffer(requestBody))
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the updateInviteRequestHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(updateInviteRequestHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
func TestDeleteInviteRequestHandler(t *testing.T) {
	// Simulate a request with an invite request ID to delete
	req, err := http.NewRequest("DELETE", "/api/invite-requests/delete?id=1", nil)
	if err != nil {
		t.Fatal(err)
	}
	req.Header.Set("Authorization", ""+token)
	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()
	// Call the deleteInviteRequestHandler function directly, passing in the ResponseRecorder and the Request
	http.HandlerFunc(deleteInviteRequestHandler).ServeHTTP(rr, req)
	// Check the status code
	// Parse response body as JSON
	var responseBody map[string]interface{}
	if err := json.Unmarshal(rr.Body.Bytes(), &responseBody); err != nil {
		t.Fatalf("failed to unmarshal response body: %v", err)
	}

	// Check if 'success' and 'message' fields exist in the response
	success, successExists := responseBody["success"].(bool)
	message, messageExists := responseBody["message"].(string)
	if !successExists || !messageExists {
		t.Errorf("response does not contain 'success' or 'message' fields")
	}

	fmt.Printf("Test successfully executed :: Parameters correctly appear in format response. \n  { success: %v, message: %s } \n", success, message)
}
