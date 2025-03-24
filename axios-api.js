// Importation de la librairie Axios
const axios = require('axios');
require('dotenv').config(); // Importation de dotenv

const API_BASE_URL = process.env.API_BASE_URL; // Utilisation de la variable d'environnement

// Fonction pour créer un nouveau post
const createPost = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/posts`, {
      name: 'Koul',
      username: 'Youss',
        email: 'koul@gmail.com',
      userId: 1,
    });
    console.log('Création réussie :', response.data);
  } catch (error) {
    console.error('Erreur lors de la création :', error.message);
  }
};

// Fonction pour lire tous les posts
const getPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts`);
    console.log('Liste des posts :', response.data);
  } catch (error) {
    console.error('Erreur lors de la récupération :', error.message);
  }
};

// Fonction pour mettre à jour un post
const updatePost = async (postId) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/posts/${postId}`, {
        name: 'Koul',
        username: 'Youss',
          email: 'koul@gmail.com',
      userId: 1,
    });
    console.log('Mise à jour réussie :', response.data);
  } catch (error) {
    console.error('Erreur lors de la mise à jour :', error.message);
  }
};

// Fonction pour supprimer un post
const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/posts/${postId}`);
    console.log('Suppression réussie, code statut :', response.status);
  } catch (error) {
    console.error('Erreur lors de la suppression :', error.message);
  }
};

// Appels des fonctions pour tester
(async () => {
  await createPost(); // Crée un nouveau post
  await getPosts();   // Affiche tous les posts
  await updatePost(1); // Met à jour le post avec l'ID 1
  await deletePost(1); // Supprime le post avec l'ID 1
})();