import DatePicker from 'react-date-picker';
import { FaTrash } from 'react-icons/fa'
const DateInputField = ({ mode, field,fieldIndex, deleteField, documentFields,setDocumentFields }) => {
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
            {/* <!--Date Input Field--> */}
            {/* <DatePicker onChange={e=>updateField(e,'value')} value={field?.value} /> */}
            <span>{field.label}</span><span/><input type="date" onChange={e=>updateField(e,'value')} value={field.value}/>
        </div>}
        {mode !== 'preview' && <div>
            {mode !== 'preview' && <FaTrash className="document-delete-btn" onClick={e=>deleteField(field)}/>}
            <div style={{textAlign : field.alignment, width : '100%', background: 'transparent', display: 'grid', gridTemplateColumns : 'auto 10px auto'}}>
                {/* <DatePicker onChange={e=>updateField(e,'value')} value={field?.value} /> */}
                <span>{field.label}</span>
                <span/>
                <input type="date" onChange={e=>updateField(e,'value')} value={field.value}/>
                
            </div>
            <br/>
            Label : <input type="text" value={field.label} placeholder="Date Field Label" onChange={e=>updateField(e,'label')}/><br/>
        </div>}
    </div>
}

export default DateInputField