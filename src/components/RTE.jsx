import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
import conf from '../conf/conf'
const RTE = ({name,control,label,defaultValue=""}) => { //control pass on info to whom they call it
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

      <Controller
        name={name|| "content"}
        control={control}
        render={({field:{onChange}})=>(
            <Editor
            apiKey={conf.appwriteAPIID}
            initialValue={defaultValue}
            init={{
                initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                    "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "anchor",
                ],
                toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
            onEditorChange={onChange}
            />
        )}
      />
    </div>
  )
}

export default RTE


// import React, { useRef,useState } from 'react'
// import JoditEditor from 'jodit-react'
// import { Controller } from 'react-hook-form'
// import conf from '../conf/conf'
// const RTE = ({name,control,label,defaultValue=""}) => { //control pass on info to whom they call it
//   const editor=useRef(null)
//   const [content, setcontent] = useState('')
//   return (
//     <div className='w-full'>
//       {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
//       <JoditEditor 
//         control={control}
//         ref={editor}
//         value={content}
//         onChange={newContent=>setcontent(newContent)}
//       />
//     </div>
//   )
// }

// export default RTE