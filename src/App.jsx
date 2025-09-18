import React, { useEffect, useState } from 'react'

export default function App() {
  const [patients, setPatients] = useState([])
  const [filteredPatients, setFilteredPatients] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)

  // Fetch patients data on component mount
  useEffect(() => {
    const fetchPatients = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
          throw new Error('Failed to fetch patients data')
        }
        
        const users = await response.json()
        const patientData = users.map((user, index) => ({
          id: user.id,
          name: user.name,
          age: 20 + (index * 3) % 60, // Generate ages between 20-80
          contact: user.phone,
          email: user.email,
          address: `${user.address.suite}, ${user.address.street}, ${user.address.city}`,
          notes: `Patient record for ${user.name}. Regular check-ups recommended.`
        }))
        
        setPatients(patientData)
        setFilteredPatients(patientData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPatients()
  }, [])

  // Filter patients based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredPatients(patients)
    } else {
      const filtered = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredPatients(filtered)
    }
  }, [searchQuery, patients])

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleViewDetails = (patient) => {
    setSelectedPatient(patient)
  }

  const handleCloseModal = () => {
    setSelectedPatient(null)
  }

  const handleAddPatient = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    
    const name = formData.get('name').trim()
    const age = parseInt(formData.get('age')) || 0
    const contact = formData.get('contact').trim()
    const email = formData.get('email').trim()
    const address = formData.get('address').trim()
    const notes = formData.get('notes').trim()

    // Validation
    if (!name) {
      alert('Please provide a patient name')
      return
    }
    if (age < 0 || age > 120) {
      alert('Please provide a valid age (0-120)')
      return
    }
    if (contact && !/^[\d\s\-\+\(\)]+$/.test(contact)) {
      alert('Please provide a valid contact number')
      return
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please provide a valid email address')
      return
    }

    const newPatient = {
      id: Date.now(),
      name,
      age,
      contact,
      email,
      address,
      notes
    }

    setPatients(prev => [newPatient, ...prev])
    setSearchQuery('')
    setShowAddForm(false)
    form.reset()
  }

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm)
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="brand">
          <h1>Jarurat Care</h1>
        </div>
        <nav className="navigation">
          <a href="#home" className="nav-link">Home</a>
          <a href="#patients" className="nav-link">Patients</a>
          <a href="#about" className="nav-link">About</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <h2>Patient Records Dashboard</h2>
            <p>Streamline your patient management with our modern, intuitive dashboard</p>
          </div>
        </section>

        {/* Patients Section */}
        <section id="patients" className="patients-section">
          <div className="section-header">
            <h3>Patient Management</h3>
            
            {/* Search and Add Controls */}
            <div className="controls">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search patients by name..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="search-input"
                />
                <button 
                  onClick={toggleAddForm}
                  className="add-patient-btn"
                >
                  {showAddForm ? 'Cancel' : '+ Add New Patient'}
                </button>
              </div>

              {/* Add Patient Form */}
              {showAddForm && (
                <form onSubmit={handleAddPatient} className="add-patient-form">
                  <div className="form-grid">
                    <input
                      name="name"
                      type="text"
                      placeholder="Full Name *"
                      required
                      className="form-input"
                    />
                    <input
                      name="age"
                      type="number"
                      placeholder="Age"
                      min="0"
                      max="120"
                      className="form-input"
                    />
                    <input
                      name="contact"
                      type="tel"
                      placeholder="Contact Number"
                      className="form-input"
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="form-input"
                    />
                    <input
                      name="address"
                      type="text"
                      placeholder="Address"
                      className="form-input"
                    />
                    <textarea
                      name="notes"
                      placeholder="Medical Notes"
                      className="form-textarea"
                      rows="3"
                    />
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="submit-btn">Add Patient</button>
                    <button type="button" onClick={toggleAddForm} className="cancel-btn">Cancel</button>
                  </div>
                </form>
              )}
            </div>

            {/* Status Messages */}
            <div className="status-messages">
              {loading && <div className="status-message loading">Loading patients...</div>}
              {error && <div className="status-message error">Error: {error}</div>}
              {!loading && !error && filteredPatients.length === 0 && (
                <div className="status-message">No patients found matching your search.</div>
              )}
            </div>
          </div>

          {/* Patients Grid */}
          <div className="patients-grid">
            {filteredPatients.map(patient => (
              <div key={patient.id} className="patient-card">
                <div className="card-header">
                  <div className="patient-avatar">
                    {patient.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>
                  <div className="patient-info">
                    <h4 className="patient-name">{patient.name}</h4>
                    <p className="patient-details">
                      {patient.age} years • {patient.contact}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => handleViewDetails(patient)}
                  className="view-details-btn"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="about-content">
            <h3>About Jarurat Care</h3>
            <p>
              This Patient Records Dashboard demonstrates modern web development practices 
              using React, featuring responsive design, real-time search, and comprehensive 
              patient management capabilities. Built with healthcare professionals in mind.
            </p>
          </div>
        </section>
      </main>

      {/* Patient Details Modal */}
      {selectedPatient && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedPatient.name}</h3>
              <button onClick={handleCloseModal} className="close-btn">×</button>
            </div>
            <div className="modal-body">
              <div className="detail-item">
                <strong>Age:</strong> {selectedPatient.age} years
              </div>
              <div className="detail-item">
                <strong>Contact:</strong> {selectedPatient.contact}
              </div>
              <div className="detail-item">
                <strong>Email:</strong> {selectedPatient.email || 'Not provided'}
              </div>
              <div className="detail-item">
                <strong>Address:</strong> {selectedPatient.address || 'Not provided'}
              </div>
              <div className="detail-item">
                <strong>Notes:</strong> {selectedPatient.notes || 'No additional notes'}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Jarurat Care - Patient Records Dashboard</p>
      </footer>
    </div>
  )
}
