export const kpis = [
  { id: 'prospects', label: 'Prospects actifs', value: 128, delta: '+12%', tone: 'info' },
  { id: 'clients', label: 'Clients actifs', value: 86, delta: '+5%', tone: 'success' },
  { id: 'devis', label: 'Devis en cours', value: 34, delta: '+8%', tone: 'warning' },
  { id: 'impayes', label: 'Impayés', value: 7, delta: '-2%', tone: 'danger' },
];

export const revenueSeries = [
  { mois: 'Jan', ca: 42000, devis: 28000 },
  { mois: 'Fév', ca: 45500, devis: 31000 },
  { mois: 'Mar', ca: 51000, devis: 36000 },
  { mois: 'Avr', ca: 48800, devis: 34000 },
  { mois: 'Mai', ca: 56200, devis: 39000 },
  { mois: 'Juin', ca: 61000, devis: 42000 },
  { mois: 'Juil', ca: 58500, devis: 40000 },
  { mois: 'Août', ca: 64000, devis: 45000 },
];

export const pipelineData = [
  { name: 'Prospects', value: 128, color: '#00AEEF' },
  { name: 'Devis', value: 34, color: '#FFA726' },
  { name: 'Contrats', value: 52, color: '#2E7D32' },
  { name: 'Factures', value: 41, color: '#002D62' },
];

export const prospects = [
  {
    id: 'P-1042',
    nom: 'Groupe Atlantique Logistique',
    contact: 'Marie Dupont',
    statut: 'Chaud',
    montant: '18 500 €',
    site: 'Entrepôt Bordeaux',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    id: 'P-1048',
    nom: 'Clinique Saint-Laurent',
    contact: 'Dr. Hassan Benali',
    statut: 'Négociation',
    montant: '24 200 €',
    site: 'Site médical Lyon',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    id: 'P-1051',
    nom: 'Résidence Les Cèdres',
    contact: 'Sophie Martin',
    statut: 'Nouveau',
    montant: '9 800 €',
    site: 'Résidence Nantes',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
  {
    id: 'P-1055',
    nom: 'TechnoPark Sophia',
    contact: 'Julien Moreau',
    statut: 'Chaud',
    montant: '31 000 €',
    site: 'Campus tech Nice',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
  },
];

export const clients = [
  {
    id: 'C-2201',
    nom: 'Banque Horizon',
    agent: 'Karim Lefèvre',
    contrat: 'Renouvellement 12j',
    conformite: 98,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    id: 'C-2214',
    nom: 'Mall Riviera',
    agent: 'Amina Rossi',
    contrat: 'Actif',
    conformite: 92,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80',
  },
  {
    id: 'C-2220',
    nom: 'Port Autonome',
    agent: 'Lucas Bernard',
    contrat: 'Alerte 5j',
    conformite: 87,
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&q=80',
  },
];

export const factures = [
  { id: 'F-4821', client: 'Banque Horizon', montant: '12 400 €', echeance: '05 Oct', statut: 'Payée' },
  { id: 'F-4829', client: 'Mall Riviera', montant: '8 750 €', echeance: '08 Oct', statut: 'En retard' },
  { id: 'F-4833', client: 'Port Autonome', montant: '15 200 €', echeance: '12 Oct', statut: 'Acompte' },
  { id: 'F-4838', client: 'Clinique Saint-Laurent', montant: '6 300 €', echeance: '18 Oct', statut: 'En attente' },
];

export const alertes = [
  { id: 1, type: 'Contrat', texte: 'Renouvellement Banque Horizon dans 12 jours', priorite: 'haute' },
  { id: 2, type: 'Facture', texte: 'Relance automatique envoyée à Mall Riviera', priorite: 'moyenne' },
  { id: 3, type: 'Conformité', texte: '3 agents à recertifier avant fin de mois', priorite: 'haute' },
  { id: 4, type: 'Devis', texte: 'Devis TechnoPark Sophia en attente de validation', priorite: 'basse' },
];

export const activites = [
  { id: 1, heure: '09:14', texte: 'Nouveau prospect ajouté : Groupe Atlantique Logistique' },
  { id: 2, heure: '10:02', texte: 'Contrat signé avec Résidence Les Cèdres' },
  { id: 3, heure: '11:35', texte: 'Facture F-4829 marquée en retard' },
  { id: 4, heure: '14:20', texte: 'Agent Amina Rossi : dossier conformité mis à jour' },
  { id: 5, heure: '16:48', texte: 'Devis envoyé à Clinique Saint-Laurent' },
];

export const agentsConformite = [
  { nom: 'Karim Lefèvre', score: 98 },
  { nom: 'Amina Rossi', score: 92 },
  { nom: 'Lucas Bernard', score: 87 },
  { nom: 'Nina Petit', score: 95 },
  { nom: 'Hugo Garnier', score: 78 },
];
