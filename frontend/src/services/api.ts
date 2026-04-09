const API_BASE = "http://localhost:5000/api";

export const getHero = async () => {
  const res = await fetch(`${API_BASE}/hero`);
  return res.json();
};

export const getProjects = async () => {
  const res = await fetch(`${API_BASE}/projects`);
  return res.json();
};

export const sendContact = async (data:any) => {
  const res = await fetch(`${API_BASE}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};