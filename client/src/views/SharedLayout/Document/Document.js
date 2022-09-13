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
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const Document = () => {
    const [documentFields,setDocumentFields] = useState([])
    const { selectedDoc,selected_doc,doc_mode  } = useAppContext()
    const [docViewMode,setDocViewMode] = useState('fields')
    const [docTitle,setDocTitle] = useState('')

    const createNewDocumentField = (fieldType) => {
        console.log(fieldType)
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
                return <DateInputField key={index} mode={docViewMode} fieldIndex={index} deleteField={deleteField} field={documentFields[index]} documentFields={documentFields} setDocumentFields={setDocumentFields}/>
            case 'time-input':
                return <TimeInputField key={index} mode={docViewMode} fieldIndex={index} deleteField={deleteField} field={documentFields[index]} documentFields={documentFields} setDocumentFields={setDocumentFields}/>
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
    // a little function to help us with reordering the result
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result
    };
    
    const grid = 8;

    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: "none",
        padding: grid * 2,
        margin: `0 0 ${grid}px 0`,

        // change background colour if dragging
        background: isDragging ? "lightgreen" : "grey",

        // styles we need to apply on draggables
        ...draggableStyle
    });

    const getListStyle = isDraggingOver => ({
        background: isDraggingOver ? "lightblue" : "lightgrey",
        padding: grid,
        width: 250
    });

    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
        return;
        }

        const items = reorder(
            documentFields,
            result.source.index,
            result.destination.index
        );

        setDocumentFields(items)
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
       

        {/* status display */}
        {docViewMode === 'fields' && <DocumentFields/> }
        {docViewMode === 'preview' && <DocumentPreview/>}

        {doc_mode === 'add' && docViewMode === 'fields' && <FieldPalette createNewDocumentField={createNewDocumentField}/>}
        {documentFields && docViewMode !== 'preview' && <span><strong>Fields:</strong> {documentFields.length}</span>}
        <br/><br/>
        {doc_mode === 'add' && docViewMode === 'preview' && <h3>{docTitle || 'Untitled'}</h3>}
        {documentFields && documentFields.map((docField,index)=><div key={index} style={{marginTop : docViewMode === 'preview' ? 30 : 0}}>{generateDocumentField(docField,index)}</div>)}
        
        {/* {documentFields.length > 0 && 
            docViewMode === 'preview' && 
            documentFields.map((item, index) => <div key={index}>
                {generateDocumentField(item)}
            </div>)
        } */}
    </div>
}
export default Document