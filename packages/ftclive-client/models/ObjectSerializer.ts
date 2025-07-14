export * from '../models/ApiAutoLocation.js';
export * from '../models/ApiSeasonSpecificMatchDetailed.js';
export * from '../models/ApiSeasonSpecificMatchDetailedList.js';
export * from '../models/ApiTeleopLocation.js';
export * from '../models/ApiV1ActiveMatchList.js';
export * from '../models/ApiV1ElimsAlliance.js';
export * from '../models/ApiV1ElimsAllianceList.js';
export * from '../models/ApiV1ElimsMatch.js';
export * from '../models/ApiV1ElimsMatchList.js';
export * from '../models/ApiV1Error.js';
export * from '../models/ApiV1Event.js';
export * from '../models/ApiV1EventList.js';
export * from '../models/ApiV1FullSeasonSpecificEvent.js';
export * from '../models/ApiV1IntoTheDeepScoreBreakdown.js';
export * from '../models/ApiV1Key.js';
export * from '../models/ApiV1KeyStatus.js';
export * from '../models/ApiV1MatchBrief.js';
export * from '../models/ApiV1MatchBriefRed.js';
export * from '../models/ApiV1MatchDetailed.js';
export * from '../models/ApiV1MatchDetailedList.js';
export * from '../models/ApiV1MatchList.js';
export * from '../models/ApiV1QualsAlliance.js';
export * from '../models/ApiV1Ranking.js';
export * from '../models/ApiV1RankingList.js';
export * from '../models/ApiV1ScoreBreakdown.js';
export * from '../models/ApiV1StatusList.js';
export * from '../models/ApiV1StatusType.js';
export * from '../models/ApiV1Team.js';
export * from '../models/ApiV1TeamDetailedList.js';
export * from '../models/ApiV1TeamList.js';
export * from '../models/ApiV1TeamStatus.js';
export * from '../models/ApiV1Version.js';
export * from '../models/ApiV1WifiAssignment.js';
export * from '../models/ApiV1WifiAssignmentList.js';
export * from '../models/ApiV2Award.js';
export * from '../models/ApiV2AwardAssignment.js';
export * from '../models/ApiV2AwardList.js';
export * from '../models/ApiV2FullEvent.js';
export * from '../models/ApiV2Update.js';
export * from '../models/ApiV2UpdateMatchPayload.js';
export * from '../models/ApiV2UpdateType.js';
export * from '../models/ErrorCodes.js';
export * from '../models/StackTraceElement.js';
export * from '../models/Status.js';
export * from '../models/Throwable.js';

import { ApiAutoLocation } from '../models/ApiAutoLocation.js';
import { ApiSeasonSpecificMatchDetailed } from '../models/ApiSeasonSpecificMatchDetailed.js';
import { ApiSeasonSpecificMatchDetailedList } from '../models/ApiSeasonSpecificMatchDetailedList.js';
import { ApiTeleopLocation } from '../models/ApiTeleopLocation.js';
import { ApiV1ActiveMatchList } from '../models/ApiV1ActiveMatchList.js';
import { ApiV1ElimsAlliance } from '../models/ApiV1ElimsAlliance.js';
import { ApiV1ElimsAllianceList } from '../models/ApiV1ElimsAllianceList.js';
import { ApiV1ElimsMatch } from '../models/ApiV1ElimsMatch.js';
import { ApiV1ElimsMatchList } from '../models/ApiV1ElimsMatchList.js';
import { ApiV1Error            } from '../models/ApiV1Error.js';
import { ApiV1Event } from '../models/ApiV1Event.js';
import { ApiV1EventList } from '../models/ApiV1EventList.js';
import { ApiV1FullSeasonSpecificEvent } from '../models/ApiV1FullSeasonSpecificEvent.js';
import { ApiV1IntoTheDeepScoreBreakdown                                  } from '../models/ApiV1IntoTheDeepScoreBreakdown.js';
import { ApiV1Key } from '../models/ApiV1Key.js';
import { ApiV1KeyStatus } from '../models/ApiV1KeyStatus.js';
import { ApiV1MatchBrief } from '../models/ApiV1MatchBrief.js';
import { ApiV1MatchBriefRedClass } from '../models/ApiV1MatchBriefRed.js';
import { ApiV1MatchDetailed } from '../models/ApiV1MatchDetailed.js';
import { ApiV1MatchDetailedList } from '../models/ApiV1MatchDetailedList.js';
import { ApiV1MatchList } from '../models/ApiV1MatchList.js';
import { ApiV1QualsAlliance } from '../models/ApiV1QualsAlliance.js';
import { ApiV1Ranking } from '../models/ApiV1Ranking.js';
import { ApiV1RankingList } from '../models/ApiV1RankingList.js';
import { ApiV1ScoreBreakdown } from '../models/ApiV1ScoreBreakdown.js';
import { ApiV1StatusList } from '../models/ApiV1StatusList.js';
import { ApiV1StatusType } from '../models/ApiV1StatusType.js';
import { ApiV1Team } from '../models/ApiV1Team.js';
import { ApiV1TeamDetailedList } from '../models/ApiV1TeamDetailedList.js';
import { ApiV1TeamList } from '../models/ApiV1TeamList.js';
import { ApiV1TeamStatus } from '../models/ApiV1TeamStatus.js';
import { ApiV1Version } from '../models/ApiV1Version.js';
import { ApiV1WifiAssignment } from '../models/ApiV1WifiAssignment.js';
import { ApiV1WifiAssignmentList } from '../models/ApiV1WifiAssignmentList.js';
import { ApiV2Award } from '../models/ApiV2Award.js';
import { ApiV2AwardAssignment } from '../models/ApiV2AwardAssignment.js';
import { ApiV2AwardList } from '../models/ApiV2AwardList.js';
import { ApiV2FullEvent } from '../models/ApiV2FullEvent.js';
import { ApiV2Update    } from '../models/ApiV2Update.js';
import { ApiV2UpdateMatchPayload } from '../models/ApiV2UpdateMatchPayload.js';
import { ApiV2UpdateType } from '../models/ApiV2UpdateType.js';
import { ErrorCodes } from '../models/ErrorCodes.js';
import { StackTraceElement } from '../models/StackTraceElement.js';
import { Status } from '../models/Status.js';
import { Throwable } from '../models/Throwable.js';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "ApiAutoLocation",
    "ApiTeleopLocation",
    "ApiV2UpdateType",
    "ErrorCodes",
    "Status",
]);

