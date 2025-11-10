export interface MediaFile{
    file:File;
    preview:string;
    type:"images"|"video",
    uploadId?:number,
    uploadProgress?:number
    isUploading?:boolean
}

export type Audience="everyone" | "circle";
export type TabType="for-you" | "following";

export const CHUNK_SIZE=1024 * 1024;
export const MAX_VIDEO_SIZE=1024 * 1024 *1024;
export const MAX_IMAGE_SIZE=10 * 1024* 1024;
export const MAX_CONNTENT_LENGTH=200;
