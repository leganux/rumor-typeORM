/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "guest";

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

export interface InviteRequest {
  id: string;
  senderId: string;
  receiverId: string;
}

export interface FindAllGuestsRequest {
}

export interface FindAllGuestsResponse {
  guests: Guest[];
}

export interface CreateGuestRequest {
  id?: string | undefined;
  event: Event | undefined;
  user: User | undefined;
}

export interface CreateGuestResponse {
  id?: string | undefined;
  event: Event | undefined;
  user: User | undefined;
}

export interface FindGuestByIdRequest {
  id: string;
}

export interface FindGuestByIdResponse {
  id?: string | undefined;
  event: Event | undefined;
  user: User | undefined;
}

export interface UpdateGuestRequest {
  id?: string | undefined;
  event: Event | undefined;
  user: User | undefined;
}

export interface UpdateGuestResponse {
  id?: string | undefined;
  event: Event | undefined;
  user: User | undefined;
}

export interface DeleteGuestRequest {
  id: string;
}

export interface DeleteGuestResponse {
  id?: string | undefined;
  event: Event | undefined;
  user: User | undefined;
}

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

function createBaseInviteRequest(): InviteRequest {
  return { id: "", senderId: "", receiverId: "" };
}

export const InviteRequest = {
  encode(message: InviteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.senderId !== "") {
      writer.uint32(18).string(message.senderId);
    }
    if (message.receiverId !== "") {
      writer.uint32(26).string(message.receiverId);
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

          message.senderId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.receiverId = reader.string();
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
      senderId: isSet(object.senderId) ? globalThis.String(object.senderId) : "",
      receiverId: isSet(object.receiverId) ? globalThis.String(object.receiverId) : "",
    };
  },

  toJSON(message: InviteRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.senderId !== "") {
      obj.senderId = message.senderId;
    }
    if (message.receiverId !== "") {
      obj.receiverId = message.receiverId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InviteRequest>, I>>(base?: I): InviteRequest {
    return InviteRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InviteRequest>, I>>(object: I): InviteRequest {
    const message = createBaseInviteRequest();
    message.id = object.id ?? "";
    message.senderId = object.senderId ?? "";
    message.receiverId = object.receiverId ?? "";
    return message;
  },
};

function createBaseFindAllGuestsRequest(): FindAllGuestsRequest {
  return {};
}

export const FindAllGuestsRequest = {
  encode(_: FindAllGuestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindAllGuestsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindAllGuestsRequest();
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

  fromJSON(_: any): FindAllGuestsRequest {
    return {};
  },

  toJSON(_: FindAllGuestsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<FindAllGuestsRequest>, I>>(base?: I): FindAllGuestsRequest {
    return FindAllGuestsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindAllGuestsRequest>, I>>(_: I): FindAllGuestsRequest {
    const message = createBaseFindAllGuestsRequest();
    return message;
  },
};

function createBaseFindAllGuestsResponse(): FindAllGuestsResponse {
  return { guests: [] };
}

export const FindAllGuestsResponse = {
  encode(message: FindAllGuestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.guests) {
      Guest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindAllGuestsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindAllGuestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.guests.push(Guest.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindAllGuestsResponse {
    return { guests: globalThis.Array.isArray(object?.guests) ? object.guests.map((e: any) => Guest.fromJSON(e)) : [] };
  },

  toJSON(message: FindAllGuestsResponse): unknown {
    const obj: any = {};
    if (message.guests?.length) {
      obj.guests = message.guests.map((e) => Guest.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindAllGuestsResponse>, I>>(base?: I): FindAllGuestsResponse {
    return FindAllGuestsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindAllGuestsResponse>, I>>(object: I): FindAllGuestsResponse {
    const message = createBaseFindAllGuestsResponse();
    message.guests = object.guests?.map((e) => Guest.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateGuestRequest(): CreateGuestRequest {
  return { id: undefined, event: undefined, user: undefined };
}

export const CreateGuestRequest = {
  encode(message: CreateGuestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGuestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGuestRequest();
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

  fromJSON(object: any): CreateGuestRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: CreateGuestRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
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

  create<I extends Exact<DeepPartial<CreateGuestRequest>, I>>(base?: I): CreateGuestRequest {
    return CreateGuestRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateGuestRequest>, I>>(object: I): CreateGuestRequest {
    const message = createBaseCreateGuestRequest();
    message.id = object.id ?? undefined;
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseCreateGuestResponse(): CreateGuestResponse {
  return { id: undefined, event: undefined, user: undefined };
}

export const CreateGuestResponse = {
  encode(message: CreateGuestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGuestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGuestResponse();
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

  fromJSON(object: any): CreateGuestResponse {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: CreateGuestResponse): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
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

  create<I extends Exact<DeepPartial<CreateGuestResponse>, I>>(base?: I): CreateGuestResponse {
    return CreateGuestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateGuestResponse>, I>>(object: I): CreateGuestResponse {
    const message = createBaseCreateGuestResponse();
    message.id = object.id ?? undefined;
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseFindGuestByIdRequest(): FindGuestByIdRequest {
  return { id: "" };
}

export const FindGuestByIdRequest = {
  encode(message: FindGuestByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindGuestByIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindGuestByIdRequest();
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

  fromJSON(object: any): FindGuestByIdRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: FindGuestByIdRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindGuestByIdRequest>, I>>(base?: I): FindGuestByIdRequest {
    return FindGuestByIdRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindGuestByIdRequest>, I>>(object: I): FindGuestByIdRequest {
    const message = createBaseFindGuestByIdRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseFindGuestByIdResponse(): FindGuestByIdResponse {
  return { id: undefined, event: undefined, user: undefined };
}

export const FindGuestByIdResponse = {
  encode(message: FindGuestByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): FindGuestByIdResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindGuestByIdResponse();
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

  fromJSON(object: any): FindGuestByIdResponse {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: FindGuestByIdResponse): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
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

  create<I extends Exact<DeepPartial<FindGuestByIdResponse>, I>>(base?: I): FindGuestByIdResponse {
    return FindGuestByIdResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindGuestByIdResponse>, I>>(object: I): FindGuestByIdResponse {
    const message = createBaseFindGuestByIdResponse();
    message.id = object.id ?? undefined;
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseUpdateGuestRequest(): UpdateGuestRequest {
  return { id: undefined, event: undefined, user: undefined };
}

export const UpdateGuestRequest = {
  encode(message: UpdateGuestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGuestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGuestRequest();
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

  fromJSON(object: any): UpdateGuestRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: UpdateGuestRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
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

  create<I extends Exact<DeepPartial<UpdateGuestRequest>, I>>(base?: I): UpdateGuestRequest {
    return UpdateGuestRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGuestRequest>, I>>(object: I): UpdateGuestRequest {
    const message = createBaseUpdateGuestRequest();
    message.id = object.id ?? undefined;
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseUpdateGuestResponse(): UpdateGuestResponse {
  return { id: undefined, event: undefined, user: undefined };
}

export const UpdateGuestResponse = {
  encode(message: UpdateGuestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGuestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGuestResponse();
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

  fromJSON(object: any): UpdateGuestResponse {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: UpdateGuestResponse): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
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

  create<I extends Exact<DeepPartial<UpdateGuestResponse>, I>>(base?: I): UpdateGuestResponse {
    return UpdateGuestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateGuestResponse>, I>>(object: I): UpdateGuestResponse {
    const message = createBaseUpdateGuestResponse();
    message.id = object.id ?? undefined;
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseDeleteGuestRequest(): DeleteGuestRequest {
  return { id: "" };
}

export const DeleteGuestRequest = {
  encode(message: DeleteGuestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGuestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteGuestRequest();
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

  fromJSON(object: any): DeleteGuestRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: DeleteGuestRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteGuestRequest>, I>>(base?: I): DeleteGuestRequest {
    return DeleteGuestRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteGuestRequest>, I>>(object: I): DeleteGuestRequest {
    const message = createBaseDeleteGuestRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteGuestResponse(): DeleteGuestResponse {
  return { id: undefined, event: undefined, user: undefined };
}

export const DeleteGuestResponse = {
  encode(message: DeleteGuestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteGuestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteGuestResponse();
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

  fromJSON(object: any): DeleteGuestResponse {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
    };
  },

  toJSON(message: DeleteGuestResponse): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
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

  create<I extends Exact<DeepPartial<DeleteGuestResponse>, I>>(base?: I): DeleteGuestResponse {
    return DeleteGuestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteGuestResponse>, I>>(object: I): DeleteGuestResponse {
    const message = createBaseDeleteGuestResponse();
    message.id = object.id ?? undefined;
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

export interface GuestService {
  CreateGuest(request: CreateGuestRequest): Promise<CreateGuestResponse>;
  FindAllGuests(request: FindAllGuestsRequest): Promise<FindAllGuestsResponse>;
  FindGuestById(request: FindGuestByIdRequest): Promise<FindGuestByIdResponse>;
  UpdateGuest(request: UpdateGuestRequest): Promise<UpdateGuestResponse>;
  DeleteGuest(request: DeleteGuestRequest): Promise<DeleteGuestResponse>;
}

export const GuestServiceServiceName = "guest.GuestService";
export class GuestServiceClientImpl implements GuestService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || GuestServiceServiceName;
    this.rpc = rpc;
    this.CreateGuest = this.CreateGuest.bind(this);
    this.FindAllGuests = this.FindAllGuests.bind(this);
    this.FindGuestById = this.FindGuestById.bind(this);
    this.UpdateGuest = this.UpdateGuest.bind(this);
    this.DeleteGuest = this.DeleteGuest.bind(this);
  }
  CreateGuest(request: CreateGuestRequest): Promise<CreateGuestResponse> {
    const data = CreateGuestRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateGuest", data);
    return promise.then((data) => CreateGuestResponse.decode(_m0.Reader.create(data)));
  }

  FindAllGuests(request: FindAllGuestsRequest): Promise<FindAllGuestsResponse> {
    const data = FindAllGuestsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindAllGuests", data);
    return promise.then((data) => FindAllGuestsResponse.decode(_m0.Reader.create(data)));
  }

  FindGuestById(request: FindGuestByIdRequest): Promise<FindGuestByIdResponse> {
    const data = FindGuestByIdRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindGuestById", data);
    return promise.then((data) => FindGuestByIdResponse.decode(_m0.Reader.create(data)));
  }

  UpdateGuest(request: UpdateGuestRequest): Promise<UpdateGuestResponse> {
    const data = UpdateGuestRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateGuest", data);
    return promise.then((data) => UpdateGuestResponse.decode(_m0.Reader.create(data)));
  }

  DeleteGuest(request: DeleteGuestRequest): Promise<DeleteGuestResponse> {
    const data = DeleteGuestRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteGuest", data);
    return promise.then((data) => DeleteGuestResponse.decode(_m0.Reader.create(data)));
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
