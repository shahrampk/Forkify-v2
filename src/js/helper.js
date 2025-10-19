import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long!`));
    }, s * 1000);
  });
};
export async function getJSON(url) {
  try {
    const respones = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await respones.json();
    if (!respones.ok) throw new Error(`${data.message} - ${respones.status}`);
    return data;
  } catch (error) {
    throw error;
  }
}
