import { useEffect, useRef } from 'react';

/**
 * Custom hook to handle executing a side effect at a specified interval 
 * @param {function} callback - callback function to be executed at the specified interval 
 * @param {number} delay - the number of seconds for the interval 
 */
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();
  // Remember the latest callback.
  useEffect(() => savedCallback.current = callback, [callback]);

  // Set up the interval.
  useEffect(() => {
    /* retrieve the callback function to be executed 
     * at the specified interval
     */
    const tick = () => savedCallback.current();

    /** as long as there is a delay, execute the 
     * callback function, and reset the interval 
     */
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id)
    }
  }, [delay]);
}