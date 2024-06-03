import { useEffect } from 'react';

const useScrollPosition = (scrollOffsetY = 1) => {
  useEffect(() => {
    let scrollPosY = 0;
    let busy = false;
    let onTop = true;
    const elements = document.getElementsByClassName("sps");

    const onScroll = () => {
      if (!busy) {
        scrollPosY = window.pageYOffset;
        if (onTop && scrollPosY > scrollOffsetY) {
          busy = true;
          onTop = false;
          window.requestAnimationFrame(belowScrollPos);
        } else if (!onTop && scrollPosY <= scrollOffsetY) {
          busy = true;
          onTop = true;
          window.requestAnimationFrame(aboveScrollPos);
        }
      }
    };

    const aboveScrollPos = () => {
      for (let i = 0; elements[i]; ++i) {
        elements[i].classList.add("sps--abv");
        elements[i].classList.remove("sps--blw");
      }
      busy = false;
    };

    const belowScrollPos = () => {
      for (let i = 0; elements[i]; ++i) {
        elements[i].classList.add("sps--blw");
        elements[i].classList.remove("sps--abv");
      }
      busy = false;
    };

    const init = () => {
      busy = true;
      scrollPosY = window.pageYOffset;
      if (scrollPosY > scrollOffsetY) {
        onTop = false;
        window.requestAnimationFrame(belowScrollPos);
      } else {
        onTop = true;
        window.requestAnimationFrame(aboveScrollPos);
      }
    };

    document.addEventListener("DOMContentLoaded", () => {
      window.setTimeout(init, 1);
    });

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollOffsetY]);
};

export default useScrollPosition;
