export default function ProposalPage() {
  const packages = [
    { name: 'Starter', price: '£1,200', delivery: '5 pages', featured: false },
    { name: 'Growth', price: '£2,200', delivery: 'Full system', featured: true },
    { name: 'Premium', price: '£3,500', delivery: 'Full system', featured: false }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', background: 'white', padding: '40px', boxShadow: '0 4px 30px rgba(0,0,0,0.1)' }}>
      <header style={{ background: 'linear-gradient(135deg, #3b1f0a, #c47a30)', color: 'white', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h2 style={{ margin: 0 }}>Proposal for Accounting Firms</h2>
        <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>A complete digital system including Chatbot, Booking, and CRM.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {packages.map((pkg) => (
          <div key={pkg.name} style={{ 
            border: pkg.featured ? '2px solid var(--caramel)' : '1px solid #eed9c0', 
            borderRadius: '8px', padding: '1.5rem', textAlign: 'center' 
          }}>
            <h4 style={{ margin: '0 0 0.5rem' }}>{pkg.name}</h4>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--caramel-dark)' }}>{pkg.price}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '1rem' }}>{pkg.delivery}</div>
            <button className="btn-p" style={{ width: '100%', fontSize: '0.8rem', padding: '0.5rem' }}>Select</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem', background: 'var(--caramel-extra-light)', padding: '1.5rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h4 style={{ margin: 0 }}>Monthly Web Care</h4>
          <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--muted)' }}>Hosting, security, and HubSpot monitoring.</p>
        </div>
        <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>£200<span style={{ fontSize: '0.8rem' }}>/mo</span></div>
      </div>
    </div>
  );
}