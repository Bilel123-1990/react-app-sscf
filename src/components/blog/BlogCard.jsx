import React from 'react'
import { useState , useEffect } from "react";
import './blog.css'
import { etudiant } from '../../dummydata'
import { apprenant } from '../../dummydata'
import axios from 'axios';


const BlogCard = (props) => {



  // state pour stocker les données
  const [totalApprenants, setTotalApprenants] = useState(0);
  const [pourcentageApprenantsActifs, setPourcentageApprenantsActifs] = useState(0);
  const [totalCoursModules, setTotalCoursModules] = useState(0);
  const [niveauProgressionUtilisateurs, setNiveauProgressionUtilisateurs] = useState([]);
  const [evolutionActivitesUtilisateurs, setEvolutionActivitesUtilisateurs] = useState([]);
  const [top5ApprenantsActifs, setTop5ApprenantsActifs] = useState([]);
  const [top10CampagnesSuivies, setTop10CampagnesSuivies] = useState([]);
  const [niveauProgressionDepartement, setNiveauProgressionDepartement] = useState([]);
  const [niveauProgressionProfilUtilisateur, setNiveauProgressionProfilUtilisateur] = useState([]);
  const [pourcentageUtilisateursCertification, setPourcentageUtilisateursCertification] = useState([]);
  const [pourcentageEchecsQuizz, setPourcentageEchecsQuizz] = useState([]);

  // effet pour récupérer les données depuis une API
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.example.com/campagnes");
      const data = await response.json();
      setTotalApprenants(data.totalApprenants);
      setPourcentageApprenantsActifs(data.pourcentageApprenantsActifs);
      setTotalCoursModules(data.totalCoursModules);
      setNiveauProgressionUtilisateurs(data.niveauProgressionUtilisateurs);
      setEvolutionActivitesUtilisateurs(data.evolutionActivitesUtilisateurs);
      setTop5ApprenantsActifs(data.top5ApprenantsActifs);
      setTop10CampagnesSuivies(data.top10CampagnesSuivies);
      setNiveauProgressionDepartement(data.niveauProgressionDepartement);
      setNiveauProgressionProfilUtilisateur(data.niveauProgressionProfilUtilisateur);
      setPourcentageUtilisateursCertification(data.pourcentageUtilisateursCertification);
      setPourcentageEchecsQuizz(data.pourcentageEchecsQuizz);
    }
    fetchData();
  }, []);





  



    const [query, setQuery] = useState(""); // état de la barre de recherche
    const [results, setResults] = useState([]); // état des résultats de la recherche
  
    const handleInputChange = (event) => {
      setQuery(event.target.value); // met à jour l'état de la barre de recherche à chaque modification
    };
  
    const handleSearch = () => {
      const filteredResults = etudiant.filter((etud) =>
        etud.nom.toLowerCase().includes(query.toLowerCase())
      ); // filtre les étudiants dont le nom correspond à la recherche
      setResults(filteredResults); // met à jour l'état des résultats de la recherche
    };


    
    
    
       

  return (
    <div className='divserch'>
         <div className="search-bar">
          <h2>Recherche d'un apprenant par Nom: </h2><br />
        <input type="text" value={query} onChange={handleInputChange} />
        <button  onClick={handleSearch} className="btnrechecher">Rechercher</button>
      </div>
      <ul>
        {results.map((etud) => (
          <li key={etud.id}>
            <div>
              <p>Nom: {etud.nom}</p>
              <p>Prénom: {etud.Prenom}</p>
              <p>Adresse électronique: {etud.adresse_electronique}</p>
              <p>Numéro de téléphone: {etud.num_tel}</p>
              <p>Programme d'études: {etud.programme_etude}</p>
            </div>
          </li>
        ))}
      </ul>                   




      <div className="dashboard">

      <div className="dashboard__item">
      <h2>Nombre total d'apprenants enregistrés : {apprenant.length}</h2>
     </div>


      <div className="dashboard__item">
        <h3>Pourcentage d'apprenants actifs sur les 30 derniers jours</h3>
        <p>{pourcentageApprenantsActifs}%</p>
      </div>
      <div className="dashboard__item">
        <h3>Nombre total de cours/modules enregistrés</h3>
        <p>{totalCoursModules}</p>
      </div>
      <div className="dashboard__item">
        <h3>Niveau de progression des utilisateurs par campagnes et par cours</h3>
        <ul>
          {niveauProgressionUtilisateurs.map((item) => (
            <li key={item.id}>
              <strong>{item.campagne}</strong> - {item.cours} ({item.progression}%)
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard__item">
          <h3>Evolution des activités des utilisateurs sur les derniers 7 jours</h3>
          <ul>
            {evolutionActivitesUtilisateurs.map((item) => (
              <li key={item.id}>
                {item.date} : {item.activites} activités
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard__item">
          <h3>Top 5 des apprenants les plus actifs</h3>
          <ol>
            {top5ApprenantsActifs.map((item) => (
              <li key={item.id}>
                {item.nom} ({item.activites} activités)
              </li>
            ))}
          </ol>
        </div>
        <div className="dashboard__item">
          <h3>Top 10 des campagnes les plus suivies</h3>
          <ol>
            {top10CampagnesSuivies.map((item) => (
              <li key={item.id}>
                {item.campagne} ({item.nbUtilisateurs} utilisateurs)
              </li>
            ))}
          </ol>
        </div>
        <div className="dashboard__item">
          <h3>Niveaux de progression par département</h3>
          <ul>
            {niveauProgressionDepartement.map((item) => (
              <li key={item.id}>
                {item.departement} : {item.progression}%
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard__item">
          <h3>Niveaux de progression par profil d'utilisateurs</h3>
          <ul>
            {niveauProgressionProfilUtilisateur.map((item) => (
              <li key={item.id}>
                {item.profil} : {item.progression}%
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard__item">
          <h3>Pourcentage global d'utilisateurs par niveaux de certification</h3>
          <ul>
            {pourcentageUtilisateursCertification.map((item) => (
              <li key={item.id}>
                {item.certification} : {item.pourcentage}%
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard__item">
          <h3>Pourcentage d'échecs aux quizz par profil et par département</h3>
          <ul>
            {pourcentageEchecsQuizz.map((item) => (
              <li key={item.id}>
                {item.profil} - {item.departement} : {item.pourcentage}%
              </li>
            ))}
          </ul>
        </div>
      </div>
    










      
    </div>






      
   )
}

export default BlogCard