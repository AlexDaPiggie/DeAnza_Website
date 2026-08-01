import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ title, children, defaultOpen = false, stepNumber }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={`accordion ${isOpen ? 'is-open' : ''}`}>
      <button 
        className="accordion-header" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="accordion-title-wrapper">
          {stepNumber && <span className="accordion-step">{stepNumber}</span>}
          <h3 className="accordion-title">{title}</h3>
        </div>
        <ChevronDown 
          size={20} 
          className="accordion-icon" 
        />
      </button>
      
      <div 
        className="accordion-content-wrapper" 
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="accordion-content">
          {children}
        </div>
      </div>
    </div>
  )
}
