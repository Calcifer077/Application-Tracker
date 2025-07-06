import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        // 'ref.current' is the window that is displayed when we use modal.
        // So if 'ref.current' exists and 'ref.current' doesn't contain 'e.target' meaning that the click was outisde
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      // what happens here is that the event is captured in the bubbling phase due to which the window closes as soon as it opens.
      // By not capturing the event in the bubbling phase, we can avoid this behaviour and catch the event in capturing phase.
      // To do so just just add a third argument which tells whether the even should be captured in the capturing phase or not.
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
