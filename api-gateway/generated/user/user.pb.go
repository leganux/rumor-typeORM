// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        v3.20.3
// source: user.proto

package user

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type User struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          *string `protobuf:"bytes,1,opt,name=id,proto3,oneof" json:"id,omitempty"`
	Name        string  `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Email       string  `protobuf:"bytes,3,opt,name=email,proto3" json:"email,omitempty"`
	DateOfBirth string  `protobuf:"bytes,4,opt,name=date_of_birth,json=dateOfBirth,proto3" json:"date_of_birth,omitempty"`
}

func (x *User) Reset() {
	*x = User{}
	if protoimpl.UnsafeEnabled {
		mi := &file_user_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *User) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*User) ProtoMessage() {}

func (x *User) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use User.ProtoReflect.Descriptor instead.
func (*User) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{0}
}

func (x *User) GetId() string {
	if x != nil && x.Id != nil {
		return *x.Id
	}
	return ""
}

func (x *User) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *User) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *User) GetDateOfBirth() string {
	if x != nil {
		return x.DateOfBirth
	}
	return ""
}

type FindAllUsersRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *FindAllUsersRequest) Reset() {
	*x = FindAllUsersRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_user_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FindAllUsersRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FindAllUsersRequest) ProtoMessage() {}

func (x *FindAllUsersRequest) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FindAllUsersRequest.ProtoReflect.Descriptor instead.
func (*FindAllUsersRequest) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{1}
}

type FindAllUsersResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Users []*User `protobuf:"bytes,1,rep,name=users,proto3" json:"users,omitempty"`
}

func (x *FindAllUsersResponse) Reset() {
	*x = FindAllUsersResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_user_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FindAllUsersResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FindAllUsersResponse) ProtoMessage() {}

func (x *FindAllUsersResponse) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FindAllUsersResponse.ProtoReflect.Descriptor instead.
func (*FindAllUsersResponse) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{2}
}

func (x *FindAllUsersResponse) GetUsers() []*User {
	if x != nil {
		return x.Users
	}
	return nil
}

type CreateUserRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name        string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Email       string `protobuf:"bytes,2,opt,name=email,proto3" json:"email,omitempty"`
	DateOfBirth string `protobuf:"bytes,3,opt,name=date_of_birth,json=dateOfBirth,proto3" json:"date_of_birth,omitempty"`
}

func (x *CreateUserRequest) Reset() {
	*x = CreateUserRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_user_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateUserRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateUserRequest) ProtoMessage() {}

func (x *CreateUserRequest) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateUserRequest.ProtoReflect.Descriptor instead.
func (*CreateUserRequest) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{3}
}

func (x *CreateUserRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *CreateUserRequest) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *CreateUserRequest) GetDateOfBirth() string {
	if x != nil {
		return x.DateOfBirth
	}
	return ""
}

type CreateUserResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          *string `protobuf:"bytes,1,opt,name=id,proto3,oneof" json:"id,omitempty"`
	Name        string  `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Email       string  `protobuf:"bytes,3,opt,name=email,proto3" json:"email,omitempty"`
	DateOfBirth string  `protobuf:"bytes,4,opt,name=date_of_birth,json=dateOfBirth,proto3" json:"date_of_birth,omitempty"`
}

func (x *CreateUserResponse) Reset() {
	*x = CreateUserResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_user_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateUserResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateUserResponse) ProtoMessage() {}

func (x *CreateUserResponse) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateUserResponse.ProtoReflect.Descriptor instead.
func (*CreateUserResponse) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{4}
}

func (x *CreateUserResponse) GetId() string {
	if x != nil && x.Id != nil {
		return *x.Id
	}
	return ""
}

func (x *CreateUserResponse) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *CreateUserResponse) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *CreateUserResponse) GetDateOfBirth() string {
	if x != nil {
		return x.DateOfBirth
	}
	return ""
}

type FindUserByIdRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *FindUserByIdRequest) Reset() {
	*x = FindUserByIdRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_user_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FindUserByIdRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FindUserByIdRequest) ProtoMessage() {}

