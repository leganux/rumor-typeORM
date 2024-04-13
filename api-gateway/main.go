package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	eventpb "api-gateway/generated/event"
	guestpb "api-gateway/generated/guest"
	inviteRequestpb "api-gateway/generated/invite_request"
	userpb "api-gateway/generated/user"
	jwt "github.com/dgrijalva/jwt-go"
	gcontext "github.com/gorilla/context"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"google.golang.org/grpc"
)

// Client connections to gRPC services

var userClient userpb.UserServiceClient
var eventClient eventpb.EventServiceClient
var guestClient guestpb.GuestServiceClient
var inviteRequestClient inviteRequestpb.InviteRequestServiceClient

var userServiceAddress = "user_service:50057"
var eventServiceAddress = "event_service:50058"
var guestServiceAddress = "guest_service:50059"
var inviteRequestServiceAddress = "guest_service:50060"

var rumorSecretKey = "rumor_secret_key"
var rumorUser = "admin"
var rumorPassword = "Kt3RickS0n"

type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

// Initialize gRPC clients
func init() {

	userConn, err := grpc.Dial(userServiceAddress, grpc.WithInsecure())
	if err != nil {
		log.Fatalf("Failed to create client connection for user server: %v", err)
	}
	userClient = userpb.NewUserServiceClient(userConn)

	inviteRequestConn, err := grpc.Dial(inviteRequestServiceAddress, grpc.WithInsecure())
	if err != nil {
		log.Fatalf("Failed to create client connection for user server: %v", err)
	}
	inviteRequestClient = inviteRequestpb.NewInviteRequestServiceClient(inviteRequestConn)

	guestConn, err := grpc.Dial(guestServiceAddress, grpc.WithInsecure())
	if err != nil {
		log.Fatalf("Failed to create client connection for user server: %v", err)
	}
	guestClient = guestpb.NewGuestServiceClient(guestConn)

	eventConn, err := grpc.Dial(eventServiceAddress, grpc.WithInsecure())
	if err != nil {
		log.Fatalf("Failed to create client connection for user server: %v", err)
	}
	eventClient = eventpb.NewEventServiceClient(eventConn)
}

