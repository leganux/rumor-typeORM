/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "user";

export interface User {
  id?: string | undefined;
  name: string;
  email: string;
  dateOfBirth: string;
}

export interface FindAllUsersRequest {
}

export interface FindAllUsersResponse {
  users: User[];
}

export interface CreateUserRequest {
  name: string;
  email: string;
  dateOfBirth: string;
}

export interface CreateUserResponse {
  id?: string | undefined;
  name: string;
  email: string;
  dateOfBirth: string;
}

export interface FindUserByIdRequest {
  id: string;
}

export interface FindUserByIdResponse {
  id?: string | undefined;
  name: string;
  email: string;
  dateOfBirth: string;
}

export interface UpdateUserRequest {
  id: string;
  name: string;
  email: string;
  dateOfBirth: string;
}

export interface UpdateUserResponse {
  id?: string | undefined;
  name: string;
  email: string;
  dateOfBirth: string;
}

export interface DeleteUserRequest {
  id: string;
}

export interface DeleteUserResponse {
  id?: string | undefined;
  name: string;
  email: string;
  dateOfBirth: string;
}

function createBaseUser(): User {
  return { id: undefined, name: "", email: "", dateOfBirth: "" };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.dateOfBirth !== "") {
      writer.uint32(34).string(message.dateOfBirth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dateOfBirth = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      dateOfBirth: isSet(object.dateOfBirth) ? globalThis.String(object.dateOfBirth) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.dateOfBirth !== "") {
      obj.dateOfBirth = message.dateOfBirth;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = object.id ?? undefined;
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.dateOfBirth = object.dateOfBirth ?? "";
    return message;
  },
};

function createBaseFindAllUsersRequest(): FindAllUsersRequest {
  return {};
}

