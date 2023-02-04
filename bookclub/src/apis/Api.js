import axios from 'axios';

export const request = async (data) => {
    const result =  await axios({
          method: 'GET',
          url : 'http://localhost:4000/menu',
          data
      })
      .then(res => res.data)
      .catch(error => console.log(error));

      return await result
};

export const userRequest = async (data) => {
    const result =  await axios({
          method: 'GET',
          url : 'http://localhost:4000/user',
          data
      })
      .then(res => res.data)
      .catch(error => console.log(error));

      return await result
};

export const logoRequest = async (data) => {
    const result =  await axios({
          method: 'GET',
          url : 'http://localhost:4000/logo',
          data
      })
      .then(res => res.data)
      .catch(error => console.log(error));

      return await result
};

export const updateBookRequest = async (data) => {
    await axios({
          method: 'PUT',
          url : `http://localhost:4000/menu/${data.id}`,
          data
      })
};

export const RegistBookRequest = async (data) => {
    const result =  await axios({
        method: 'GET',
        url : 'http://localhost:4000/menu/',
        data
    })
    .then(res => res.data)
    .catch(error => console.log(error));

    return await result
};

export const deleteRequest = async (id) => {
    const result =  await axios({
        method: 'DELETE',
        url : `http://localhost:4000/menu/${id}`
    })
    .then(res => res.data)
    .catch(error => console.log(error));

    return await result
};

