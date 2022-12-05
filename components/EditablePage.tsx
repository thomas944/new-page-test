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
  {
    id: 2,
    html: "I am a <strong>paragraph</strong>",
    tag: "p",
  },
  {
    id: 3,
    html: "/im",
    tag: "img",
  }
]


const EditablePage = () => {
  const [blocks, setBlocks] = useState([initialBlock])


  const updateBlocksHandler = ( updatedBlock: editableBlock ) => {
    const index = blocks.map((b) => b.id).indexOf(updatedBlock.id);
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
    setBlocks([...blocks, newBlock]);
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
            updateBlock={updateBlocksHandler}
            addBlock={addBlocksHandler}
            deleteBlock={deleteBlocksHandler}

          />
        );
      })}
    </div>
 
  )
}

export default EditablePage