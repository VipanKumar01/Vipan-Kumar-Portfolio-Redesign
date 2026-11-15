import { useEffect } from "react";

const BASE = "https://vipankumar.tech";

const setMeta = (selector, attr, name, content) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const upsertJsonLd = (id, data) => {
  let el = document.head.querySelector(`script[data-seo-id="${id}"]`);
  if (!el) {
    el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.setAttribute("data-seo-id", id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
};

/**
 * Sets per-page SEO metadata: title, description, canonical, Open Graph and
 * Twitter Card tags. Falls back to defaults for any omitted value.
 */
/**
 * @param {object} opts
 * @param {string} [opts.title]
 * @param {string} [opts.description]
 * @param {string} [opts.url] route path or absolute URL
 * @param {string} [opts.breadcrumb] plain label shown in BreadcrumbList JSON-LD (e.g. "Intradiem Case Study")
 */
export const useSeo = ({ title, description, url = "/", breadcrumb } = {}) => {
  useEffect(() => {
    const fullTitle = title || "Vipan Kumar — Backend & Full-Stack Developer";
    const fullDesc =
      description ||
      "Spring Boot microservices, Kafka, Redis, secure APIs, React.js & React Native. Building reliable software for the web, mobile and backend.";
    const fullUrl = url.startsWith("http") ? url : `${BASE}${url}`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', "name", "description", fullDesc);
    setLink("canonical", fullUrl);

    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", fullDesc);
    setMeta('meta[property="og:url"]', "property", "og:url", fullUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", `${BASE}/og-image.png`);

    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", fullDesc);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", `${BASE}/og-image.png`);

    if (breadcrumb) {
      upsertJsonLd("breadcrumb", {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
          { "@type": "ListItem", position: 2, name: "Work", item: `${BASE}/#work` },
          { "@type": "ListItem", position: 3, name: breadcrumb, item: fullUrl },
        ],
      });
    }
  }, [title, description, url, breadcrumb]);
};
