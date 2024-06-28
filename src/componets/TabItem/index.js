// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActiveTab, onChangeActiveTab} = props

  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    onChangeActiveTab(tabId)
  }

  const activeTabClassName = isActiveTab ? 'active' : ''

  return (
    <li className={`tab ${activeTabClassName}`}>
      <button onClick={onClickTab}>{displayText} </button>
    </li>
  )
}
export default TabItem
