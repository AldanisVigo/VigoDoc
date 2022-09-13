import { FaTrash } from 'react-icons/fa'
import './fieldtypes.css'
const TextField = ({ mode,field,fieldIndex,deleteField,documentFields,setDocumentFields }) => {
    

    const updateField = (e) => {
        const index = documentFields.indexOf(field)

        if(index !== -1){
            const newDocumentFields = documentFields.map((item,ind)=>{
                if(ind === index){
                   return {
                    ...item,
                    value : e.target.value
                   }
                }
                return item
            })
            setDocumentFields(newDocumentFields)
        }
    }

    return <div className={mode !== 'preview' ? 'document-field-wrapper' : ''}>
        {mode === 'preview' && documentFields[fieldIndex].value}
        {mode !== 'preview' && <textarea className="document-text-input" rows="4" placeholder="Text Label" value={field?.value} onChange={updateField}/>}
        {mode !== 'preview' && <FaTrash className="document-delete-btn" onClick={e=>deleteField(field)}/>}
    </div>
}

export default TextField