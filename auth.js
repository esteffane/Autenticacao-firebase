// auth.js
const firebase = require('firebase-admin');
const config = require('./auntenticacao-firebase-firebase-adminsdk-u8keh-4396d0de32.json');

firebase.initializeApp({
  credential: firebase.credential.cert(config),
});

const auth = firebase.auth();

async function listUsers() {
  try {
    const listUsersResult = await auth.listUsers();
    const users = listUsersResult.users;
    return users;
  } catch (error) {
    throw new Error(`Erro ao listar usuários: ${error.message}`);
  }
}

module.exports = {
  auth,
  listUsers,
};

