declare namespace API {
  type AuthDto = {
    /** 用户名 */
    username: string;
    /** 密码 */
    password: string;
    /** 是否自动登录 */
    autoLogin: boolean;
    /** 登录类型 */
    type: string;
  };

  type AuthVo = {
    /** token */
    token: string;
  };

  type CommonResponseVo = {
    /** 响应状态码 */
    code: number;
    /** 响应信息 */
    msg: string;
  };

  type CreateUserDto = {
    /** 用户名 */
    username: string;
    /** 手机号 */
    mobile: string;
    /** 邮箱 */
    email: string;
  };

  type UpdateUserDto = {};

  type UserControllerFindOneParams = {
    id: string;
  };

  type UserControllerRemoveParams = {
    id: string;
  };

  type UserControllerUpdateParams = {
    id: string;
  };
}
