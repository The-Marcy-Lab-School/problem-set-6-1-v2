import {
  renderStatus,
  setupPageBasics,
  renderUsers,
  renderPosts,
  renderNewUser,
} from './render-functions.js';
import {
  checkResponseStatus,
  getUserPosts,
  createNewUser,
  getUsers
} from './fetch-functions.js';

export default function app(appDiv) {
  const { statusDiv, usersUl, postsUl, newUserForm, newUserDiv } = setupPageBasics(appDiv);

  usersUl.addEventListener('click', (e) => {
  })

  newUserForm.addEventListener('submit', (e) => {
  })
}