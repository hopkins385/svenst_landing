export const useScrollTo = () => {
  function scrollTo(elId: string) {
    if (!document) {
      console.error('document is not defined');
      return;
    }
    const el = document.getElementById(elId);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      console.error(`Element with id ${elId} not found`);
    }
  }

  return {
    scrollTo,
  };
};
