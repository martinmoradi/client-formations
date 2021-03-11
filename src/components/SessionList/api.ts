// @ts-nocheck
import { config } from '../../redux/auth/authMiddleware';

export const fetchSessions = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/v1/course_sessions`,
    config('GET')
  );
  const batchData = await response.json();
  const sessions = batchData.data.map(session => ({
    ...session,
    course_title: session.attributes.course_title,
    date: session.attributes.date,
    remaining_seats: session.attributes.remaining_seats,
    room_location: session.attributes.room_location
  }));
  console.log('sessions:', sessions)
  return sessions;
};


export const deleteSession = async id => {
  try {
    console.log(id);
    await fetch(`${process.env.REACT_APP_BASE_URL}/v1/course_sessions/${id}`, config('DELETE'));
    return true;
  } catch (err) {
    throw new Error(err.message);
  }
};