func (x *FindUserByIdRequest) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FindUserByIdRequest.ProtoReflect.Descriptor instead.
func (*FindUserByIdRequest) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{5}
}

func (x *FindUserByIdRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type FindUserByIdResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          *string `protobuf:"bytes,1,opt,name=id,proto3,oneof" json:"id,omitempty"`
	Name        string  `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Email       string  `protobuf:"bytes,3,opt,name=email,proto3" json:"email,omitempty"`
	DateOfBirth string  `protobuf:"bytes,4,opt,name=date_of_birth,json=dateOfBirth,proto3" json:"date_of_birth,omitempty"`
}

func (x *FindUserByIdResponse) Reset() {
	*x = FindUserByIdResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_user_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FindUserByIdResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FindUserByIdResponse) ProtoMessage() {}

func (x *FindUserByIdResponse) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FindUserByIdResponse.ProtoReflect.Descriptor instead.
func (*FindUserByIdResponse) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{6}
}

func (x *FindUserByIdResponse) GetId() string {
	if x != nil && x.Id != nil {
		return *x.Id
	}
	return ""
}

func (x *FindUserByIdResponse) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *FindUserByIdResponse) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *FindUserByIdResponse) GetDateOfBirth() string {
	if x != nil {
		return x.DateOfBirth
	}
	return ""
}

type UpdateUserRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name        string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Email       string `protobuf:"bytes,3,opt,name=email,proto3" json:"email,omitempty"`
	DateOfBirth string `protobuf:"bytes,4,opt,name=date_of_birth,json=dateOfBirth,proto3" json:"date_of_birth,omitempty"`
}

func (x *UpdateUserRequest) Reset() {
	*x = UpdateUserRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_user_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateUserRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateUserRequest) ProtoMessage() {}

func (x *UpdateUserRequest) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateUserRequest.ProtoReflect.Descriptor instead.
func (*UpdateUserRequest) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{7}
}

func (x *UpdateUserRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *UpdateUserRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *UpdateUserRequest) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *UpdateUserRequest) GetDateOfBirth() string {
	if x != nil {
		return x.DateOfBirth
	}
	return ""
}

type UpdateUserResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          *string `protobuf:"bytes,1,opt,name=id,proto3,oneof" json:"id,omitempty"`
	Name        string  `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Email       string  `protobuf:"bytes,3,opt,name=email,proto3" json:"email,omitempty"`
	DateOfBirth string  `protobuf:"bytes,4,opt,name=date_of_birth,json=dateOfBirth,proto3" json:"date_of_birth,omitempty"`
}

func (x *UpdateUserResponse) Reset() {
	*x = UpdateUserResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_user_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateUserResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateUserResponse) ProtoMessage() {}

func (x *UpdateUserResponse) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateUserResponse.ProtoReflect.Descriptor instead.
func (*UpdateUserResponse) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{8}
}

func (x *UpdateUserResponse) GetId() string {
	if x != nil && x.Id != nil {
		return *x.Id
	}
	return ""
}

func (x *UpdateUserResponse) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *UpdateUserResponse) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *UpdateUserResponse) GetDateOfBirth() string {
	if x != nil {
		return x.DateOfBirth
	}
	return ""
}

type DeleteUserRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *DeleteUserRequest) Reset() {
	*x = DeleteUserRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_user_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteUserRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteUserRequest) ProtoMessage() {}

func (x *DeleteUserRequest) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteUserRequest.ProtoReflect.Descriptor instead.
func (*DeleteUserRequest) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{9}
}

