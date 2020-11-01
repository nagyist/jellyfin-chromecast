/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { CodecProfile } from './codec-profile';
import { ContainerProfile } from './container-profile';
import { DeviceIdentification } from './device-identification';
import { DirectPlayProfile } from './direct-play-profile';
import { ResponseProfile } from './response-profile';
import { SubtitleProfile } from './subtitle-profile';
import { TranscodingProfile } from './transcoding-profile';
import { XmlAttribute } from './xml-attribute';

/**
 * 
 * @export
 * @interface DeviceProfile
 */
export interface DeviceProfile {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof DeviceProfile
     */
    Name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeviceProfile
     */
    Id?: string | null;
    /**
     * 
     * @type {DeviceIdentification}
     * @memberof DeviceProfile
     */
    Identification?: DeviceIdentification;
    /**
     * 
     * @type {string}
     * @memberof DeviceProfile
     */
    FriendlyName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeviceProfile
     */
    Manufacturer?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeviceProfile
     */
    ManufacturerUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeviceProfile
     */
    ModelName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeviceProfile
     */
    ModelDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeviceProfile
     */
    ModelNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeviceProfile
     */
    ModelUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeviceProfile
     */
    SerialNumber?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DeviceProfile
     */
    EnableAlbumArtInDidl?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DeviceProfile
     */
    EnableSingleAlbumArtLimit?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DeviceProfile
     */
    EnableSingleSubtitleLimit?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DeviceProfile
     */
    SupportedMediaTypes?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeviceProfile
     */
    UserId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeviceProfile
     */
    AlbumArtPn?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DeviceProfile
     */
    MaxAlbumArtWidth?: number;
    /**
     * 
     * @type {number}
     * @memberof DeviceProfile
     */
    MaxAlbumArtHeight?: number;
    /**
     * 
     * @type {number}
     * @memberof DeviceProfile
     */
    MaxIconWidth?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DeviceProfile
     */
    MaxIconHeight?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DeviceProfile
     */
    MaxStreamingBitrate?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DeviceProfile
     */
    MaxStaticBitrate?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DeviceProfile
     */
    MusicStreamingTranscodingBitrate?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DeviceProfile
     */
    MaxStaticMusicBitrate?: number | null;
    /**
     * Controls the content of the aggregationFlags element in the urn:schemas-sonycom:av namespace.
     * @type {string}
     * @memberof DeviceProfile
     */
    SonyAggregationFlags?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DeviceProfile
     */
    ProtocolInfo?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DeviceProfile
     */
    TimelineOffsetSeconds?: number;
    /**
     * 
     * @type {boolean}
     * @memberof DeviceProfile
     */
    RequiresPlainVideoItems?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DeviceProfile
     */
    RequiresPlainFolders?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DeviceProfile
     */
    EnableMSMediaReceiverRegistrar?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DeviceProfile
     */
    IgnoreTranscodeByteRangeRequests?: boolean;
    /**
     * 
     * @type {Array<XmlAttribute>}
     * @memberof DeviceProfile
     */
    XmlRootAttributes?: Array<XmlAttribute> | null;
    /**
     * Gets or sets the direct play profiles.
     * @type {Array<DirectPlayProfile>}
     * @memberof DeviceProfile
     */
    DirectPlayProfiles?: Array<DirectPlayProfile> | null;
    /**
     * Gets or sets the transcoding profiles.
     * @type {Array<TranscodingProfile>}
     * @memberof DeviceProfile
     */
    TranscodingProfiles?: Array<TranscodingProfile> | null;
    /**
     * 
     * @type {Array<ContainerProfile>}
     * @memberof DeviceProfile
     */
    ContainerProfiles?: Array<ContainerProfile> | null;
    /**
     * 
     * @type {Array<CodecProfile>}
     * @memberof DeviceProfile
     */
    CodecProfiles?: Array<CodecProfile> | null;
    /**
     * 
     * @type {Array<ResponseProfile>}
     * @memberof DeviceProfile
     */
    ResponseProfiles?: Array<ResponseProfile> | null;
    /**
     * 
     * @type {Array<SubtitleProfile>}
     * @memberof DeviceProfile
     */
    SubtitleProfiles?: Array<SubtitleProfile> | null;
}


