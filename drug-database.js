// Drug Database Module
// Common medicines with interactions and contraindications

const DRUG_DATABASE = [
  { id: 1, name: 'Paracetamol', category: 'Analgesic', dosages: ['500mg', '650mg'], frequencies: ['TDS', 'QID'], contraindications: ['Liver disease'], interactions: ['Warfarin'], price: 10 },
  { id: 2, name: 'Ibuprofen', category: 'NSAID', dosages: ['200mg', '400mg'], frequencies: ['BD', 'TDS'], contraindications: ['Peptic ulcer'], interactions: ['Aspirin'], price: 15 },
  { id: 3, name: 'Amoxicillin', category: 'Antibiotic', dosages: ['250mg', '500mg'], frequencies: ['TDS'], contraindications: ['Penicillin allergy'], interactions: ['Methotrexate'], price: 50 },
  { id: 4, name: 'Azithromycin', category: 'Antibiotic', dosages: ['250mg', '500mg'], frequencies: ['OD'], contraindications: ['Liver disease'], interactions: ['Warfarin'], price: 80 },
  { id: 5, name: 'Amlodipine', category: 'Antihypertensive', dosages: ['2.5mg', '5mg', '10mg'], frequencies: ['OD'], contraindications: ['Severe hypotension'], interactions: ['Simvastatin'], price: 25 },
  { id: 6, name: 'Metformin', category: 'Antidiabetic', dosages: ['500mg', '850mg'], frequencies: ['BD', 'TDS'], contraindications: ['Kidney disease'], interactions: ['Alcohol'], price: 20 },
  { id: 7, name: 'Cetirizine', category: 'Antihistamine', dosages: ['5mg', '10mg'], frequencies: ['OD'], contraindications: ['Severe kidney disease'], interactions: ['Alcohol'], price: 15 },
  { id: 8, name: 'Omeprazole', category: 'PPI', dosages: ['20mg', '40mg'], frequencies: ['OD'], contraindications: ['Liver disease'], interactions: ['Clopidogrel'], price: 25 },
  { id: 9, name: 'Aspirin', category: 'Antiplatelet', dosages: ['75mg', '150mg'], frequencies: ['OD'], contraindications: ['Bleeding disorders'], interactions: ['Warfarin'], price: 5 },
  { id: 10, name: 'Atorvastatin', category: 'Statin', dosages: ['10mg', '20mg', '40mg'], frequencies: ['OD'], contraindications: ['Liver disease'], interactions: ['Grapefruit juice'], price: 50 }
];

function searchDrugs(query) {
  const lowerQuery = query.toLowerCase();
  return DRUG_DATABASE.filter(drug => 
    drug.name.toLowerCase().includes(lowerQuery) || 
    drug.category.toLowerCase().includes(lowerQuery)
  );
}

function getDrugByName(name) {
  return DRUG_DATABASE.find(drug => 
    drug.name.toLowerCase() === name.toLowerCase()
  );
}
