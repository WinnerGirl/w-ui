import fetch from '../../../plugins/util/fetch';

/**
 * 获取我的家园信息
*/
export const myFamilyInfo = () => fetch.get('/t/family/getMyFamilyInfo', {
  uid: '19020',
  token: '3503236c79dba3326f54b39f0e73c825'
});
