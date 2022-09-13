import { 
    FaSign, 
    FaFileUpload, 
    FaImage,
    FaCalendar,
    FaClock,
    FaVideo,
    FaAddressCard,
    FaList,
    FaListOl,
    FaListUl,
    FaICursor,
    FaFont,
    FaHashtag,
    FaArrowLeft,
    FaArrowRight
} from 'react-icons/fa'
import FieldPaletteItem from './FieldPaletteItem'

import './FieldPalette.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const fieldTypes = [
    {
        type : 'text',
        icon : <FaFont/>,
        name : 'Text',
        value : '',
        randid : uuidv4(),
    },
    {
        type: 'image',
        icon :  <FaImage/>,
        name : 'Image',
        randid : uuidv4(), 
        width : 330,
        height : 330,
        src : 'https://protkd.com/wp-content/uploads/2017/04/default-image.jpg',
        alignment : 'center'
    },
    {
        type : 'text-input',
        icon : <FaICursor/>,
        name : 'Text Input Field',
        placeholder : '',
        label : '',
        value : ''
    },
    {
        type : 'numeric-input',
        icon : <FaHashtag/>,
        name : 'Numeric Input Field',
        placeholder : 'Enter Number',
        label : '',
        min : 0,
        max : 100,
        value : 0
    },
    {
        type : 'date-input',
        icon : <FaCalendar/>,
        name : 'Date Input Field',
        value : '',
        label : ''
    },
    {
        type : 'time-input',
        icon : <FaClock/>,
        name : 'Time Input Field',
        value : '',
        label : ''
    },
    {
        type : 'video',
        icon : <FaVideo/>,
        name : 'Video'
    },
    {
        type : 'signature',
        icon : <FaSign/>,
        name : 'Signature Field'
    },
    {
        type : 'address',
        icon : <FaAddressCard/>,
        name : 'Address Input Field'
    },
    {
        type : 'dropdown-list',
        icon : <FaList/>,
        name : 'Dropdown List Selection'
    },
    {
        type : 'combo-list',
        icon : <FaList/>,
        name : 'Combo Box List Selection'
    },
    {
        type : 'bullet-list',
        icon : <FaListUl/>,
        name : 'Bulleted List'
    },
    {
        type : 'ordered-list',
        icon : <FaListOl/>,
        name : 'Ordered List'
    },
    {
        type : 'file-upload',
        icon : <FaFileUpload/>,
        name : 'File Upload'
    }
]


const FieldPalette = ({createNewDocumentField}) => {
    const [showing, setShowing] = useState(false)

    return <div className={showing ? 'field-palette' : 'field-palette field-palette-hidden'}>
        <div className={!showing ? 'field-palette-tab field-palette-tab-outside' : 'field-palette-tab'}>
            {showing ? <FaArrowRight onClick={e=>setShowing(!showing)}/> : <FaArrowLeft onClick={e=>setShowing(!showing)}/>}
        </div>
        {/* {showing ? 'SHOWING' : 'HIDDEN'} */}
        <div className="field-palette-list">
            {showing && fieldTypes && fieldTypes.map((fieldType,index)=><button key={index} style={{display : 'block', width : '100%'}} onClick={e=>createNewDocumentField(fieldType)}>
                <FieldPaletteItem className="field-palette-item" name={fieldType.name} icon={fieldType.icon}/>
            </button>)}
        </div>
    </div>
}

export default FieldPalette