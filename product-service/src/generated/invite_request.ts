/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "invite_request";

export interface InviteRequest {
  id: string;
  requester: User | undefined;
  invitedUser: User | undefined;
  event: Event | undefined;
  status: string;
  createdAt: string;
  updatedAt?: string | undefined;
}

export interface Guest {
  id: string;
  event: Event | undefined;
  user: User | undefined;
}

export interface Event {
  id?: string | undefined;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  guests: Guest[];
  inviteRequest: InviteRequest[];
}

export interface User {
  id?: string | undefined;
  name: string;
  email: string;
  dateOfBirth: string;
}

export interface FindAllInviteRequestsRequest {
}

export interface FindAllInviteRequestsResponse {
  inviteRequests: InviteRequest[];
}

export interface CreateInviteRequestRequest {
  id?: string | undefined;
  requester: User | undefined;
  invitedUser: User | undefined;
  event: Event | undefined;
  status: string;
  createdAt: string;
  updatedAt?: string | undefined;
}

export interface CreateInviteRequestResponse {
  id?: string | undefined;
  requester: User | undefined;
  invitedUser: User | undefined;
  event: Event | undefined;
  status: string;
  createdAt: string;
  updatedAt?: string | undefined;
}

export interface FindInviteRequestByIdRequest {
  id: string;
}

export interface FindInviteRequestByIdResponse {
  id?: string | undefined;
  requester: User | undefined;
  invitedUser: User | undefined;
  event: Event | undefined;
  status: string;
  createdAt: string;
  updatedAt?: string | undefined;
}

export interface UpdateInviteRequestRequest {
  id?: string | undefined;
  requester: User | undefined;
  invitedUser: User | undefined;
  event: Event | undefined;
  status: string;
  createdAt: string;
  updatedAt?: string | undefined;
}

export interface UpdateInviteRequestResponse {
  id?: string | undefined;
  requester: User | undefined;
  invitedUser: User | undefined;
  event: Event | undefined;
  status: string;
  createdAt: string;
  updatedAt?: string | undefined;
}

export interface DeleteInviteRequestRequest {
  id: string;
}

export interface DeleteInviteRequestResponse {
  id?: string | undefined;
  requester: User | undefined;
  invitedUser: User | undefined;
  event: Event | undefined;
  status: string;
  createdAt: string;
  updatedAt?: string | undefined;
}

function createBaseInviteRequest(): InviteRequest {
  return {
    id: "",
    requester: undefined,
    invitedUser: undefined,
    event: undefined,
    status: "",
    createdAt: "",
    updatedAt: undefined,
  };
}

