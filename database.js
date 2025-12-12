// Database Module
// Firestore CRUD operations for all entities

// PATIENTS
async function createPatient(patientData) {
  try {
    const user = getCurrentUser();
    if (!user) throw new Error('User not authenticated');

    const docRef = await db.collection('patients').add({
      ...patientData,
      createdBy: user.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      active: true
    });

    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Create patient error:', error);
    return { success: false, error: error.message };
  }
}

async function getPatients(limit = 20) {
  try {
    const snapshot = await db.collection('patients')
      .where('active', '==', true)
      .orderBy('createdAt', 'desc')
      .limit(limit)
      .get();
    
    const patients = [];
    snapshot.forEach(doc => {
      patients.push({ id: doc.id, ...doc.data() });
    });

    return { success: true, patients: patients };
  } catch (error) {
    console.error('Get patients error:', error);
    return { success: false, error: error.message };
  }
}
