export const scrollToId = (id) => {
  const el = document.querySelector(id);
  if (!el) {
    window.location.href = `/${id}`;
    return;
  }
  if (window.__lenis) {
    window.__lenis.resize();
    window.__lenis.scrollTo(el, { offset: 0 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
