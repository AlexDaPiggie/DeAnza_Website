export default function BrowserMockup({ children }) {
  return (
    <div className="browser-mockup">
      <div className="browser-header">
        <div className="browser-dot red" />
        <div className="browser-dot yellow" />
        <div className="browser-dot green" />
      </div>
      {children}
    </div>
  )
}
