import { isRunning } from 'services/functions/scheduleThis';

export const isMartiniBarOpen = () => {
  return isRunning([2022, 12, 15]) ? true : false;
};
