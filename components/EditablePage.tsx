import React, { useId,useState } from "react";
import { editableBlock } from '../interfaces/editable.page.model'
import { uid } from '../functions/uid'
import EditableBlock from './EditableBlock'

const initialBlock: editableBlock = {
  id: uid(),
  html: "",
  tag: "p",
};

const testSetup: editableBlock[] = [
  {  
    id: 1,
    html: "Heading",
    tag: "h1",
  },
  /*{
    id: 2,
    html: "I am a <strong>paragraph</strong>",
    tag: "p",
  },
  {
    id: 3,
    html: "I am a <strong>paragraph</strong>",
    tag: "p",
  },
  {
    id: 4,
    html: "I am a <strong>paragraph</strong>",
    tag: "p",
  }*/
]

const EditablePage = () => {
  /** Each Block will be a container */
  const [blocks, setBlocks] = useState(testSetup)


  const updatePageHandler = ( updatedBlock: editableBlock ) => {
    const index = blocks.map((b) => b.id).indexOf(updatedBlock.id)
    const updatedBlocks = [...blocks];
    updatedBlocks[index] = {
      ...updatedBlocks[index],
      tag: updatedBlock.tag,
      html: updatedBlock.html,
    };
    setBlocks(updatedBlocks)
  }

  const addBlocksHandler = ( currentBlock: editableBlock ) => {
    const newBlock: editableBlock = {
      id: uid(),
      html: "",
      tag: "p",
    };
    const index = blocks.map((block) => block.id).indexOf(currentBlock.id);
    const updatedBlocks = [...blocks]
    //console.log(updatedBlocks)
    updatedBlocks.splice(index + 1, 0, newBlock);
    setBlocks(updatedBlocks)
  }

  const deleteBlocksHandler = ( currentBlock: editableBlock ) => {
    console.log(currentBlock)
  }
  
  return (
    <div className="Page">
      {blocks.map((block, key) => {
        return (
          <EditableBlock
            key={key}
            _id={block.id}
            _tag={block.tag} 
            _html={block.html}
            updatePage={updatePageHandler}
            addBlock={addBlocksHandler}
            deleteBlock={deleteBlocksHandler}

          />
        );
      })}
    </div>
    //<div> 1</div>
 
  )
}

export default EditablePage