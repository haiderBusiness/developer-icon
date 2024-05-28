import { useEffect } from 'react';

const usePreventScroll = (ref) => {
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();

    const disableScroll = () => {
      if (ref.current) {
        ref.current.addEventListener('wheel', preventDefault, { passive: false });
        ref.current.addEventListener('touchmove', preventDefault, { passive: false });
      }
    };

    const enableScroll = () => {
      if (ref.current) {
        ref.current.removeEventListener('wheel', preventDefault, { passive: false });
        ref.current.removeEventListener('touchmove', preventDefault, { passive: false });
      }
    };

    const handleMouseDown = () => {
      disableScroll();
    };

    const handleMouseUp = () => {
      enableScroll();
    };

    if (ref.current) {
      ref.current.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp); // Listen to mouseup on the window to ensure we catch it even if the mouse is released outside the div
    }

    // Cleanup
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mousedown', handleMouseDown);
      }
      window.removeEventListener('mouseup', handleMouseUp);
      enableScroll(); // Ensure scrolling is enabled when the component unmounts
    };
  }, [ref]);
};

export default usePreventScroll;
