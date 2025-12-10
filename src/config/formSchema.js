export const FORM_SCHEMA = {
  book: [
    { name: "name", label: "Name" },
    { name: "description", label: "Description" },
    { name: "author", label: "Author" },
    { name: "publishedYear", label: "Published Year", keyboardType: "numeric" },
    { name: "genre", label: "Genre" },
  ],

  contact: [
    { name: "name", label: "Name" },
    { name: "location", label: "Location" },
    { name: "mobile1", label: "Mobile 1", keyboardType: "phone-pad" },
    { name: "mobile2", label: "Mobile 2", keyboardType: "phone-pad" },
    { name: "city", label: "City" },
  ],
};
