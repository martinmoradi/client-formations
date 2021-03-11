// @ts-nocheck
import { config } from '../../../redux/auth/authMiddleware';

export const fetchUsersToValidate = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/v1/users_validation`,
    config('GET')
  );
  const batchData = await response.json();
  const users = batchData.data.map(user => ({
    ...user.attributes,
    full_name: `${user.attributes.first_name} ${user.attributes.last_name}`,
  }));
  return users;
};

export const validateUser = async id => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/v1/users/${id}`,
      config('PUT', { user: { is_validated: true } })
    );
    const user = await response.json();
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const deleteUser = async id => {
  try {
    console.log(id);
    await fetch(`${process.env.REACT_APP_BASE_URL}/v1/users/${id}`, config('DELETE'));
    return true;
  } catch (err) {
    throw new Error(err.message);
  }
};