func sendResponse(w http.ResponseWriter, status int, data interface{}, err error, message string) {
	response := struct {
		Status  int         `json:"status"`
		Data    interface{} `json:"data"`
		Error   string      `json:"error"`
		Success bool        `json:"success"`
		Message string      `json:"message"`
	}{
		Status:  status,
		Data:    data,
		Success: err == nil,
		Message: message,
	}

	if err != nil {
		response.Error = "Internal Server Error: " + err.Error()
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(response)
}

// user
func createUserHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	var request userpb.CreateUserRequest
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		sendResponse(w, http.StatusBadRequest, nil, err, "Invalid request body")
		return
	}

	response, err := userClient.CreateUser(context.Background(), &request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error creating user")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}
func getUserByIdHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	id := r.URL.Query().Get("id")
	if id == "" {
		sendResponse(w, http.StatusBadRequest, nil, nil, "Missing user ID")
		return
	}

	request := &userpb.FindUserByIdRequest{
		Id: id,
	}

	response, err := userClient.FindUserById(context.Background(), request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error retrieving user")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}
func updateUserHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPut {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	var request userpb.UpdateUserRequest
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		sendResponse(w, http.StatusBadRequest, nil, err, "Invalid request body")
		return
	}

	response, err := userClient.UpdateUser(context.Background(), &request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error updating user")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}
func deleteUserHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodDelete {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	id := r.URL.Query().Get("id")
	if id == "" {
		sendResponse(w, http.StatusBadRequest, nil, nil, "Missing user ID")
		return
	}

	request := &userpb.DeleteUserRequest{
		Id: id,
	}

	response, err := userClient.DeleteUser(context.Background(), request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error deleting user")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}
func getAllUsersHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	request := &userpb.FindAllUsersRequest{}

	response, err := userClient.FindAllUsers(context.Background(), request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error retrieving users")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}

// event
func createEventHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	var request eventpb.CreateEventRequest
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		sendResponse(w, http.StatusBadRequest, nil, err, "Invalid request body")
		return
	}

	response, err := eventClient.CreateEvent(context.Background(), &request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error creating event")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}
func getAllEventsHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	request := &eventpb.FindAllEventsRequest{}

	response, err := eventClient.FindAllEvents(context.Background(), request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error retrieving events")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}
func getEventHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	id := r.URL.Query().Get("id")
	if id == "" {
		sendResponse(w, http.StatusBadRequest, nil, nil, "Missing event ID")
		return
	}

	request := &eventpb.FindEventByIdRequest{
		Id: id,
	}

	response, err := eventClient.FindEventById(context.Background(), request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error retrieving event")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}
func updateEventHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPut {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	var request eventpb.UpdateEventRequest
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		sendResponse(w, http.StatusBadRequest, nil, err, "Invalid request body")
		return
	}

	response, err := eventClient.UpdateEvent(context.Background(), &request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error updating event")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}
func deleteEventHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodDelete {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	id := r.URL.Query().Get("id")
	if id == "" {
		sendResponse(w, http.StatusBadRequest, nil, nil, "Missing event ID")
		return
	}

	request := &eventpb.DeleteEventRequest{
		Id: id,
	}

	response, err := eventClient.DeleteEvent(context.Background(), request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error deleting event")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}

// guest
func createGuestHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	var request guestpb.CreateGuestRequest
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		sendResponse(w, http.StatusBadRequest, nil, err, "Invalid request body")
		return
	}

	response, err := guestClient.CreateGuest(context.Background(), &request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error creating guest")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}
func getAllGuestsHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	request := &guestpb.FindAllGuestsRequest{}

	response, err := guestClient.FindAllGuests(context.Background(), request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error retrieving guests")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}
func getGuestHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	id := r.URL.Query().Get("id")
	if id == "" {
		sendResponse(w, http.StatusBadRequest, nil, nil, "Missing guest ID")
		return
	}

	request := &guestpb.FindGuestByIdRequest{
		Id: id,
	}

	response, err := guestClient.FindGuestById(context.Background(), request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error retrieving guest")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}
func updateGuestHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPut {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	var request guestpb.UpdateGuestRequest
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		sendResponse(w, http.StatusBadRequest, nil, err, "Invalid request body")
		return
	}

	response, err := guestClient.UpdateGuest(context.Background(), &request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error updating guest")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}
func deleteGuestHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodDelete {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	id := r.URL.Query().Get("id")
	if id == "" {
		sendResponse(w, http.StatusBadRequest, nil, nil, "Missing guest ID")
		return
	}

	request := &guestpb.DeleteGuestRequest{
		Id: id,
	}

	response, err := guestClient.DeleteGuest(context.Background(), request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error deleting guest")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}

// solicitudes de invite
func createInviteRequestHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	var request inviteRequestpb.CreateInviteRequestRequest
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		sendResponse(w, http.StatusBadRequest, nil, err, "Invalid request body")
		return
	}

	response, err := inviteRequestClient.CreateInviteRequest(context.Background(), &request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error creating invite request")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}
func getAllInviteRequestsHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	request := &inviteRequestpb.FindAllInviteRequestsRequest{}

	response, err := inviteRequestClient.FindAllInviteRequests(context.Background(), request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error retrieving invite requests")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}
func getInviteRequestHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	id := r.URL.Query().Get("id")
	if id == "" {
		sendResponse(w, http.StatusBadRequest, nil, nil, "Missing invite request ID")
		return
	}

	request := &inviteRequestpb.FindInviteRequestByIdRequest{
		Id: id,
	}

	response, err := inviteRequestClient.FindInviteRequestById(context.Background(), request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error retrieving invite request")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}
func updateInviteRequestHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPut {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	var request inviteRequestpb.UpdateInviteRequestRequest
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		sendResponse(w, http.StatusBadRequest, nil, err, "Invalid request body")
		return
	}

	response, err := inviteRequestClient.UpdateInviteRequest(context.Background(), &request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error updating invite request")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}
func deleteInviteRequestHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodDelete {
		sendResponse(w, http.StatusMethodNotAllowed, nil, nil, "Method not allowed")
		return
	}

	id := r.URL.Query().Get("id")
	if id == "" {
		sendResponse(w, http.StatusBadRequest, nil, nil, "Missing invite request ID")
		return
	}

	request := &inviteRequestpb.DeleteInviteRequestRequest{
		Id: id,
	}

	response, err := inviteRequestClient.DeleteInviteRequest(context.Background(), request)
	if err != nil {
		sendResponse(w, http.StatusInternalServerError, nil, err, "Error deleting invite request")
		return
	}

	sendResponse(w, http.StatusOK, response, nil, "OK")
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.NotFound(w, r)
		return
	}

	// Construye el JSON de respuesta
	jsonResponse := map[string]interface{}{
		"message": "started correctly",
		"success": true,
	}

	// Convierte el JSON a bytes
	responseData, err := json.Marshal(jsonResponse)
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	// Establece el tipo de contenido de la respuesta como application/json
	w.Header().Set("Content-Type", "application/json")

	// Escribe la respuesta JSON
	_, err = w.Write(responseData)
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}
}
func validateTokenMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Verifica si la ruta es "/" o "/login"
		if r.URL.Path == "/" || r.URL.Path == "/login" {
			// Si es así, permite el acceso sin autenticación
			next.ServeHTTP(w, r)
			return
		}

		tokenString := r.Header.Get("Authorization")
		if tokenString == "" {
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			return
		}

		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			// Verifica el método de firma
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
			}
			return []byte(rumorSecretKey), nil
		})
		if err != nil || !token.Valid {
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			return
		}

		// Si el token es válido, almacenar el usuario en el contexto
		gcontext.Set(r, "user", token.Claims.(jwt.MapClaims)["username"])
		w.Header().Set("Content-Type", "application/json")
		// Continuar con la siguiente manejador
		next.ServeHTTP(w, r)
	})
}
func loginHandler(w http.ResponseWriter, r *http.Request) {
	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, "Error decoding JSON", http.StatusBadRequest)
		return
	}

	// Imprime la estructura User como JSON
	userJSON, err := json.Marshal(user)
	if err != nil {
		http.Error(w, "Error encoding User to JSON", http.StatusInternalServerError)
		return
	}
	fmt.Println(string(userJSON))

	// Verifica las credenciales del usuario
	if user.Username == rumorUser && user.Password == rumorPassword {
		// Crea el token JWT
		token := jwt.New(jwt.SigningMethodHS256)
		claims := token.Claims.(jwt.MapClaims)
		claims["username"] = user.Username
		claims["exp"] = time.Now().Add(time.Hour * 24).Unix() // Token expira en 24 horas

		// Firma el token JWT
		tokenString, err := token.SignedString([]byte(rumorSecretKey))
		if err != nil {
			http.Error(w, "Error signing token", http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		// Devuelve el token JWT al cliente
		json.NewEncoder(w).Encode(map[string]string{"token": tokenString})
	} else {
		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
		return
	}
}

func main() {
	// Create HTTP server

	if err := godotenv.Load(); err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}
	env := os.Getenv("ENVIRONMENT")
	secret_key := os.Getenv("SECRET_KEY")
	user := os.Getenv("AUTH_USER")
	password := os.Getenv("AUTH_PASSWORD")

	if env == "develop" {
		userServiceAddress = "localhost:50057"
	}
	if secret_key != "" {
		rumorSecretKey = secret_key
	}
	if user != "" {
		rumorUser = user
	}
	if password != "" {
		rumorPassword = password
	}

	router := mux.NewRouter()

	router.HandleFunc("/login", loginHandler).Methods("POST")
	//user
	router.HandleFunc("/api/users", getAllUsersHandler).Methods("GET")
	router.HandleFunc("/api/users/create", createUserHandler).Methods("POST")
	router.HandleFunc("/api/users/get", getUserByIdHandler).Methods("GET")
	router.HandleFunc("/api/users/update", updateUserHandler).Methods("PUT")
	router.HandleFunc("/api/users/delete", deleteUserHandler).Methods("DELETE")

	//event
	router.HandleFunc("/api/events", getAllEventsHandler).Methods("GET")
	router.HandleFunc("/api/events/create", createEventHandler).Methods("POST")
	router.HandleFunc("/api/events/get", getEventHandler).Methods("GET")
	router.HandleFunc("/api/events/update", updateEventHandler).Methods("PUT")
	router.HandleFunc("/api/events/delete", deleteEventHandler).Methods("DELETE")

	// guest
	router.HandleFunc("/api/guests", getAllGuestsHandler).Methods("GET")
	router.HandleFunc("/api/guests/create", createGuestHandler).Methods("POST")
	router.HandleFunc("/api/guests/get", getGuestHandler).Methods("GET")
	router.HandleFunc("/api/guests/update", updateGuestHandler).Methods("PUT")
	router.HandleFunc("/api/guests/delete", deleteGuestHandler).Methods("DELETE")

	//invite request
	router.HandleFunc("/api/invite-requests", getAllInviteRequestsHandler).Methods("GET")
	router.HandleFunc("/api/invite-requests/create", createInviteRequestHandler).Methods("POST")
	router.HandleFunc("/api/invite-requests/get", getInviteRequestHandler).Methods("GET")
	router.HandleFunc("/api/invite-requests/update", updateInviteRequestHandler).Methods("PUT")
	router.HandleFunc("/api/invite-requests/delete", deleteInviteRequestHandler).Methods("DELETE")

	router.HandleFunc("/", indexHandler).Methods("GET")

	// Use el middleware para validar el token JWT
	router.Use(validateTokenMiddleware)

	fmt.Println("Server listening on port 8080")
	if err := http.ListenAndServe(":8080", router); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
