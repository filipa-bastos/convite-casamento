'use client';

interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
}

export default function Envelope({ isOpen, onOpen }: EnvelopeProps) {
  return (
    <section className="envelope-section">
      <div className="cssletter">
        <div className={`envelope ${isOpen ? 'active' : ''}`}>
          <div className="inner-light"></div>
          <div className="envelope-flap">
            <div className="flap-triangle"></div>
            <button 
              className="open-btn" 
              id="openEnvelope" 
              aria-label="Open Envelope"
              onClick={onOpen}
            ></button>
          </div>
          <div className="envelope-folds"></div>
        </div>
      </div>
    </section>
  );
}