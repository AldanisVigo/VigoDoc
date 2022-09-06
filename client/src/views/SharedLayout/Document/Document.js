import { useAppContext } from "../../../context/appContext"
import { useState } from "react"
import DocumentFields from "./DocumentFields"
import DocumentPreview from "./DocumentPreview"
import { FaFilePdf, FaPen } from "react-icons/fa"
import FieldPalette from "./FieldPalette/FieldPalette"
import {
    TextField,
    ImageField,
    TextInputField,
    NumericInputField,
    DateInputField,
    TimeInputField,
    VideoField,
    SignatureField,
    AddressField,
    DropdownListField,
    ComboListField,
    BulletListField,
    OrderedListField,
    FileUploadField
} from './FieldPalette/FieldsTypes'
import RLDD from 'react-list-drag-and-drop/lib/RLDD';

const Document = () => {
    const [documentFields,setDocumentFields] = useState([])
    const { selectedDoc,selected_doc,doc_mode  } = useAppContext()
    const [docViewMode,setDocViewMode] = useState('fields')
    const [docTitle,setDocTitle] = useState('')

    const createNewDocumentField = (fieldType) => {
        // fieldType.key = documentFields.length + 1
        let fieldTypeCpy = Object.assign({},fieldType)
        fieldTypeCpy.id = Date.now() + Math.random()

        setDocumentFields([...documentFields,fieldTypeCpy])
    }
    
    const deleteField = (field) => {
        console.log("Deleting field:")
        console.log(field)
        var index = documentFields.indexOf(field)
        if(index !== -1){
            setDocumentFields(documentFields.filter((_,ind)=>ind !== index))
        }
    }

    const generateDocumentField = (field,index) => {
        // field.id = new Date().valueOf()        
        if(!field) return 
        switch(field.type){
            case 'text':
                return <TextField key={index} mode={docViewMode} fieldIndex={index} field={documentFields[index]} deleteField={deleteField} setDocumentFields={setDocumentFields} documentFields={documentFields}/>
            case 'image':
                return <ImageField key={index} mode={docViewMode} field={documentFields[index]} deleteField={deleteField} documentFields={documentFields} setDocumentFields={setDocumentFields}/>
            case 'text-input':
                return  <TextInputField key={index} mode={docViewMode} field={documentFields[index]} fieldIndex={index} deleteField={deleteField} documentFields={documentFields} setDocumentFields={setDocumentFields}/>
            case 'numeric-input':
                return <NumericInputField key={index} mode={docViewMode} fieldIndex={index} deleteField={deleteField} field={documentFields[index]} documentFields={documentFields} setDocumentFields={setDocumentFields}/>
            case 'date-input':
                return <DateInputField key={index} mode={docViewMode} fieldIndex={index} deleteField={deleteField}/>
            case 'time-input':
                return <TimeInputField key={index} mode={docViewMode} fieldIndex={index} deleteField={deleteField}/>
            case 'video':
                return <VideoField key={index} mode={docViewMode} fieldIndex={index} deleteField={deleteField}/>
            case 'signature':
                return <SignatureField key={index} mode={docViewMode} fieldIndex={index} deleteField={deleteField}/>
            case 'address':
                return <AddressField key={index} mode={docViewMode} fieldIndex={index} deleteField={deleteField}/>
            case 'dropdown-list':
                return <DropdownListField key={index} mode={docViewMode} fieldIndex={index} deleteField={deleteField}/>
            case 'combo-list':
                return <ComboListField key={index} mode={docViewMode} fieldIndex={index} deleteField={deleteField}/>
            case 'bullet-list':
                return <BulletListField key={index} mode={docViewMode} fieldIndex={index} deleteField={deleteField}/>
            case 'ordered-list':
                return <OrderedListField key={index} mode={docViewMode} fieldIndex={index} deleteField={deleteField}/>
            case 'file-upload':
                return <FileUploadField key={index} mode={docViewMode} fieldIndex={index} deleteField={deleteField}/>
            default:
                break;        
        }
    }

    const handleRLDDChange = (newItems) => {
        setDocumentFields(newItems)
    }

    return <div>
        <h3>{doc_mode === 'add' ? 'Add New Document' : 'Edit Document'}</h3>
         {/* view mode */}
        <div style={{float : 'right'}}>
            {docViewMode === 'fields' && <button onClick={e=>setDocViewMode('preview')}><FaFilePdf />&nbsp;&nbsp;Preview Document</button>}
            {docViewMode === 'preview' && <button onClick={e=>setDocViewMode('fields')}><FaPen/>&nbsp;&nbsp;Edit Document</button>}
        </div>

        {/* title field */}
        {doc_mode === 'add' && docViewMode === 'fields' && <span><strong>Doc Title:</strong> <input type="text" placeholder="Doc Title" value={docTitle} onChange={e=>setDocTitle(e.target.value)}/></span>}
       


        {docViewMode === 'fields' && <DocumentFields/> }
        {docViewMode === 'preview' && <DocumentPreview/>}
        {doc_mode === 'add' && docViewMode === 'fields' && <FieldPalette createNewDocumentField={createNewDocumentField}/>}
        {documentFields && docViewMode !== 'preview' && <span><strong>Fields:</strong> {documentFields.length}</span>}
        <br/><br/>
        {doc_mode === 'add' && docViewMode === 'preview' && <h3>{docTitle || 'Untitled'}</h3>}
        {documentFields && docViewMode === 'fields' && documentFields.map((docField,index)=>generateDocumentField(docField,index))}
        {documentFields && docViewMode !== 'fields' && <RLDD
            items={documentFields}
            itemRenderer={(item,index) => {
                return generateDocumentField(item,index)
            }}
            onChange={newItems=>setDocumentFields(newItems)}
        />}
    </div>
}

export default Document