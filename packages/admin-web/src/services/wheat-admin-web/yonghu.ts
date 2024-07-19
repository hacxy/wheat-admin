// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 查询所有用户 GET /api/user */
export async function userControllerFindAll(options?: { [key: string]: any }) {
  return request<API.CommonResponseVo & any>('/api/user', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 创建用户 POST /api/user */
export async function userControllerCreate(
  body: API.CreateUserDto,
  options?: { [key: string]: any },
) {
  return request<API.CommonResponseVo & any>('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询单个用户 GET /api/user/${param0} */
export async function userControllerFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserControllerFindOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CommonResponseVo & any>(`/api/user/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除用户 DELETE /api/user/${param0} */
export async function userControllerRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserControllerRemoveParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CommonResponseVo & any>(`/api/user/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新用户 PATCH /api/user/${param0} */
export async function userControllerUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.UserControllerUpdateParams,
  body: API.UpdateUserDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.CommonResponseVo & any>(`/api/user/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
