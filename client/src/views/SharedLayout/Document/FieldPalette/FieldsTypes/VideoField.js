import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const VideoField = ({ mode, field,fieldIndex, deleteField, documentFields,setDocumentFields }) => {
    <div className={mode !== 'preview' ? 'document-field-wrapper' : ''}>
        {mode === 'preview' && <div style={{textAlign : field.alignment, width : '100%', background: 'transparent', display : 'grid', gridTemplateColumns: 'auto 10px auto'}}>
        
            {/* video element here */}
            <LiteYouTubeEmbed 
                id={field.video_id}
                title={field.video_title}
            />
        </div>}
        {mode !== 'preview' && <div>
            {mode !== 'preview' && <FaTrash className="document-delete-btn" onClick={e=>deleteField(field)}/>}
            <div style={{textAlign : field.alignment, width : '100%', background: 'transparent', display: 'grid', gridTemplateColumns : 'auto 10px auto'}}>
                
            </div>
            <br/>
            Video Title : <input type="text" value={field.video_title} placeholder="Video Title" onChange={e=>updateField(e,'video_title')}/><br/>
            Youtube Video ID : <input type="text" value={field.video_id} placeholder="Video Id" onChange={e=>updateField(e,'video_id')}/><br/>

        </div>}
    </div>
}

export default VideoField