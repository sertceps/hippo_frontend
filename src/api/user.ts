import request from '@/utils/request'

class UserApis {
  static login(email: string, password: string) {
    return request({
      url: 'users/login',
      method: 'POST',
      data: {
        email,
        password
      }
    })
  }
}


export default UserApis