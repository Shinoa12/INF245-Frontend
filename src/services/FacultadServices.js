import HttpClient from "../http-common";

export const listarFacultades = () => {
  return new Promise((resolve, reject) => {
    HttpClient.get("facultad")
      .then((resultado) => {
        resolve(resultado);
      })
      .catch((error) => {
        resolve(error);
      });
  });
};
