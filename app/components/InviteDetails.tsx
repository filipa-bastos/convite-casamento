'use client';

export default function InviteDetails() {
  return (
    <div className="info-section">
      <div className="wedding-invite-card">
        <span className="bg-letter m-letter">M</span>
        <div className="invite-details">
          <h2 className="couple-names">MARIA & JOÃO</h2>
          <div className="invite-datetime">
            <p>4 | OUTUUUBRO | 2026</p>
            <p className="invite-time">14H00</p>
          </div>
          <div className="invite-location">
            <p className="venue-name">QUINTA DO PAÇO HOTEL</p>
            <p className="venue-address">ESTRADA NACIONAL 322, KM3, 5000-051 VILA REAL</p>
          </div>
        </div>
        <span className="bg-letter j-letter">J</span>
      </div>
    </div>
  );
}