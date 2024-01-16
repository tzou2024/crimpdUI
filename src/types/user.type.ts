export default interface IUser {
    id?: any | null,
    username: string,
    email: string,
    pwd: string,
    roles?: Array<string>
  }