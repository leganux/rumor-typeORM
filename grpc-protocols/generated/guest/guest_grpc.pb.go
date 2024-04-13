// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.20.3
// source: guest.proto

package guest

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	GuestService_CreateGuest_FullMethodName   = "/guest.GuestService/CreateGuest"
	GuestService_FindAllGuests_FullMethodName = "/guest.GuestService/FindAllGuests"
	GuestService_FindGuestById_FullMethodName = "/guest.GuestService/FindGuestById"
	GuestService_UpdateGuest_FullMethodName   = "/guest.GuestService/UpdateGuest"
	GuestService_DeleteGuest_FullMethodName   = "/guest.GuestService/DeleteGuest"
)

// GuestServiceClient is the client API for GuestService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type GuestServiceClient interface {
	CreateGuest(ctx context.Context, in *CreateGuestRequest, opts ...grpc.CallOption) (*CreateGuestResponse, error)
	FindAllGuests(ctx context.Context, in *FindAllGuestsRequest, opts ...grpc.CallOption) (*FindAllGuestsResponse, error)
	FindGuestById(ctx context.Context, in *FindGuestByIdRequest, opts ...grpc.CallOption) (*FindGuestByIdResponse, error)
	UpdateGuest(ctx context.Context, in *UpdateGuestRequest, opts ...grpc.CallOption) (*UpdateGuestResponse, error)
	DeleteGuest(ctx context.Context, in *DeleteGuestRequest, opts ...grpc.CallOption) (*DeleteGuestResponse, error)
}

type guestServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewGuestServiceClient(cc grpc.ClientConnInterface) GuestServiceClient {
	return &guestServiceClient{cc}
}

func (c *guestServiceClient) CreateGuest(ctx context.Context, in *CreateGuestRequest, opts ...grpc.CallOption) (*CreateGuestResponse, error) {
	out := new(CreateGuestResponse)
	err := c.cc.Invoke(ctx, GuestService_CreateGuest_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *guestServiceClient) FindAllGuests(ctx context.Context, in *FindAllGuestsRequest, opts ...grpc.CallOption) (*FindAllGuestsResponse, error) {
	out := new(FindAllGuestsResponse)
	err := c.cc.Invoke(ctx, GuestService_FindAllGuests_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *guestServiceClient) FindGuestById(ctx context.Context, in *FindGuestByIdRequest, opts ...grpc.CallOption) (*FindGuestByIdResponse, error) {
	out := new(FindGuestByIdResponse)
	err := c.cc.Invoke(ctx, GuestService_FindGuestById_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *guestServiceClient) UpdateGuest(ctx context.Context, in *UpdateGuestRequest, opts ...grpc.CallOption) (*UpdateGuestResponse, error) {
	out := new(UpdateGuestResponse)
	err := c.cc.Invoke(ctx, GuestService_UpdateGuest_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *guestServiceClient) DeleteGuest(ctx context.Context, in *DeleteGuestRequest, opts ...grpc.CallOption) (*DeleteGuestResponse, error) {
	out := new(DeleteGuestResponse)
	err := c.cc.Invoke(ctx, GuestService_DeleteGuest_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// GuestServiceServer is the server API for GuestService service.
// All implementations must embed UnimplementedGuestServiceServer
// for forward compatibility
type GuestServiceServer interface {
	CreateGuest(context.Context, *CreateGuestRequest) (*CreateGuestResponse, error)
	FindAllGuests(context.Context, *FindAllGuestsRequest) (*FindAllGuestsResponse, error)
	FindGuestById(context.Context, *FindGuestByIdRequest) (*FindGuestByIdResponse, error)
	UpdateGuest(context.Context, *UpdateGuestRequest) (*UpdateGuestResponse, error)
	DeleteGuest(context.Context, *DeleteGuestRequest) (*DeleteGuestResponse, error)
	mustEmbedUnimplementedGuestServiceServer()
}

// UnimplementedGuestServiceServer must be embedded to have forward compatible implementations.
type UnimplementedGuestServiceServer struct {
}

func (UnimplementedGuestServiceServer) CreateGuest(context.Context, *CreateGuestRequest) (*CreateGuestResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateGuest not implemented")
}
func (UnimplementedGuestServiceServer) FindAllGuests(context.Context, *FindAllGuestsRequest) (*FindAllGuestsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FindAllGuests not implemented")
}
func (UnimplementedGuestServiceServer) FindGuestById(context.Context, *FindGuestByIdRequest) (*FindGuestByIdResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FindGuestById not implemented")
}
func (UnimplementedGuestServiceServer) UpdateGuest(context.Context, *UpdateGuestRequest) (*UpdateGuestResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateGuest not implemented")
}
func (UnimplementedGuestServiceServer) DeleteGuest(context.Context, *DeleteGuestRequest) (*DeleteGuestResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteGuest not implemented")
}
func (UnimplementedGuestServiceServer) mustEmbedUnimplementedGuestServiceServer() {}

// UnsafeGuestServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to GuestServiceServer will
// result in compilation errors.
type UnsafeGuestServiceServer interface {
	mustEmbedUnimplementedGuestServiceServer()
}

func RegisterGuestServiceServer(s grpc.ServiceRegistrar, srv GuestServiceServer) {
	s.RegisterService(&GuestService_ServiceDesc, srv)
}

func _GuestService_CreateGuest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateGuestRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GuestServiceServer).CreateGuest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GuestService_CreateGuest_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GuestServiceServer).CreateGuest(ctx, req.(*CreateGuestRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GuestService_FindAllGuests_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FindAllGuestsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GuestServiceServer).FindAllGuests(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GuestService_FindAllGuests_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GuestServiceServer).FindAllGuests(ctx, req.(*FindAllGuestsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GuestService_FindGuestById_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FindGuestByIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GuestServiceServer).FindGuestById(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GuestService_FindGuestById_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GuestServiceServer).FindGuestById(ctx, req.(*FindGuestByIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GuestService_UpdateGuest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateGuestRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GuestServiceServer).UpdateGuest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GuestService_UpdateGuest_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GuestServiceServer).UpdateGuest(ctx, req.(*UpdateGuestRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GuestService_DeleteGuest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteGuestRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GuestServiceServer).DeleteGuest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GuestService_DeleteGuest_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GuestServiceServer).DeleteGuest(ctx, req.(*DeleteGuestRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// GuestService_ServiceDesc is the grpc.ServiceDesc for GuestService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var GuestService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "guest.GuestService",
	HandlerType: (*GuestServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateGuest",
			Handler:    _GuestService_CreateGuest_Handler,
		},
		{
			MethodName: "FindAllGuests",
			Handler:    _GuestService_FindAllGuests_Handler,
		},
		{
			MethodName: "FindGuestById",
			Handler:    _GuestService_FindGuestById_Handler,
		},
		{
			MethodName: "UpdateGuest",
			Handler:    _GuestService_UpdateGuest_Handler,
		},
		{
			MethodName: "DeleteGuest",
			Handler:    _GuestService_DeleteGuest_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "guest.proto",
}
