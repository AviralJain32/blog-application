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


// import React from 'react';
// import { Editor } from '@tinymce/tinymce-react';

// export default function App() {
//   return (
//     <Editor
//       apiKey='2gg44054d29ir1fe0a88vy0is1at0gd1a445hbufjadu4yp3'
//       init={{
//         plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
//         toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
//         tinycomments_mode: 'embedded',
//         tinycomments_author: 'Author name',
//         mergetags_list: [
//           { value: 'First.Name', title: 'First Name' },
//           { value: 'Email', title: 'Email' },
//         ],
//         ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
//       }}
//       initialValue="Welcome to TinyMCE!"
//     />
//   );
// }