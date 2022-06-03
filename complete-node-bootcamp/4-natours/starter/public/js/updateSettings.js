// /* eslint-disable */
import { showAlert } from './alerts';
// // update data of user
// // type is either 'password or ' data
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? 'http://localhost:3000/api/v1/users/updateMyPassword'
        : 'http://localhost:3000/api/v1/users/updateMe';

    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });
     
    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully`);
    } 
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
  