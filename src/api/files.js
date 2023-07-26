export const singleFile = async function (formData) {
  const response = await fetch(`${import.meta.env.VITE_APP_FILES_URL}upload`, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data;
};

export const multiFiles = async function (formData) {
  const response = await fetch(`${import.meta.env.VITE_APP_FILES_URL}uploads`, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data;
};
