import React, { useState, useEffect } from 'react'
import { editableBlock } from '../interfaces/editable.page.model'
import ContentEditable from 'react-contenteditable'
import { uid } from '../functions/uid'


const initialBlock: editableBlock = {
  id: uid(),
  html: "",
  tag: "p",
};

const EditableBlock = ({ _id, _tag, _html, updateBlock, addBlock, deleteBlock }: { _id: number; _tag: string; _html: string; updateBlock: any; addBlock: any; deleteBlock: any;}) => {
  const [content, setContent] = useState(initialBlock)

  const onChangeHandler = (e: any) => {
    setContent({ 
      ...content, 
      html: e.target.value
    })

  }

  useEffect(() => {
    setContent({
      id: _id,
      html: _html,
      tag: _tag,
    })
  }, [])

  useEffect(() => {
    updateBlock({
      id: content.id,
      html: content.html,
      tag: content.tag,
    })
  }, [content.html, content.tag])
  
  
  return (
    <ContentEditable 
      className='Block'
      html={content.html}
      tagName={content.tag}
      onChange={onChangeHandler}
    />
  )
}

export default EditableBlock