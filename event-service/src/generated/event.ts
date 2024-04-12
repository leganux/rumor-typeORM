/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "event";

export interface Event {
  id?: string | undefined;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  guests: Guest[];
  inviteRequest: InviteRequest[];
}

export interface Guest {
  id: string;
  event: Event | undefined;
  user: User | undefined;
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

export interface FindAllEventsRequest {
}

export interface FindAllEventsResponse {
  events: Event[];
}

export interface CreateEventRequest {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  guests: Guest[];
  inviteRequest: InviteRequest[];
}

export interface CreateEventResponse {
  id?: string | undefined;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  guests: Guest[];
  inviteRequest: InviteRequest[];
}

export interface FindEventByIdRequest {
  id: string;
}

export interface FindEventByIdResponse {
  id?: string | undefined;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  guests: Guest[];
  inviteRequest: InviteRequest[];
}

export interface UpdateEventRequest {
  id?: string | undefined;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  guests: Guest[];
  inviteRequest: InviteRequest[];
}

export interface UpdateEventResponse {
  id?: string | undefined;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  guests: Guest[];
  inviteRequest: InviteRequest[];
}

export interface DeleteEventRequest {
  id: string;
}

export interface DeleteEventResponse {
  id?: string | undefined;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  guests: Guest[];
  inviteRequest: InviteRequest[];
}

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

function createBaseFindAllEventsRequest(): FindAllEventsRequest {
  return {};
}

export const FindAllEventsRequest = {
  encode(_: FindAllEventsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindAllEventsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindAllEventsRequest();
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

  fromJSON(_: any): FindAllEventsRequest {
    return {};
  },

  toJSON(_: FindAllEventsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<FindAllEventsRequest>, I>>(base?: I): FindAllEventsRequest {
    return FindAllEventsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindAllEventsRequest>, I>>(_: I): FindAllEventsRequest {
    const message = createBaseFindAllEventsRequest();
    return message;
  },
};

function createBaseFindAllEventsResponse(): FindAllEventsResponse {
  return { events: [] };
}

export const FindAllEventsResponse = {
  encode(message: FindAllEventsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindAllEventsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindAllEventsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.events.push(Event.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindAllEventsResponse {
    return { events: globalThis.Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [] };
  },

  toJSON(message: FindAllEventsResponse): unknown {
    const obj: any = {};
    if (message.events?.length) {
      obj.events = message.events.map((e) => Event.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindAllEventsResponse>, I>>(base?: I): FindAllEventsResponse {
    return FindAllEventsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindAllEventsResponse>, I>>(object: I): FindAllEventsResponse {
    const message = createBaseFindAllEventsResponse();
    message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateEventRequest(): CreateEventRequest {
  return { title: "", description: "", startTime: "", endTime: "", guests: [], inviteRequest: [] };
}

export const CreateEventRequest = {
  encode(message: CreateEventRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEventRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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

  fromJSON(object: any): CreateEventRequest {
    return {
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

  toJSON(message: CreateEventRequest): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<CreateEventRequest>, I>>(base?: I): CreateEventRequest {
    return CreateEventRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateEventRequest>, I>>(object: I): CreateEventRequest {
    const message = createBaseCreateEventRequest();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.startTime = object.startTime ?? "";
    message.endTime = object.endTime ?? "";
    message.guests = object.guests?.map((e) => Guest.fromPartial(e)) || [];
    message.inviteRequest = object.inviteRequest?.map((e) => InviteRequest.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateEventResponse(): CreateEventResponse {
  return { id: undefined, title: "", description: "", startTime: "", endTime: "", guests: [], inviteRequest: [] };
}

export const CreateEventResponse = {
  encode(message: CreateEventResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEventResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEventResponse();
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

  fromJSON(object: any): CreateEventResponse {
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

  toJSON(message: CreateEventResponse): unknown {
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

  create<I extends Exact<DeepPartial<CreateEventResponse>, I>>(base?: I): CreateEventResponse {
    return CreateEventResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateEventResponse>, I>>(object: I): CreateEventResponse {
    const message = createBaseCreateEventResponse();
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

function createBaseFindEventByIdRequest(): FindEventByIdRequest {
  return { id: "" };
}

export const FindEventByIdRequest = {
  encode(message: FindEventByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindEventByIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindEventByIdRequest();
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

  fromJSON(object: any): FindEventByIdRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: FindEventByIdRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindEventByIdRequest>, I>>(base?: I): FindEventByIdRequest {
    return FindEventByIdRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindEventByIdRequest>, I>>(object: I): FindEventByIdRequest {
    const message = createBaseFindEventByIdRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseFindEventByIdResponse(): FindEventByIdResponse {
  return { id: undefined, title: "", description: "", startTime: "", endTime: "", guests: [], inviteRequest: [] };
}

export const FindEventByIdResponse = {
  encode(message: FindEventByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): FindEventByIdResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindEventByIdResponse();
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

  fromJSON(object: any): FindEventByIdResponse {
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

  toJSON(message: FindEventByIdResponse): unknown {
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

  create<I extends Exact<DeepPartial<FindEventByIdResponse>, I>>(base?: I): FindEventByIdResponse {
    return FindEventByIdResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindEventByIdResponse>, I>>(object: I): FindEventByIdResponse {
    const message = createBaseFindEventByIdResponse();
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

function createBaseUpdateEventRequest(): UpdateEventRequest {
  return { id: undefined, title: "", description: "", startTime: "", endTime: "", guests: [], inviteRequest: [] };
}

export const UpdateEventRequest = {
  encode(message: UpdateEventRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEventRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEventRequest();
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

  fromJSON(object: any): UpdateEventRequest {
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

  toJSON(message: UpdateEventRequest): unknown {
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

  create<I extends Exact<DeepPartial<UpdateEventRequest>, I>>(base?: I): UpdateEventRequest {
    return UpdateEventRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateEventRequest>, I>>(object: I): UpdateEventRequest {
    const message = createBaseUpdateEventRequest();
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

function createBaseUpdateEventResponse(): UpdateEventResponse {
  return { id: undefined, title: "", description: "", startTime: "", endTime: "", guests: [], inviteRequest: [] };
}

export const UpdateEventResponse = {
  encode(message: UpdateEventResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEventResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEventResponse();
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

  fromJSON(object: any): UpdateEventResponse {
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

  toJSON(message: UpdateEventResponse): unknown {
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

  create<I extends Exact<DeepPartial<UpdateEventResponse>, I>>(base?: I): UpdateEventResponse {
    return UpdateEventResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateEventResponse>, I>>(object: I): UpdateEventResponse {
    const message = createBaseUpdateEventResponse();
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

function createBaseDeleteEventRequest(): DeleteEventRequest {
  return { id: "" };
}

export const DeleteEventRequest = {
  encode(message: DeleteEventRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEventRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteEventRequest();
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

  fromJSON(object: any): DeleteEventRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: DeleteEventRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteEventRequest>, I>>(base?: I): DeleteEventRequest {
    return DeleteEventRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteEventRequest>, I>>(object: I): DeleteEventRequest {
    const message = createBaseDeleteEventRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteEventResponse(): DeleteEventResponse {
  return { id: undefined, title: "", description: "", startTime: "", endTime: "", guests: [], inviteRequest: [] };
}

export const DeleteEventResponse = {
  encode(message: DeleteEventResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEventResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteEventResponse();
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

  fromJSON(object: any): DeleteEventResponse {
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

  toJSON(message: DeleteEventResponse): unknown {
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

  create<I extends Exact<DeepPartial<DeleteEventResponse>, I>>(base?: I): DeleteEventResponse {
    return DeleteEventResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteEventResponse>, I>>(object: I): DeleteEventResponse {
    const message = createBaseDeleteEventResponse();
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

export interface EventService {
  CreateEvent(request: CreateEventRequest): Promise<CreateEventResponse>;
  FindAllEvents(request: FindAllEventsRequest): Promise<FindAllEventsResponse>;
  FindEventById(request: FindEventByIdRequest): Promise<FindEventByIdResponse>;
  UpdateEvent(request: UpdateEventRequest): Promise<UpdateEventResponse>;
  DeleteEvent(request: DeleteEventRequest): Promise<DeleteEventResponse>;
}

export const EventServiceServiceName = "event.EventService";
export class EventServiceClientImpl implements EventService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || EventServiceServiceName;
    this.rpc = rpc;
    this.CreateEvent = this.CreateEvent.bind(this);
    this.FindAllEvents = this.FindAllEvents.bind(this);
    this.FindEventById = this.FindEventById.bind(this);
    this.UpdateEvent = this.UpdateEvent.bind(this);
    this.DeleteEvent = this.DeleteEvent.bind(this);
  }
  CreateEvent(request: CreateEventRequest): Promise<CreateEventResponse> {
    const data = CreateEventRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateEvent", data);
    return promise.then((data) => CreateEventResponse.decode(_m0.Reader.create(data)));
  }

  FindAllEvents(request: FindAllEventsRequest): Promise<FindAllEventsResponse> {
    const data = FindAllEventsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindAllEvents", data);
    return promise.then((data) => FindAllEventsResponse.decode(_m0.Reader.create(data)));
  }

  FindEventById(request: FindEventByIdRequest): Promise<FindEventByIdResponse> {
    const data = FindEventByIdRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindEventById", data);
    return promise.then((data) => FindEventByIdResponse.decode(_m0.Reader.create(data)));
  }

  UpdateEvent(request: UpdateEventRequest): Promise<UpdateEventResponse> {
    const data = UpdateEventRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateEvent", data);
    return promise.then((data) => UpdateEventResponse.decode(_m0.Reader.create(data)));
  }

  DeleteEvent(request: DeleteEventRequest): Promise<DeleteEventResponse> {
    const data = DeleteEventRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteEvent", data);
    return promise.then((data) => DeleteEventResponse.decode(_m0.Reader.create(data)));
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
