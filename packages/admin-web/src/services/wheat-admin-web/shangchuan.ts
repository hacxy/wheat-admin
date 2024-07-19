// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 按字段上传文件的示例 POST /api/upload/fields */
export async function uploadControllerUploadMultipleFiles(
  body: {},
  avatar?: File,
  background?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (avatar) {
    formData.append('avatar', avatar);
  }

  if (background) {
    formData.append('background', background);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.CommonResponseVo & any>('/api/upload/fields', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 上传单个文件的示例 POST /api/upload/file */
export async function uploadControllerUpload(
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.CommonResponseVo & { data?: string }>('/api/upload/file', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 上传多个文件的示例 POST /api/upload/files */
export async function uploadControllerUploads(
  body: {},
  files?: File[],
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (files) {
    files.forEach((f) => formData.append('files', f || ''));
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.CommonResponseVo & { data?: string }>('/api/upload/files', {
    method: 'POST',
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}