export const InviteRequest = {
  encode(message: InviteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.requester !== undefined) {
      User.encode(message.requester, writer.uint32(18).fork()).ldelim();
    }
    if (message.invitedUser !== undefined) {
      User.encode(message.invitedUser, writer.uint32(26).fork()).ldelim();
    }
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(34).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    if (message.createdAt !== "") {
      writer.uint32(50).string(message.createdAt);
    }
    if (message.updatedAt !== undefined) {
      writer.uint32(58).string(message.updatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InviteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInviteRequest();
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

          message.requester = User.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.invitedUser = User.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.event = Event.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.status = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.updatedAt = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InviteRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      requester: isSet(object.requester) ? User.fromJSON(object.requester) : undefined,
      invitedUser: isSet(object.invitedUser) ? User.fromJSON(object.invitedUser) : undefined,
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
      updatedAt: isSet(object.updatedAt) ? globalThis.String(object.updatedAt) : undefined,
    };
  },

  toJSON(message: InviteRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.requester !== undefined) {
      obj.requester = User.toJSON(message.requester);
    }
    if (message.invitedUser !== undefined) {
      obj.invitedUser = User.toJSON(message.invitedUser);
    }
    if (message.event !== undefined) {
      obj.event = Event.toJSON(message.event);
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InviteRequest>, I>>(base?: I): InviteRequest {
    return InviteRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InviteRequest>, I>>(object: I): InviteRequest {
    const message = createBaseInviteRequest();
    message.id = object.id ?? "";
    message.requester = (object.requester !== undefined && object.requester !== null)
      ? User.fromPartial(object.requester)
      : undefined;
    message.invitedUser = (object.invitedUser !== undefined && object.invitedUser !== null)
      ? User.fromPartial(object.invitedUser)
      : undefined;
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    message.status = object.status ?? "";
    message.createdAt = object.createdAt ?? "";
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseGuest(): Guest {
  return { id: "", event: undefined, user: undefined };
}

export const Guest = {
  encode(message: Guest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(18).fork()).ldelim();
    }
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Guest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuest();
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

          message.event = Event.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Guest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: Guest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.event !== undefined) {
      obj.event = Event.toJSON(message.event);
    }
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Guest>, I>>(base?: I): Guest {
    return Guest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Guest>, I>>(object: I): Guest {
    const message = createBaseGuest();
    message.id = object.id ?? "";
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseEvent(): Event {
  return { id: undefined, title: "", description: "", startTime: "", endTime: "", guests: [], inviteRequest: [] };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.startTime !== "") {
      writer.uint32(34).string(message.startTime);
    }
    if (message.endTime !== "") {
      writer.uint32(42).string(message.endTime);
    }
    for (const v of message.guests) {
      Guest.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.inviteRequest) {
      InviteRequest.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
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

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.startTime = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.endTime = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.guests.push(Guest.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.inviteRequest.push(InviteRequest.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Event {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      startTime: isSet(object.startTime) ? globalThis.String(object.startTime) : "",
      endTime: isSet(object.endTime) ? globalThis.String(object.endTime) : "",
      guests: globalThis.Array.isArray(object?.guests) ? object.guests.map((e: any) => Guest.fromJSON(e)) : [],
      inviteRequest: globalThis.Array.isArray(object?.inviteRequest)
        ? object.inviteRequest.map((e: any) => InviteRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.startTime !== "") {
      obj.startTime = message.startTime;
    }
    if (message.endTime !== "") {
      obj.endTime = message.endTime;
    }
    if (message.guests?.length) {
      obj.guests = message.guests.map((e) => Guest.toJSON(e));
    }
    if (message.inviteRequest?.length) {
      obj.inviteRequest = message.inviteRequest.map((e) => InviteRequest.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Event>, I>>(base?: I): Event {
    return Event.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent();
    message.id = object.id ?? undefined;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.startTime = object.startTime ?? "";
    message.endTime = object.endTime ?? "";
    message.guests = object.guests?.map((e) => Guest.fromPartial(e)) || [];
    message.inviteRequest = object.inviteRequest?.map((e) => InviteRequest.fromPartial(e)) || [];
    return message;
  },
};

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

function createBaseFindAllInviteRequestsRequest(): FindAllInviteRequestsRequest {
  return {};
}

export const FindAllInviteRequestsRequest = {
  encode(_: FindAllInviteRequestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindAllInviteRequestsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindAllInviteRequestsRequest();
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

  fromJSON(_: any): FindAllInviteRequestsRequest {
    return {};
  },

  toJSON(_: FindAllInviteRequestsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<FindAllInviteRequestsRequest>, I>>(base?: I): FindAllInviteRequestsRequest {
    return FindAllInviteRequestsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindAllInviteRequestsRequest>, I>>(_: I): FindAllInviteRequestsRequest {
    const message = createBaseFindAllInviteRequestsRequest();
    return message;
  },
};

function createBaseFindAllInviteRequestsResponse(): FindAllInviteRequestsResponse {
  return { inviteRequests: [] };
}

export const FindAllInviteRequestsResponse = {
  encode(message: FindAllInviteRequestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.inviteRequests) {
      InviteRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindAllInviteRequestsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindAllInviteRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inviteRequests.push(InviteRequest.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindAllInviteRequestsResponse {
    return {
      inviteRequests: globalThis.Array.isArray(object?.inviteRequests)
        ? object.inviteRequests.map((e: any) => InviteRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FindAllInviteRequestsResponse): unknown {
    const obj: any = {};
    if (message.inviteRequests?.length) {
      obj.inviteRequests = message.inviteRequests.map((e) => InviteRequest.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindAllInviteRequestsResponse>, I>>(base?: I): FindAllInviteRequestsResponse {
    return FindAllInviteRequestsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindAllInviteRequestsResponse>, I>>(
    object: I,
  ): FindAllInviteRequestsResponse {
    const message = createBaseFindAllInviteRequestsResponse();
    message.inviteRequests = object.inviteRequests?.map((e) => InviteRequest.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateInviteRequestRequest(): CreateInviteRequestRequest {
  return {
    id: undefined,
    requester: undefined,
    invitedUser: undefined,
    event: undefined,
    status: "",
    createdAt: "",
    updatedAt: undefined,
  };
}

export const CreateInviteRequestRequest = {
  encode(message: CreateInviteRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.requester !== undefined) {
      User.encode(message.requester, writer.uint32(18).fork()).ldelim();
    }
    if (message.invitedUser !== undefined) {
      User.encode(message.invitedUser, writer.uint32(26).fork()).ldelim();
    }
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(34).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    if (message.createdAt !== "") {
      writer.uint32(50).string(message.createdAt);
    }
    if (message.updatedAt !== undefined) {
      writer.uint32(58).string(message.updatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateInviteRequestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateInviteRequestRequest();
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

          message.requester = User.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.invitedUser = User.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.event = Event.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.status = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.updatedAt = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateInviteRequestRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      requester: isSet(object.requester) ? User.fromJSON(object.requester) : undefined,
      invitedUser: isSet(object.invitedUser) ? User.fromJSON(object.invitedUser) : undefined,
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
      updatedAt: isSet(object.updatedAt) ? globalThis.String(object.updatedAt) : undefined,
    };
  },

  toJSON(message: CreateInviteRequestRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.requester !== undefined) {
      obj.requester = User.toJSON(message.requester);
    }
    if (message.invitedUser !== undefined) {
      obj.invitedUser = User.toJSON(message.invitedUser);
    }
    if (message.event !== undefined) {
      obj.event = Event.toJSON(message.event);
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateInviteRequestRequest>, I>>(base?: I): CreateInviteRequestRequest {
    return CreateInviteRequestRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateInviteRequestRequest>, I>>(object: I): CreateInviteRequestRequest {
    const message = createBaseCreateInviteRequestRequest();
    message.id = object.id ?? undefined;
    message.requester = (object.requester !== undefined && object.requester !== null)
      ? User.fromPartial(object.requester)
      : undefined;
    message.invitedUser = (object.invitedUser !== undefined && object.invitedUser !== null)
      ? User.fromPartial(object.invitedUser)
      : undefined;
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    message.status = object.status ?? "";
    message.createdAt = object.createdAt ?? "";
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseCreateInviteRequestResponse(): CreateInviteRequestResponse {
  return {
    id: undefined,
    requester: undefined,
    invitedUser: undefined,
    event: undefined,
    status: "",
    createdAt: "",
    updatedAt: undefined,
  };
}

export const CreateInviteRequestResponse = {
  encode(message: CreateInviteRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.requester !== undefined) {
      User.encode(message.requester, writer.uint32(18).fork()).ldelim();
    }
    if (message.invitedUser !== undefined) {
      User.encode(message.invitedUser, writer.uint32(26).fork()).ldelim();
    }
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(34).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    if (message.createdAt !== "") {
      writer.uint32(50).string(message.createdAt);
    }
    if (message.updatedAt !== undefined) {
      writer.uint32(58).string(message.updatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateInviteRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateInviteRequestResponse();
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

          message.requester = User.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.invitedUser = User.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.event = Event.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.status = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.updatedAt = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateInviteRequestResponse {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      requester: isSet(object.requester) ? User.fromJSON(object.requester) : undefined,
      invitedUser: isSet(object.invitedUser) ? User.fromJSON(object.invitedUser) : undefined,
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
      updatedAt: isSet(object.updatedAt) ? globalThis.String(object.updatedAt) : undefined,
    };
  },

  toJSON(message: CreateInviteRequestResponse): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.requester !== undefined) {
      obj.requester = User.toJSON(message.requester);
    }
    if (message.invitedUser !== undefined) {
      obj.invitedUser = User.toJSON(message.invitedUser);
    }
    if (message.event !== undefined) {
      obj.event = Event.toJSON(message.event);
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateInviteRequestResponse>, I>>(base?: I): CreateInviteRequestResponse {
    return CreateInviteRequestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateInviteRequestResponse>, I>>(object: I): CreateInviteRequestResponse {
    const message = createBaseCreateInviteRequestResponse();
    message.id = object.id ?? undefined;
    message.requester = (object.requester !== undefined && object.requester !== null)
      ? User.fromPartial(object.requester)
      : undefined;
    message.invitedUser = (object.invitedUser !== undefined && object.invitedUser !== null)
      ? User.fromPartial(object.invitedUser)
      : undefined;
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    message.status = object.status ?? "";
    message.createdAt = object.createdAt ?? "";
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseFindInviteRequestByIdRequest(): FindInviteRequestByIdRequest {
  return { id: "" };
}

export const FindInviteRequestByIdRequest = {
  encode(message: FindInviteRequestByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindInviteRequestByIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindInviteRequestByIdRequest();
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

  fromJSON(object: any): FindInviteRequestByIdRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: FindInviteRequestByIdRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindInviteRequestByIdRequest>, I>>(base?: I): FindInviteRequestByIdRequest {
    return FindInviteRequestByIdRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindInviteRequestByIdRequest>, I>>(object: I): FindInviteRequestByIdRequest {
    const message = createBaseFindInviteRequestByIdRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseFindInviteRequestByIdResponse(): FindInviteRequestByIdResponse {
  return {
    id: undefined,
    requester: undefined,
    invitedUser: undefined,
    event: undefined,
    status: "",
    createdAt: "",
    updatedAt: undefined,
  };
}

export const FindInviteRequestByIdResponse = {
  encode(message: FindInviteRequestByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.requester !== undefined) {
      User.encode(message.requester, writer.uint32(18).fork()).ldelim();
    }
    if (message.invitedUser !== undefined) {
      User.encode(message.invitedUser, writer.uint32(26).fork()).ldelim();
    }
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(34).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    if (message.createdAt !== "") {
      writer.uint32(50).string(message.createdAt);
    }
    if (message.updatedAt !== undefined) {
      writer.uint32(58).string(message.updatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindInviteRequestByIdResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindInviteRequestByIdResponse();
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

          message.requester = User.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.invitedUser = User.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.event = Event.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.status = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.updatedAt = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindInviteRequestByIdResponse {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      requester: isSet(object.requester) ? User.fromJSON(object.requester) : undefined,
      invitedUser: isSet(object.invitedUser) ? User.fromJSON(object.invitedUser) : undefined,
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
      updatedAt: isSet(object.updatedAt) ? globalThis.String(object.updatedAt) : undefined,
    };
  },

  toJSON(message: FindInviteRequestByIdResponse): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.requester !== undefined) {
      obj.requester = User.toJSON(message.requester);
    }
    if (message.invitedUser !== undefined) {
      obj.invitedUser = User.toJSON(message.invitedUser);
    }
    if (message.event !== undefined) {
      obj.event = Event.toJSON(message.event);
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindInviteRequestByIdResponse>, I>>(base?: I): FindInviteRequestByIdResponse {
    return FindInviteRequestByIdResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindInviteRequestByIdResponse>, I>>(
    object: I,
  ): FindInviteRequestByIdResponse {
    const message = createBaseFindInviteRequestByIdResponse();
    message.id = object.id ?? undefined;
    message.requester = (object.requester !== undefined && object.requester !== null)
      ? User.fromPartial(object.requester)
      : undefined;
    message.invitedUser = (object.invitedUser !== undefined && object.invitedUser !== null)
      ? User.fromPartial(object.invitedUser)
      : undefined;
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    message.status = object.status ?? "";
    message.createdAt = object.createdAt ?? "";
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseUpdateInviteRequestRequest(): UpdateInviteRequestRequest {
  return {
    id: undefined,
    requester: undefined,
    invitedUser: undefined,
    event: undefined,
    status: "",
    createdAt: "",
    updatedAt: undefined,
  };
}

export const UpdateInviteRequestRequest = {
  encode(message: UpdateInviteRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.requester !== undefined) {
      User.encode(message.requester, writer.uint32(18).fork()).ldelim();
    }
    if (message.invitedUser !== undefined) {
      User.encode(message.invitedUser, writer.uint32(26).fork()).ldelim();
    }
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(34).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    if (message.createdAt !== "") {
      writer.uint32(50).string(message.createdAt);
    }
    if (message.updatedAt !== undefined) {
      writer.uint32(58).string(message.updatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInviteRequestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateInviteRequestRequest();
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

          message.requester = User.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.invitedUser = User.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.event = Event.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.status = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.updatedAt = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateInviteRequestRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      requester: isSet(object.requester) ? User.fromJSON(object.requester) : undefined,
      invitedUser: isSet(object.invitedUser) ? User.fromJSON(object.invitedUser) : undefined,
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
      updatedAt: isSet(object.updatedAt) ? globalThis.String(object.updatedAt) : undefined,
    };
  },

  toJSON(message: UpdateInviteRequestRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.requester !== undefined) {
      obj.requester = User.toJSON(message.requester);
    }
    if (message.invitedUser !== undefined) {
      obj.invitedUser = User.toJSON(message.invitedUser);
    }
    if (message.event !== undefined) {
      obj.event = Event.toJSON(message.event);
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateInviteRequestRequest>, I>>(base?: I): UpdateInviteRequestRequest {
    return UpdateInviteRequestRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateInviteRequestRequest>, I>>(object: I): UpdateInviteRequestRequest {
    const message = createBaseUpdateInviteRequestRequest();
    message.id = object.id ?? undefined;
    message.requester = (object.requester !== undefined && object.requester !== null)
      ? User.fromPartial(object.requester)
      : undefined;
    message.invitedUser = (object.invitedUser !== undefined && object.invitedUser !== null)
      ? User.fromPartial(object.invitedUser)
      : undefined;
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    message.status = object.status ?? "";
    message.createdAt = object.createdAt ?? "";
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseUpdateInviteRequestResponse(): UpdateInviteRequestResponse {
  return {
    id: undefined,
    requester: undefined,
    invitedUser: undefined,
    event: undefined,
    status: "",
    createdAt: "",
    updatedAt: undefined,
  };
}

export const UpdateInviteRequestResponse = {
  encode(message: UpdateInviteRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.requester !== undefined) {
      User.encode(message.requester, writer.uint32(18).fork()).ldelim();
    }
    if (message.invitedUser !== undefined) {
      User.encode(message.invitedUser, writer.uint32(26).fork()).ldelim();
    }
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(34).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    if (message.createdAt !== "") {
      writer.uint32(50).string(message.createdAt);
    }
    if (message.updatedAt !== undefined) {
      writer.uint32(58).string(message.updatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateInviteRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateInviteRequestResponse();
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

          message.requester = User.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.invitedUser = User.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.event = Event.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.status = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.updatedAt = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateInviteRequestResponse {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      requester: isSet(object.requester) ? User.fromJSON(object.requester) : undefined,
      invitedUser: isSet(object.invitedUser) ? User.fromJSON(object.invitedUser) : undefined,
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
      updatedAt: isSet(object.updatedAt) ? globalThis.String(object.updatedAt) : undefined,
    };
  },

  toJSON(message: UpdateInviteRequestResponse): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.requester !== undefined) {
      obj.requester = User.toJSON(message.requester);
    }
    if (message.invitedUser !== undefined) {
      obj.invitedUser = User.toJSON(message.invitedUser);
    }
    if (message.event !== undefined) {
      obj.event = Event.toJSON(message.event);
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateInviteRequestResponse>, I>>(base?: I): UpdateInviteRequestResponse {
    return UpdateInviteRequestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateInviteRequestResponse>, I>>(object: I): UpdateInviteRequestResponse {
    const message = createBaseUpdateInviteRequestResponse();
    message.id = object.id ?? undefined;
    message.requester = (object.requester !== undefined && object.requester !== null)
      ? User.fromPartial(object.requester)
      : undefined;
    message.invitedUser = (object.invitedUser !== undefined && object.invitedUser !== null)
      ? User.fromPartial(object.invitedUser)
      : undefined;
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    message.status = object.status ?? "";
    message.createdAt = object.createdAt ?? "";
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseDeleteInviteRequestRequest(): DeleteInviteRequestRequest {
  return { id: "" };
}

export const DeleteInviteRequestRequest = {
  encode(message: DeleteInviteRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteInviteRequestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteInviteRequestRequest();
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

  fromJSON(object: any): DeleteInviteRequestRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: DeleteInviteRequestRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteInviteRequestRequest>, I>>(base?: I): DeleteInviteRequestRequest {
    return DeleteInviteRequestRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteInviteRequestRequest>, I>>(object: I): DeleteInviteRequestRequest {
    const message = createBaseDeleteInviteRequestRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteInviteRequestResponse(): DeleteInviteRequestResponse {
  return {
    id: undefined,
    requester: undefined,
    invitedUser: undefined,
    event: undefined,
    status: "",
    createdAt: "",
    updatedAt: undefined,
  };
}

export const DeleteInviteRequestResponse = {
  encode(message: DeleteInviteRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.requester !== undefined) {
      User.encode(message.requester, writer.uint32(18).fork()).ldelim();
    }
    if (message.invitedUser !== undefined) {
      User.encode(message.invitedUser, writer.uint32(26).fork()).ldelim();
    }
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(34).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(42).string(message.status);
    }
    if (message.createdAt !== "") {
      writer.uint32(50).string(message.createdAt);
    }
    if (message.updatedAt !== undefined) {
      writer.uint32(58).string(message.updatedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteInviteRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteInviteRequestResponse();
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

          message.requester = User.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.invitedUser = User.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.event = Event.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.status = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.updatedAt = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteInviteRequestResponse {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      requester: isSet(object.requester) ? User.fromJSON(object.requester) : undefined,
      invitedUser: isSet(object.invitedUser) ? User.fromJSON(object.invitedUser) : undefined,
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
      updatedAt: isSet(object.updatedAt) ? globalThis.String(object.updatedAt) : undefined,
    };
  },

  toJSON(message: DeleteInviteRequestResponse): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    if (message.requester !== undefined) {
      obj.requester = User.toJSON(message.requester);
    }
    if (message.invitedUser !== undefined) {
      obj.invitedUser = User.toJSON(message.invitedUser);
    }
    if (message.event !== undefined) {
      obj.event = Event.toJSON(message.event);
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteInviteRequestResponse>, I>>(base?: I): DeleteInviteRequestResponse {
    return DeleteInviteRequestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteInviteRequestResponse>, I>>(object: I): DeleteInviteRequestResponse {
    const message = createBaseDeleteInviteRequestResponse();
    message.id = object.id ?? undefined;
    message.requester = (object.requester !== undefined && object.requester !== null)
      ? User.fromPartial(object.requester)
      : undefined;
    message.invitedUser = (object.invitedUser !== undefined && object.invitedUser !== null)
      ? User.fromPartial(object.invitedUser)
      : undefined;
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    message.status = object.status ?? "";
    message.createdAt = object.createdAt ?? "";
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

export interface InviteRequestService {
  CreateInviteRequest(request: CreateInviteRequestRequest): Promise<CreateInviteRequestResponse>;
  FindAllInviteRequests(request: FindAllInviteRequestsRequest): Promise<FindAllInviteRequestsResponse>;
  FindInviteRequestById(request: FindInviteRequestByIdRequest): Promise<FindInviteRequestByIdResponse>;
  UpdateInviteRequest(request: UpdateInviteRequestRequest): Promise<UpdateInviteRequestResponse>;
  DeleteInviteRequest(request: DeleteInviteRequestRequest): Promise<DeleteInviteRequestResponse>;
}

export const InviteRequestServiceServiceName = "invite_request.InviteRequestService";
export class InviteRequestServiceClientImpl implements InviteRequestService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || InviteRequestServiceServiceName;
    this.rpc = rpc;
    this.CreateInviteRequest = this.CreateInviteRequest.bind(this);
    this.FindAllInviteRequests = this.FindAllInviteRequests.bind(this);
    this.FindInviteRequestById = this.FindInviteRequestById.bind(this);
    this.UpdateInviteRequest = this.UpdateInviteRequest.bind(this);
    this.DeleteInviteRequest = this.DeleteInviteRequest.bind(this);
  }
  CreateInviteRequest(request: CreateInviteRequestRequest): Promise<CreateInviteRequestResponse> {
    const data = CreateInviteRequestRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateInviteRequest", data);
    return promise.then((data) => CreateInviteRequestResponse.decode(_m0.Reader.create(data)));
  }

  FindAllInviteRequests(request: FindAllInviteRequestsRequest): Promise<FindAllInviteRequestsResponse> {
    const data = FindAllInviteRequestsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindAllInviteRequests", data);
    return promise.then((data) => FindAllInviteRequestsResponse.decode(_m0.Reader.create(data)));
  }

  FindInviteRequestById(request: FindInviteRequestByIdRequest): Promise<FindInviteRequestByIdResponse> {
    const data = FindInviteRequestByIdRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindInviteRequestById", data);
    return promise.then((data) => FindInviteRequestByIdResponse.decode(_m0.Reader.create(data)));
  }

  UpdateInviteRequest(request: UpdateInviteRequestRequest): Promise<UpdateInviteRequestResponse> {
    const data = UpdateInviteRequestRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateInviteRequest", data);
    return promise.then((data) => UpdateInviteRequestResponse.decode(_m0.Reader.create(data)));
  }

  DeleteInviteRequest(request: DeleteInviteRequestRequest): Promise<DeleteInviteRequestResponse> {
    const data = DeleteInviteRequestRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteInviteRequest", data);
    return promise.then((data) => DeleteInviteRequestResponse.decode(_m0.Reader.create(data)));
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
