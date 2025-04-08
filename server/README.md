# Architecture du serveur :

/mon-projet<br />
│── /src<br />
│   │── /config          <font color="#04AA6D"> # Fichiers de configuration (ex: connexion DB, env)</font><br />
│   │── /entity          <font color="#04AA6D"> # Entités</font><br />
│   │── /resolvers       <font color="#04AA6D"># Résolveurs</font><br />
│   │  │── resolver<br />
│   │── /services        <font color="#04AA6D"># Logique métier (gestion utilisateurs, authentification, etc.)</font><br />
│   │── /middlewares     <font color="#04AA6D"># Middleware (authentification, validation)</font><br />
│   │── /loaders         <font color="#04AA6D"># Chargement des services (ex: DB, cache, API externe)</font><br />
│── /tests               <font color="#04AA6D"># Tests unitaires et d’intégration</font>
