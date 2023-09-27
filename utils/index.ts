export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "9471788975msh07e7988dd97536ep1c4beejsn61243bc4b8a1",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    { headers: headers }
  );

  const result = await response.json();
  return result;
}
