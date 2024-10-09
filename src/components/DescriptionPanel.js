import React, {useState} from "react"
import "./DescriptionPanel.css"

export function DescriptionPanel(props) {

    const [isContentVisible, setIsContentVisible] = useState(true)

    const showContent = () => {
        setIsContentVisible(!isContentVisible)
    }
    const contentClass = (isContentVisible ? "hidden" : "visible") + " description__content";
    const chevronClass = (isContentVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";
    
    return (
    <div className='description__panel'>
            <p className='description__header'>
                <span>{props.title}</span>
                <i className={chevronClass} onClick={showContent}></i>
            </p>
            <p className={contentClass}>{props.content}</p>
        </div>
    )
}