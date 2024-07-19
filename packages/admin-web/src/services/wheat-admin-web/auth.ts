// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 授权接口 登录授权获取token POST /api/auth */
export async function authControllerLogin(body: API.AuthDto, options?: { [key: string]: any }) {
  return request<API.CommonResponseVo & { data?: API.AuthVo }>('/api/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
