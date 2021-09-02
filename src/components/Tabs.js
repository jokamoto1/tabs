import React,{useState} from "react"

const Tabs = props => {
    const[id, setId] = useState("")
    const[description, setDescription] =useState("")
    const updateTab = (e) => {
        e.preventDefault()
        setId(e.target.value)
        setDescription(e.target.id)
        console.log(e.target.value)
        console.log(e.target.id)
    }

    return(
        <div>
            <div>
                <input type="button" onClick = {updateTab} id = "This is decription for tab 1"  name = "Tab1" value="Tab 1"></input>
                <input type="button" onClick = {updateTab}id = "This is decription for tab 2" o name = "Tab2" value="Tab 2"></input>
            </div>
            <div>
                {description}
            </div>




        </div>
    )
}
export default Tabs