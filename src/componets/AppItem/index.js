// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl, category} = appDetails
  return (
    <li className="app">
      <img src={imageUrl} className="app-icon" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
