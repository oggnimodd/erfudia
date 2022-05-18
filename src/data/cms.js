const mapGlobFiles = (obj) => {
  return Object.keys(obj).map((i) => {
    return obj[i].default;
  });
};

// Meta glob eager don't accept variable
const files = {
  faqs: import.meta.globEager('../../content/faqs/*.json'),
  services: import.meta.globEager('../../content/services/*.json'),
  teamMembers: import.meta.globEager('../../content/team-members/*.json'),
  testimonials: import.meta.globEager('../../content/testimonials/*.json'),
};

Object.keys(files).forEach((i) => {
  files[i] = mapGlobFiles(files[i]);
});

export default files;
