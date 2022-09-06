import NumericInput from "./components/NumericInput"
import { FaTrash } from "react-icons/fa"
const NumericInputField = ({ mode, field,fieldIndex, deleteField, documentFields,setDocumentFields}) => {
    const setValue = (newValue) => {
        const index = documentFields.indexOf(field)
        setDocumentFields(documentFields.map((item,ind)=>{
            if(ind === index){
                item.value = newValue
                return item
            }

            return item
        }))
    }

    const updateField = (e,fieldName) => {
        const index = documentFields.indexOf(field)
        setDocumentFields(documentFields.map((item,ind)=>{
            if(ind === index){
                item[fieldName] = e.target.value
                return item
            }
            return item
        }))
    }

    return <div className={mode !== 'preview' ? 'document-field-wrapper' : ''}>
        {mode === 'preview' && <div style={{textAlign : field.alignment, width : '100%', background: 'transparent', display : 'grid', gridTemplateColumns: 'auto 10px auto'}}>
            <label htmlFor={field.name} style={{display: 'inline'}}>{field.label}</label>
            <span/>
            <div style={{width : '100%'}}> 
                <NumericInput style={{display: 'inline-block', width: '100%'}} placeholder={field.placeholder} value={field.value} setValue={setValue} mode={mode} min={field.min} max={field.max}/>
            </div>
        </div>}
        {mode !== 'preview' && <div>
            {mode !== 'preview' && <FaTrash className="document-delete-btn" onClick={e=>deleteField(field)}/>}
            <div style={{display: 'grid', gridTemplateColumns: 'auto 10px 10fr'}}>
                <span>{field.label}</span><span/><NumericInput placeholder={field.placeholder} value={field.value} setValue={setValue} mode={mode} min={field.min} max={field.max}/>
            </div>
            {/* Placeholder Text: <input type="text" value={field.placeholder} placeholder="Placeholder Text" onChange={e=>updateField(e,'placeholder')}/><br/> */}
            Label Text: <input type="text" value={field.label} placeholder="Label Text" onChange={e=>updateField(e,'label')}/><br/>
        </div>}
    </div>
}

export default NumericInputField