func (x *DeleteUserRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type DeleteUserResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          *string `protobuf:"bytes,1,opt,name=id,proto3,oneof" json:"id,omitempty"`
	Name        string  `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Email       string  `protobuf:"bytes,3,opt,name=email,proto3" json:"email,omitempty"`
	DateOfBirth string  `protobuf:"bytes,4,opt,name=date_of_birth,json=dateOfBirth,proto3" json:"date_of_birth,omitempty"`
}

func (x *DeleteUserResponse) Reset() {
	*x = DeleteUserResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_user_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteUserResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteUserResponse) ProtoMessage() {}

func (x *DeleteUserResponse) ProtoReflect() protoreflect.Message {
	mi := &file_user_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteUserResponse.ProtoReflect.Descriptor instead.
func (*DeleteUserResponse) Descriptor() ([]byte, []int) {
	return file_user_proto_rawDescGZIP(), []int{10}
}

func (x *DeleteUserResponse) GetId() string {
	if x != nil && x.Id != nil {
		return *x.Id
	}
	return ""
}

func (x *DeleteUserResponse) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *DeleteUserResponse) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *DeleteUserResponse) GetDateOfBirth() string {
	if x != nil {
		return x.DateOfBirth
	}
	return ""
}

var File_user_proto protoreflect.FileDescriptor

var file_user_proto_rawDesc = []byte{
	0x0a, 0x0a, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x04, 0x75, 0x73,
	0x65, 0x72, 0x22, 0x70, 0x0a, 0x04, 0x55, 0x73, 0x65, 0x72, 0x12, 0x13, 0x0a, 0x02, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x02, 0x69, 0x64, 0x88, 0x01, 0x01, 0x12,
	0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x22, 0x0a, 0x0d, 0x64, 0x61, 0x74,
	0x65, 0x5f, 0x6f, 0x66, 0x5f, 0x62, 0x69, 0x72, 0x74, 0x68, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0b, 0x64, 0x61, 0x74, 0x65, 0x4f, 0x66, 0x42, 0x69, 0x72, 0x74, 0x68, 0x42, 0x05, 0x0a,
	0x03, 0x5f, 0x69, 0x64, 0x22, 0x15, 0x0a, 0x13, 0x46, 0x69, 0x6e, 0x64, 0x41, 0x6c, 0x6c, 0x55,
	0x73, 0x65, 0x72, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x38, 0x0a, 0x14, 0x46,
	0x69, 0x6e, 0x64, 0x41, 0x6c, 0x6c, 0x55, 0x73, 0x65, 0x72, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x20, 0x0a, 0x05, 0x75, 0x73, 0x65, 0x72, 0x73, 0x18, 0x01, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x52, 0x05,
	0x75, 0x73, 0x65, 0x72, 0x73, 0x22, 0x61, 0x0a, 0x11, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x55,
	0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14,
	0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x65,
	0x6d, 0x61, 0x69, 0x6c, 0x12, 0x22, 0x0a, 0x0d, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x6f, 0x66, 0x5f,
	0x62, 0x69, 0x72, 0x74, 0x68, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x61, 0x74,
	0x65, 0x4f, 0x66, 0x42, 0x69, 0x72, 0x74, 0x68, 0x22, 0x7e, 0x0a, 0x12, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x13,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x02, 0x69, 0x64,
	0x88, 0x01, 0x01, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x22, 0x0a,
	0x0d, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x6f, 0x66, 0x5f, 0x62, 0x69, 0x72, 0x74, 0x68, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x61, 0x74, 0x65, 0x4f, 0x66, 0x42, 0x69, 0x72, 0x74,
	0x68, 0x42, 0x05, 0x0a, 0x03, 0x5f, 0x69, 0x64, 0x22, 0x25, 0x0a, 0x13, 0x46, 0x69, 0x6e, 0x64,
	0x55, 0x73, 0x65, 0x72, 0x42, 0x79, 0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22,
	0x80, 0x01, 0x0a, 0x14, 0x46, 0x69, 0x6e, 0x64, 0x55, 0x73, 0x65, 0x72, 0x42, 0x79, 0x49, 0x64,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x13, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x02, 0x69, 0x64, 0x88, 0x01, 0x01, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x22, 0x0a, 0x0d, 0x64, 0x61, 0x74, 0x65, 0x5f,
	0x6f, 0x66, 0x5f, 0x62, 0x69, 0x72, 0x74, 0x68, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b,
	0x64, 0x61, 0x74, 0x65, 0x4f, 0x66, 0x42, 0x69, 0x72, 0x74, 0x68, 0x42, 0x05, 0x0a, 0x03, 0x5f,
	0x69, 0x64, 0x22, 0x71, 0x0a, 0x11, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x55, 0x73, 0x65, 0x72,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x65,
	0x6d, 0x61, 0x69, 0x6c, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69,
	0x6c, 0x12, 0x22, 0x0a, 0x0d, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x6f, 0x66, 0x5f, 0x62, 0x69, 0x72,
	0x74, 0x68, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x61, 0x74, 0x65, 0x4f, 0x66,
	0x42, 0x69, 0x72, 0x74, 0x68, 0x22, 0x7e, 0x0a, 0x12, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x55,
	0x73, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x13, 0x0a, 0x02, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x02, 0x69, 0x64, 0x88, 0x01, 0x01,
	0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x22, 0x0a, 0x0d, 0x64, 0x61,
	0x74, 0x65, 0x5f, 0x6f, 0x66, 0x5f, 0x62, 0x69, 0x72, 0x74, 0x68, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0b, 0x64, 0x61, 0x74, 0x65, 0x4f, 0x66, 0x42, 0x69, 0x72, 0x74, 0x68, 0x42, 0x05,
	0x0a, 0x03, 0x5f, 0x69, 0x64, 0x22, 0x23, 0x0a, 0x11, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x55,
	0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x7e, 0x0a, 0x12, 0x44, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x13, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x02,
	0x69, 0x64, 0x88, 0x01, 0x01, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x65, 0x6d, 0x61,
	0x69, 0x6c, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x12,
	0x22, 0x0a, 0x0d, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x6f, 0x66, 0x5f, 0x62, 0x69, 0x72, 0x74, 0x68,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x61, 0x74, 0x65, 0x4f, 0x66, 0x42, 0x69,
	0x72, 0x74, 0x68, 0x42, 0x05, 0x0a, 0x03, 0x5f, 0x69, 0x64, 0x32, 0xde, 0x02, 0x0a, 0x0b, 0x55,
	0x73, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x3f, 0x0a, 0x0a, 0x43, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x55, 0x73, 0x65, 0x72, 0x12, 0x17, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x2e,
	0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x18, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x55,
	0x73, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x45, 0x0a, 0x0c, 0x46,
	0x69, 0x6e, 0x64, 0x41, 0x6c, 0x6c, 0x55, 0x73, 0x65, 0x72, 0x73, 0x12, 0x19, 0x2e, 0x75, 0x73,
	0x65, 0x72, 0x2e, 0x46, 0x69, 0x6e, 0x64, 0x41, 0x6c, 0x6c, 0x55, 0x73, 0x65, 0x72, 0x73, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1a, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x46, 0x69,
	0x6e, 0x64, 0x41, 0x6c, 0x6c, 0x55, 0x73, 0x65, 0x72, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x45, 0x0a, 0x0c, 0x46, 0x69, 0x6e, 0x64, 0x55, 0x73, 0x65, 0x72, 0x42, 0x79,
	0x49, 0x64, 0x12, 0x19, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x46, 0x69, 0x6e, 0x64, 0x55, 0x73,
	0x65, 0x72, 0x42, 0x79, 0x49, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1a, 0x2e,
	0x75, 0x73, 0x65, 0x72, 0x2e, 0x46, 0x69, 0x6e, 0x64, 0x55, 0x73, 0x65, 0x72, 0x42, 0x79, 0x49,
	0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3f, 0x0a, 0x0a, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x55, 0x73, 0x65, 0x72, 0x12, 0x17, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x55,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x18, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x55, 0x73,
	0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3f, 0x0a, 0x0a, 0x44, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x55, 0x73, 0x65, 0x72, 0x12, 0x17, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x2e,
	0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x55, 0x73, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x18, 0x2e, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x55,
	0x73, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x08, 0x5a, 0x06, 0x2e,
	0x2f, 0x75, 0x73, 0x65, 0x72, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_user_proto_rawDescOnce sync.Once
	file_user_proto_rawDescData = file_user_proto_rawDesc
)

func file_user_proto_rawDescGZIP() []byte {
	file_user_proto_rawDescOnce.Do(func() {
		file_user_proto_rawDescData = protoimpl.X.CompressGZIP(file_user_proto_rawDescData)
	})
	return file_user_proto_rawDescData
}

var file_user_proto_msgTypes = make([]protoimpl.MessageInfo, 11)
var file_user_proto_goTypes = []interface{}{
	(*User)(nil),                 // 0: user.User
	(*FindAllUsersRequest)(nil),  // 1: user.FindAllUsersRequest
	(*FindAllUsersResponse)(nil), // 2: user.FindAllUsersResponse
	(*CreateUserRequest)(nil),    // 3: user.CreateUserRequest
	(*CreateUserResponse)(nil),   // 4: user.CreateUserResponse
	(*FindUserByIdRequest)(nil),  // 5: user.FindUserByIdRequest
	(*FindUserByIdResponse)(nil), // 6: user.FindUserByIdResponse
	(*UpdateUserRequest)(nil),    // 7: user.UpdateUserRequest
	(*UpdateUserResponse)(nil),   // 8: user.UpdateUserResponse
	(*DeleteUserRequest)(nil),    // 9: user.DeleteUserRequest
	(*DeleteUserResponse)(nil),   // 10: user.DeleteUserResponse
}
var file_user_proto_depIdxs = []int32{
	0,  // 0: user.FindAllUsersResponse.users:type_name -> user.User
	3,  // 1: user.UserService.CreateUser:input_type -> user.CreateUserRequest
	1,  // 2: user.UserService.FindAllUsers:input_type -> user.FindAllUsersRequest
	5,  // 3: user.UserService.FindUserById:input_type -> user.FindUserByIdRequest
	7,  // 4: user.UserService.UpdateUser:input_type -> user.UpdateUserRequest
	9,  // 5: user.UserService.DeleteUser:input_type -> user.DeleteUserRequest
	4,  // 6: user.UserService.CreateUser:output_type -> user.CreateUserResponse
	2,  // 7: user.UserService.FindAllUsers:output_type -> user.FindAllUsersResponse
	6,  // 8: user.UserService.FindUserById:output_type -> user.FindUserByIdResponse
	8,  // 9: user.UserService.UpdateUser:output_type -> user.UpdateUserResponse
	10, // 10: user.UserService.DeleteUser:output_type -> user.DeleteUserResponse
	6,  // [6:11] is the sub-list for method output_type
	1,  // [1:6] is the sub-list for method input_type
	1,  // [1:1] is the sub-list for extension type_name
	1,  // [1:1] is the sub-list for extension extendee
	0,  // [0:1] is the sub-list for field type_name
}

func init() { file_user_proto_init() }
func file_user_proto_init() {
	if File_user_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_user_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*User); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_user_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FindAllUsersRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_user_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FindAllUsersResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_user_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateUserRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_user_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateUserResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_user_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FindUserByIdRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_user_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FindUserByIdResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_user_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateUserRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_user_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateUserResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_user_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteUserRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_user_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteUserResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_user_proto_msgTypes[0].OneofWrappers = []interface{}{}
	file_user_proto_msgTypes[4].OneofWrappers = []interface{}{}
	file_user_proto_msgTypes[6].OneofWrappers = []interface{}{}
	file_user_proto_msgTypes[8].OneofWrappers = []interface{}{}
	file_user_proto_msgTypes[10].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_user_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   11,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_user_proto_goTypes,
		DependencyIndexes: file_user_proto_depIdxs,
		MessageInfos:      file_user_proto_msgTypes,
	}.Build()
	File_user_proto = out.File
	file_user_proto_rawDesc = nil
	file_user_proto_goTypes = nil
	file_user_proto_depIdxs = nil
}
