const baseURL = "https://soliverson.github.io/scoots/";
const url = "https://soliverson.github.io/scoots/data/data.json"

const tbody = document.querySelector("tbody");

async function pricing() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      crearTabla(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

const crearTabla = (data) => {
  // Se extrae el valor vehicles del objeto que retorna la función "getdata" y se lo asigna a la variable "motos"
  const { vehicles: motos } = data;

  motos.forEach((
    {
      // Se extraen los valores "rental_type", "max_persons", "reservation" del objeto "vehicles"
      rental_image,
      rental_type,
      max_persons,
      reservation: {
        // Se extraen los valores "reservation" y "walkIn"
        reservation: {
          // Se extraen los valores "halfday3hsR" y "fullDayR" del objeto "reservation"
          halfday3hsR,
          fullDayR
        },
        walkIn: {
          // Se extraen los valores "halfday3hsR" y "fullDayR" del objeto "walkIn"
          halfday3hsW,
          fullDayW
        }
      }
    }
  ) => {
    tbody.innerHTML += `
            <tr>
                <td>${rental_image}</td>
                <td>${rental_type}</td>
                <td>${max_persons}</td>
                <td>${halfday3hsR}</td>
                <td>${fullDayR}</td>
                <td>${halfday3hsW}</td>
                <td>${fullDayW}</td>
                </tr>
                `;
  });
}

pricing();