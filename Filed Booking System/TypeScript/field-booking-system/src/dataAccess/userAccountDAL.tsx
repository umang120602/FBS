import { MTApiGet, MTApiPost, MTApiPut } from "../utils/MTApiUtils";


const ENDPOINT = "/UserAccount/";


export const doUpdateUserAccountPassword = (query: any) => {
  return MTApiPost(ENDPOINT + "UpdateUserAccountPassword", query);
};
