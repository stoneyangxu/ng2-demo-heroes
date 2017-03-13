import {User} from "./user.model";
import {Injectable} from "@angular/core";
/**
 * Created by yangxu on 2017/3/8.
 */

@Injectable()
export class UserService {
  isLoggedIn: boolean;
  user: User;
}