export const FindAllUsersRequest = {
  encode(_: FindAllUsersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindAllUsersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindAllUsersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): FindAllUsersRequest {
    return {};
  },

  toJSON(_: FindAllUsersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<FindAllUsersRequest>, I>>(base?: I): FindAllUsersRequest {
    return FindAllUsersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindAllUsersRequest>, I>>(_: I): FindAllUsersRequest {
    const message = createBaseFindAllUsersRequest();
    return message;
  },
};

function createBaseFindAllUsersResponse(): FindAllUsersResponse {
  return { users: [] };
}

export const FindAllUsersResponse = {
  encode(message: FindAllUsersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindAllUsersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindAllUsersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindAllUsersResponse {
    return { users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [] };
  },

  toJSON(message: FindAllUsersResponse): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindAllUsersResponse>, I>>(base?: I): FindAllUsersResponse {
    return FindAllUsersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindAllUsersResponse>, I>>(object: I): FindAllUsersResponse {
    const message = createBaseFindAllUsersResponse();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateUserRequest(): CreateUserRequest {
  return { name: "", email: "", dateOfBirth: "" };
}

export const CreateUserRequest = {
  encode(message: CreateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.dateOfBirth !== "") {
      writer.uint32(26).string(message.dateOfBirth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.email = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dateOfBirth = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUserRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      dateOfBirth: isSet(object.dateOfBirth) ? globalThis.String(object.dateOfBirth) : "",
    };
  },

  toJSON(message: CreateUserRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.dateOfBirth !== "") {
      obj.dateOfBirth = message.dateOfBirth;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserRequest>, I>>(base?: I): CreateUserRequest {
    return CreateUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateUserRequest>, I>>(object: I): CreateUserRequest {
    const message = createBaseCreateUserRequest();
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.dateOfBirth = object.dateOfBirth ?? "";
    return message;
  },
};

function createBaseCreateUserResponse(): CreateUserResponse {
  return { id: undefined, name: "", email: "", dateOfBirth: "" };
}

export const CreateUserResponse = {
  encode(message: CreateUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.dateOfBirth !== "") {
      writer.uint32(34).string(message.dateOfBirth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dateOfBirth = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUserResponse {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      dateOfBirth: isSet(object.dateOfBirth) ? globalThis.String(object.dateOfBirth) : "",
    };
  },

  toJSON(message: CreateUserResponse): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.dateOfBirth !== "") {
      obj.dateOfBirth = message.dateOfBirth;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserResponse>, I>>(base?: I): CreateUserResponse {
    return CreateUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateUserResponse>, I>>(object: I): CreateUserResponse {
    const message = createBaseCreateUserResponse();
    message.id = object.id ?? undefined;
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.dateOfBirth = object.dateOfBirth ?? "";
    return message;
  },
};

function createBaseFindUserByIdRequest(): FindUserByIdRequest {
  return { id: "" };
}

export const FindUserByIdRequest = {
  encode(message: FindUserByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindUserByIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindUserByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindUserByIdRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: FindUserByIdRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindUserByIdRequest>, I>>(base?: I): FindUserByIdRequest {
    return FindUserByIdRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindUserByIdRequest>, I>>(object: I): FindUserByIdRequest {
    const message = createBaseFindUserByIdRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseFindUserByIdResponse(): FindUserByIdResponse {
  return { id: undefined, name: "", email: "", dateOfBirth: "" };
}

export const FindUserByIdResponse = {
  encode(message: FindUserByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.dateOfBirth !== "") {
      writer.uint32(34).string(message.dateOfBirth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindUserByIdResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindUserByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dateOfBirth = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindUserByIdResponse {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      dateOfBirth: isSet(object.dateOfBirth) ? globalThis.String(object.dateOfBirth) : "",
    };
  },

  toJSON(message: FindUserByIdResponse): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.dateOfBirth !== "") {
      obj.dateOfBirth = message.dateOfBirth;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindUserByIdResponse>, I>>(base?: I): FindUserByIdResponse {
    return FindUserByIdResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindUserByIdResponse>, I>>(object: I): FindUserByIdResponse {
    const message = createBaseFindUserByIdResponse();
    message.id = object.id ?? undefined;
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.dateOfBirth = object.dateOfBirth ?? "";
    return message;
  },
};

function createBaseUpdateUserRequest(): UpdateUserRequest {
  return { id: "", name: "", email: "", dateOfBirth: "" };
}

export const UpdateUserRequest = {
  encode(message: UpdateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.dateOfBirth !== "") {
      writer.uint32(34).string(message.dateOfBirth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dateOfBirth = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateUserRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      dateOfBirth: isSet(object.dateOfBirth) ? globalThis.String(object.dateOfBirth) : "",
    };
  },

  toJSON(message: UpdateUserRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.dateOfBirth !== "") {
      obj.dateOfBirth = message.dateOfBirth;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateUserRequest>, I>>(base?: I): UpdateUserRequest {
    return UpdateUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateUserRequest>, I>>(object: I): UpdateUserRequest {
    const message = createBaseUpdateUserRequest();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.dateOfBirth = object.dateOfBirth ?? "";
    return message;
  },
};

function createBaseUpdateUserResponse(): UpdateUserResponse {
  return { id: undefined, name: "", email: "", dateOfBirth: "" };
}

export const UpdateUserResponse = {
  encode(message: UpdateUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.dateOfBirth !== "") {
      writer.uint32(34).string(message.dateOfBirth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dateOfBirth = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateUserResponse {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      dateOfBirth: isSet(object.dateOfBirth) ? globalThis.String(object.dateOfBirth) : "",
    };
  },

  toJSON(message: UpdateUserResponse): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.dateOfBirth !== "") {
      obj.dateOfBirth = message.dateOfBirth;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateUserResponse>, I>>(base?: I): UpdateUserResponse {
    return UpdateUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateUserResponse>, I>>(object: I): UpdateUserResponse {
    const message = createBaseUpdateUserResponse();
    message.id = object.id ?? undefined;
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.dateOfBirth = object.dateOfBirth ?? "";
    return message;
  },
};

function createBaseDeleteUserRequest(): DeleteUserRequest {
  return { id: "" };
}

export const DeleteUserRequest = {
  encode(message: DeleteUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteUserRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: DeleteUserRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteUserRequest>, I>>(base?: I): DeleteUserRequest {
    return DeleteUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteUserRequest>, I>>(object: I): DeleteUserRequest {
    const message = createBaseDeleteUserRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteUserResponse(): DeleteUserResponse {
  return { id: undefined, name: "", email: "", dateOfBirth: "" };
}

export const DeleteUserResponse = {
  encode(message: DeleteUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.dateOfBirth !== "") {
      writer.uint32(34).string(message.dateOfBirth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dateOfBirth = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteUserResponse {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      dateOfBirth: isSet(object.dateOfBirth) ? globalThis.String(object.dateOfBirth) : "",
    };
  },

  toJSON(message: DeleteUserResponse): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.dateOfBirth !== "") {
      obj.dateOfBirth = message.dateOfBirth;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteUserResponse>, I>>(base?: I): DeleteUserResponse {
    return DeleteUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteUserResponse>, I>>(object: I): DeleteUserResponse {
    const message = createBaseDeleteUserResponse();
    message.id = object.id ?? undefined;
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.dateOfBirth = object.dateOfBirth ?? "";
    return message;
  },
};

export interface UserService {
  CreateUser(request: CreateUserRequest): Promise<CreateUserResponse>;
  FindAllUsers(request: FindAllUsersRequest): Promise<FindAllUsersResponse>;
  FindUserById(request: FindUserByIdRequest): Promise<FindUserByIdResponse>;
  UpdateUser(request: UpdateUserRequest): Promise<UpdateUserResponse>;
  DeleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse>;
}

export const UserServiceServiceName = "user.UserService";
export class UserServiceClientImpl implements UserService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || UserServiceServiceName;
    this.rpc = rpc;
    this.CreateUser = this.CreateUser.bind(this);
    this.FindAllUsers = this.FindAllUsers.bind(this);
    this.FindUserById = this.FindUserById.bind(this);
    this.UpdateUser = this.UpdateUser.bind(this);
    this.DeleteUser = this.DeleteUser.bind(this);
  }
  CreateUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    const data = CreateUserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateUser", data);
    return promise.then((data) => CreateUserResponse.decode(_m0.Reader.create(data)));
  }

  FindAllUsers(request: FindAllUsersRequest): Promise<FindAllUsersResponse> {
    const data = FindAllUsersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindAllUsers", data);
    return promise.then((data) => FindAllUsersResponse.decode(_m0.Reader.create(data)));
  }

  FindUserById(request: FindUserByIdRequest): Promise<FindUserByIdResponse> {
    const data = FindUserByIdRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindUserById", data);
    return promise.then((data) => FindUserByIdResponse.decode(_m0.Reader.create(data)));
  }

  UpdateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    const data = UpdateUserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateUser", data);
    return promise.then((data) => UpdateUserResponse.decode(_m0.Reader.create(data)));
  }

  DeleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    const data = DeleteUserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteUser", data);
    return promise.then((data) => DeleteUserResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