let typeMap: {[index: string]: any} = {
    "ApiSeasonSpecificMatchDetailed": ApiSeasonSpecificMatchDetailed,
    "ApiSeasonSpecificMatchDetailedList": ApiSeasonSpecificMatchDetailedList,
    "ApiV1ActiveMatchList": ApiV1ActiveMatchList,
    "ApiV1ElimsAlliance": ApiV1ElimsAlliance,
    "ApiV1ElimsAllianceList": ApiV1ElimsAllianceList,
    "ApiV1ElimsMatch": ApiV1ElimsMatch,
    "ApiV1ElimsMatchList": ApiV1ElimsMatchList,
    "ApiV1Error": ApiV1Error,
    "ApiV1Event": ApiV1Event,
    "ApiV1EventList": ApiV1EventList,
    "ApiV1FullSeasonSpecificEvent": ApiV1FullSeasonSpecificEvent,
    "ApiV1IntoTheDeepScoreBreakdown": ApiV1IntoTheDeepScoreBreakdown,
    "ApiV1Key": ApiV1Key,
    "ApiV1KeyStatus": ApiV1KeyStatus,
    "ApiV1MatchBrief": ApiV1MatchBrief,
    "ApiV1MatchBriefRed": ApiV1MatchBriefRedClass,
    "ApiV1MatchDetailed": ApiV1MatchDetailed,
    "ApiV1MatchDetailedList": ApiV1MatchDetailedList,
    "ApiV1MatchList": ApiV1MatchList,
    "ApiV1QualsAlliance": ApiV1QualsAlliance,
    "ApiV1Ranking": ApiV1Ranking,
    "ApiV1RankingList": ApiV1RankingList,
    "ApiV1ScoreBreakdown": ApiV1ScoreBreakdown,
    "ApiV1StatusList": ApiV1StatusList,
    "ApiV1StatusType": ApiV1StatusType,
    "ApiV1Team": ApiV1Team,
    "ApiV1TeamDetailedList": ApiV1TeamDetailedList,
    "ApiV1TeamList": ApiV1TeamList,
    "ApiV1TeamStatus": ApiV1TeamStatus,
    "ApiV1Version": ApiV1Version,
    "ApiV1WifiAssignment": ApiV1WifiAssignment,
    "ApiV1WifiAssignmentList": ApiV1WifiAssignmentList,
    "ApiV2Award": ApiV2Award,
    "ApiV2AwardAssignment": ApiV2AwardAssignment,
    "ApiV2AwardList": ApiV2AwardList,
    "ApiV2FullEvent": ApiV2FullEvent,
    "ApiV2Update": ApiV2Update,
    "ApiV2UpdateMatchPayload": ApiV2UpdateMatchPayload,
    "StackTraceElement": StackTraceElement,
    "Throwable": Throwable,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type = '', subtype = ''] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if(typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return (mediaType.split(";")[0] ?? '').trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(ObjectSerializer.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
