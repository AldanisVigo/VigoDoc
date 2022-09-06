import { FaTrash } from 'react-icons/fa'
import { useRef } from 'react'
const ImageField = ({ mode, field,fieldIndex, deleteField, documentFields,setDocumentFields }) => {

    const updateImageUrl = (e) => {
        const index = documentFields.indexOf(field)
        setDocumentFields(documentFields.map((item,ind)=>{
            if(ind === index){
                item.src = e.target.value
                return item
            }

            return item
        }))
    }

    const updateImageWidth = (e) => {
        const index = documentFields.indexOf(field)
        setDocumentFields(documentFields.map((item,ind)=>{
            if(ind === index){
                item.width = e.target.value
                return item
            }

            return item
        }))
    }

    const updateImageHeight = (e) => {
        const index = documentFields.indexOf(field)
        setDocumentFields(documentFields.map((item,ind)=>{
            if(ind === index){
                item.height = e.target.value
                return item
            }

            return item
        }))
    }

    const updateImageAlignment = (e) => {
        const index = documentFields.indexOf(field)
        setDocumentFields(documentFields.map((item,ind)=>{
            if(ind === index){
                item.alignment = e.target.value
                return item
            }

            return item
        }))
    }

    const widthSliderRef = useRef()
    const heightSliderRef = useRef()

    return <div className={mode !== 'preview' ? 'document-field-wrapper' : ''}>
        {mode === 'preview' && <div style={{textAlign : field.alignment, width : '100%', background: 'transparent'}}><img alt={field} src={field.src} height={field.height} width={field.width}/></div>}
        {mode !== 'preview' && <div>
            {mode !== 'preview' && <FaTrash className="document-delete-btn" onClick={e=>deleteField(field)}/>}
            <div style={{textAlign : field.alignment, width : '100%', background: 'lightgray'}}><img alt={field} src={field.src} width={field.width} height={field.height} readOnly></img></div><br/>
            Image URL: <input type="text" value={field.src} placeholder="Image URL" onChange={e=>updateImageUrl(e)}/><br/>
            Width: <input type="range" min="20" max="330" value={field.width} class="slider" id="myRange" ref={widthSliderRef} onChange={updateImageWidth}/><br/>
            Height: <input type="range" min="20" max="330" value={field.height} class="slider" placeholder="Image Height" onChange={e=>updateImageHeight(e)}/><br/>
            <div style={{position:'relative'}}>
                Align : <select value={field.alignment} onChange={e=>updateImageAlignment(e)}>
                    <option selected>center</option>
                    <option>left</option>
                    <option>right</option>
                </select>
            </div>
        </div>}
    </div>
}

export default ImageField