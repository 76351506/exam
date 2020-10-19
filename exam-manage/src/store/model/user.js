/*
 * @Author: heinan 
 * @Date: 2020-10-12 13:02:32 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-10-12 14:09:44
 */
import { observable, flow } from 'mobx';
import { _getApi } from "@/api/user";

class App {
  namespace = "user";
  @observable test = "";

  updateToken = flow(function* () {
   
    const result = yield _getApi();
    this.test = result.data.msg;
    console.log(this.test)
  })
}

export default new App();
