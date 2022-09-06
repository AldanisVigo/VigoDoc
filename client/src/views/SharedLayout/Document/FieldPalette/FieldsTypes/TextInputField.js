import { FaTrash } from 'react-icons/fa'

const TextInputField = ({ mode, field,fieldIndex, deleteField, documentFields,setDocumentFields }) => {
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
        {mode === 'preview' && <div style={{textAlign : field.alignment, width : '100%', background: 'transparent', display: 'grid', gridTemplateColumns: 'auto 10px auto'}}>
            <label htmlFor={field.name}>{field.label}</label>
            <span/>
            <input name={field.name} type="text" placeholder={field.placeholder}/>
        </div>}
        {mode !== 'preview' && <div>
            {mode !== 'preview' && <FaTrash className="document-delete-btn" onClick={e=>deleteField(field)}/>}
            Placeholder Text: <input type="text" value={field.placeholder} placeholder="Placeholder Text" onChange={e=>updateField(e,'placeholder')}/><br/>
            Label Text: <input type="text" value={field.label} placeholder="Label Text" onChange={e=>updateField(e,'label')}/><br/>
        </div>}
    </div>
}

export default TextInputField