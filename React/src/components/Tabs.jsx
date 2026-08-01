import { useState } from 'react'

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="tabs-container">
      <div className="tabs-header" role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn ${index === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
            role="tab"
            aria-selected={index === activeTab}
          >
            {tab.title}
          </button>
        ))}
      </div>
      
      <div className="tabs-content">
        {tabs.map((tab, index) => (
          <div 
            key={index} 
            className={`tab-panel ${index === activeTab ? 'active' : ''}`}
            role="tabpanel"
          >
            {index === activeTab && tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
