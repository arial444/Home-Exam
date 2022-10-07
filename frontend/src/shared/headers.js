export const getHeaders = () => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('GET', 'POST', 'OPTIONS');
  return headers
}

export const getAllUsers = () => {
  return fetch('http://localhost:3000/api/getAllUsers', {
    method: 'POST',
    headers: getHeaders(),
})}

export const getUserById = (id) => {
  return fetch('http://localhost:3000/api/getUserById', {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({_id: id}),
})}

export const updateUser = (id, doc) => {
  fetch('http://localhost:3000/api/updateUser', {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({_id: id, email: doc.email, role: doc.role, salary: doc.salary, manager: doc.manager})
})}

export const createUser = (doc) => {
  fetch('http://localhost:3000/api/createUser', {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({firstName: doc.firstName, lastName: doc.lastName, dateStarted: doc.dateStarted})
})}

export const deleteUser = (id) => {
  fetch('http://localhost:3000/api/deleteUser', {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({_id: id})
})}

export const getManagerAndEmployees = () => {
  return fetch('http://localhost:3000/api/getManagerAndEmployees', {
    method: 'POST',
    headers: getHeaders(),
})}