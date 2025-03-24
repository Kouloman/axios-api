// Importation de la librairie Axios
const axios = require('axios');

// Fonction pour créer un nouveau post
const createPost = async () => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'Titre Exemple',
      body: 'Contenu Exemple',
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
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log('Liste des posts :', response.data);
  } catch (error) {
    console.error('Erreur lors de la récupération :', error.message);
  }
};

// Fonction pour mettre à jour un post
const updatePost = async (postId) => {
  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      title: 'Titre Mis à Jour',
      body: 'Contenu Mis à Jour',
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
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
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