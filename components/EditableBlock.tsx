import React, { useState, useEffect, useRef } from 'react'
import { editableBlock } from '../interfaces/editable.page.model'
import ContentEditable from 'react-contenteditable'
import { uid } from '../functions/uid'



const EditableBlock = ({ _id, _tag, _html, updatePage, addBlock, deleteBlock }: { _id: number; _tag: string; _html: string; updatePage: any; addBlock: any; deleteBlock: any;}) => {
  const [content, setContent] = useState({ html: "", tag:"p" });
  const [previousKey, setPreviousKey] = useState("")
  const prevHtml = useRef("")
  const prevTag = useRef("")

  /**On First Render of Page */
  useEffect(() => {
    setContent({
      html: _html,
      tag: _tag,
    })
  }, []);

  /**Every Time Component Gets Updated */
  useEffect(() => {
    updatePage({
      id: _id,
      html: content.html,
      tag: content.tag,
    })
   // }
  },[content.html, content.tag]);


  const onChangeHandler = (e: any) => {
    setContent({ 
      ...content, 
      html: e.target.value
    })
  };

  const onKeyDownHandler = (e:any) => {
    if (e.key === 'Enter') {
      if (previousKey !== 'Shift'){
        e.preventDefault();
        addBlock({
          id: _id,
          //ref: contentEditable.current
          
        })
  
        //console.log(contentEditable.current)
      }
    }
  };
  

  
  
  return (
    <ContentEditable 
      className='Block'
      //innerRef={contentEditable.current}
      html={content.html}
      tagName={content.tag}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
    />
  )
}

export default EditableBlock