// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import React, { useContext, useEffect, useState } from 'react'
// import RichTextEditor from '../RichTextEditor'
// import { ResumeInfoContext } from '@/context/ResumeInfoContext'
// import { useParams } from 'react-router-dom'
// import GlobalApi from './../../../../../service/GlobalApi'
// import { toast } from 'sonner'
// import { LoaderCircle } from 'lucide-react'

// const formField={
//     title:'',
//     companyName:'',
//     city:'',
//     state:'',
//     startDate:'',
//     endDate:'',
//     workSummery:'',

// }
// function Experience() {
//     const [experinceList,setExperinceList]=useState([formField]);
//     const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
//     // const params=useParams();
//     const {resumeId} = useParams();
//     const [loading,setLoading]=useState(false);

//     useEffect(()=>{
//         resumeInfo?.Experience&&Experience.length>0&&setExperinceList(resumeInfo?.Experience)
        
//     },[])

//     const handleChange=(index,event)=>{
//         const newEntries=experinceList.slice();
//         const {name,value}=event.target;
//         newEntries[index][name]=value;
//         // console.log(newEntries)
//         setExperinceList(newEntries);
//     }

//     const AddNewExperience=()=>{
    
//         setExperinceList([...experinceList,{
//             title:'',
//             companyName:'',
//             city:'',
//             state:'',
//             startDate:'',
//             endDate:'',
//             workSummery:'',
//         }])
//     }

//     const RemoveExperience=()=>{
//         setExperinceList(experinceList=>experinceList.slice(0,-1))
//     }

//     // const handleRichTextEditor=(e,name,index)=>{
//     //     const newEntries=experinceList.slice();
//     //     newEntries[index][name]=e.target.value;
       
//     //     setExperinceList(newEntries);
//     // }

//     const handleRichTextEditor = (value, name, index) => {
//         const newEntries = [...experinceList];
//         newEntries[index][name] = value; // ✅ value should be a string
//         setExperinceList(newEntries);
//     };
    
    

//     useEffect(()=>{
//         setResumeInfo({
//             ...resumeInfo,
//             Experience:experinceList
//         });
     
//     },[experinceList]);


//     const onSave=()=>{
//         setLoading(true)
//         const data={
//             data:{
//                 Experience:experinceList.map(({ id, ...rest }) => rest)
//             }
//         }

//         //  console.log(experinceList)

//         // GlobalApi.UpdateResumeDetail(params?.resumeId,data).then(res=>{
//          GlobalApi.UpdateResumeDetail(resumeId,data).then(res=>{
//             console.log(resumeId);
//             setLoading(false);
//             toast('Details updated !')
//         },(error)=>{
//             setLoading(false);
//             console.log(resumeId)
//             console.log(error)
//         })

//     }
//   return (
//     <div>
//         <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
//         <h2 className='font-bold text-lg'>Professional Experience</h2>
//         <p>Add Your previous Job experience</p>
//         <div>
//             {experinceList.map((item,index)=>(
//                 <div key={index}>
//                     <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
//                         <div>
//                             <label className='text-xs'>Position Title</label>
//                             <Input name="title" 
//                             onChange={(event)=>handleChange(index,event)}
//                             defaultValue={item?.title}
//                             />
//                         </div>
//                         <div>
//                             <label className='text-xs'>Company Name</label>
//                             <Input name="companyName" 
//                             onChange={(event)=>handleChange(index,event)}
//                             defaultValue={item?.companyName} />
//                         </div>
//                         <div>
//                             <label className='text-xs'>City</label>
//                             <Input name="city" 
//                             onChange={(event)=>handleChange(index,event)} 
//                             defaultValue={item?.city}/>
//                         </div>
//                         <div>
//                             <label className='text-xs'>State</label>
//                             <Input name="state" 
//                             onChange={(event)=>handleChange(index,event)}
//                             defaultValue={item?.state}
//                              />
//                         </div>
//                         <div>
//                             <label className='text-xs'>Start Date</label>
//                             <Input type="date"  
//                             name="startDate" 
//                             onChange={(event)=>handleChange(index,event)} 
//                             defaultValue={item?.startDate}/>
//                         </div>
//                         <div>
//                             <label className='text-xs'>End Date</label>
//                             <Input type="date" name="endDate" 
//                             onChange={(event)=>handleChange(index,event)} 
//                             defaultValue={item?.endDate}
//                             />
//                         </div>
//                         <div className='col-span-2'>
//                            {/* Work Summery  */}
                           
//                            <RichTextEditor
//                            index={index}
//                            defaultValue={item?.workSummery}
//                            onRichTextEditorChange={(event)=>handleRichTextEditor(event,'workSummery',index)}  />
  
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//         <div className='flex justify-between'>
//             <div className='flex gap-2'>
//             <Button variant="outline" onClick={AddNewExperience} className="text-primary"> + Add More Experience</Button>
//             <Button variant="outline" onClick={RemoveExperience} className="text-primary"> - Remove</Button>

//             </div>
//             <Button disabled={loading} onClick={()=>onSave()}>
//             {loading?<LoaderCircle className='animate-spin' />:'Save'}    
//             </Button>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Experience




//-------------------------------------------------------------------------

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import React, { useContext, useEffect, useState } from 'react';
// import RichTextEditor from '../RichTextEditor';
// import { ResumeInfoContext } from '@/context/ResumeInfoContext';
// import { useParams } from 'react-router-dom';
// import GlobalApi from './../../../../../service/GlobalApi';
// import { toast } from 'sonner';
// import { LoaderCircle } from 'lucide-react';

// const formField = {
//   title: '',
//   companyName: '',
//   city: '',
//   state: '',
//   startDate: '',
//   endDate: '',
//   workSummery: '',
// };

// function Experience() {
//   const [experinceList, setExperinceList] = useState([formField]);
//   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
//   const { resumeId } = useParams();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (resumeInfo?.Experience?.length > 0) {
//       setExperinceList(resumeInfo.Experience);
//     }
//   }, []);

//   const handleChange = (index, event) => {
//     const newEntries = [...experinceList];
//     const { name, value } = event.target;
//     newEntries[index][name] = value;
//     setExperinceList(newEntries);
//   };

//   const handleRichTextEditor = (value, name, index) => {
//     const newEntries = [...experinceList];
//     newEntries[index][name] = value; // Ensure value is a string
//     setExperinceList(newEntries);
//   };

//   const AddNewExperience = () => {
//     setExperinceList([...experinceList, { ...formField }]);
//   };

//   const RemoveExperience = () => {
//     if (experinceList.length > 1) {
//       setExperinceList((prev) => prev.slice(0, -1));
//     }
//   };

//   useEffect(() => {
//     setResumeInfo({
//       ...resumeInfo,
//       Experience: experinceList,
//     });
//   }, [experinceList]);

//   const onSave = () => {
//     setLoading(true);
//     const cleanedExperience = experinceList.map(({ id, ...rest }) => ({
//       ...rest,
//       workSummery: typeof rest.workSummery === 'string' ? rest.workSummery : '', // just in case
//     }));

//     const data = {
//       data: {
//         Experience: cleanedExperience,
//       },
//     };

//     GlobalApi.UpdateResumeDetail(resumeId, data).then(
//       (res) => {
//         setLoading(false);
//         toast('Details updated!');
//       },
//       (error) => {
//         setLoading(false);
//         console.error('Update failed:', error);
//         toast.error('Something went wrong while saving!');
//       }
//     );
//   };

//   return (
//     <div>
//       <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
//         <h2 className="font-bold text-lg">Professional Experience</h2>
//         <p>Add Your previous Job experience</p>
//         <div>
//           {experinceList.map((item, index) => (
//             <div key={index}>
//               <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
//                 <div>
//                   <label className="text-xs">Position Title</label>
//                   <Input
//                     name="title"
//                     onChange={(event) => handleChange(index, event)}
//                     value={item.title}
//                   />
//                 </div>
//                 <div>
//                   <label className="text-xs">Company Name</label>
//                   <Input
//                     name="companyName"
//                     onChange={(event) => handleChange(index, event)}
//                     value={item.companyName}
//                   />
//                 </div>
//                 <div>
//                   <label className="text-xs">City</label>
//                   <Input
//                     name="city"
//                     onChange={(event) => handleChange(index, event)}
//                     value={item.city}
//                   />
//                 </div>
//                 <div>
//                   <label className="text-xs">State</label>
//                   <Input
//                     name="state"
//                     onChange={(event) => handleChange(index, event)}
//                     value={item.state}
//                   />
//                 </div>
//                 <div>
//                   <label className="text-xs">Start Date</label>
//                   <Input
//                     type="date"
//                     name="startDate"
//                     onChange={(event) => handleChange(index, event)}
//                     value={item.startDate}
//                   />
//                 </div>
//                 <div>
//                   <label className="text-xs">End Date</label>
//                   <Input
//                     type="date"
//                     name="endDate"
//                     onChange={(event) => handleChange(index, event)}
//                     value={item.endDate}
//                   />
//                 </div>
//                 <div className="col-span-2">
//                   <RichTextEditor
//                     index={index}
//                     defaultValue={item.workSummery}
//                     onRichTextEditorChange={(value) =>
//                       handleRichTextEditor(value, 'workSummery', index)
//                     }
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-between">
//           <div className="flex gap-2">
//             <Button variant="outline" onClick={AddNewExperience} className="text-primary">
//               + Add More Experience
//             </Button>
//             <Button variant="outline" onClick={RemoveExperience} className="text-primary">
//               - Remove
//             </Button>
//           </div>
//           <Button disabled={loading} onClick={onSave}>
//             {loading ? <LoaderCircle className="animate-spin" /> : 'Save'}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experience;




//------------------------


import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useContext, useEffect, useState } from 'react';
import RichTextEditor from '../RichTextEditor';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../../service/GlobalApi';
import { toast } from 'sonner';
import { LoaderCircle } from 'lucide-react';

const formField = {
  title: '',
  companyName: '',
  city: '',
  state: '',
  startDate: '',
  endDate: '',
  workSummery: '',
};

function Experience() {
  const [experinceList, setExperinceList] = useState([formField]);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const { resumeId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(' set Experienlist -- resumeInfo:', resumeInfo);
    if (resumeInfo?.experience?.length > 0) {
      setExperinceList(resumeInfo.experience);
    }
  }, []);

  const handleChange = (index, event) => {
    const newEntries = [...experinceList];
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setExperinceList(newEntries);
  };

  const handleRichTextEditor = (value, name, index) => {
    const newEntries = [...experinceList];
    newEntries[index][name] = value; // Ensure value is a string
    setExperinceList(newEntries);
  };

  const AddNewExperience = () => {
    setExperinceList([...experinceList, { ...formField }]);
  };

  const RemoveExperience = () => {
    if (experinceList.length > 1) {
      setExperinceList((prev) => prev.slice(0, -1));
    }
  };

  useEffect(() => {
    console.log(' before --resumeInfo:', resumeInfo);
    setResumeInfo({
      ...resumeInfo,
      experience: experinceList,
    });
    console.log('after -- resumeInfo:', resumeInfo);
  }, [experinceList]);

  const onSave = () => {
    setLoading(true);
    const cleanedExperience = experinceList.map(({ id, ...rest }) => ({
      ...rest,
      workSummery: typeof rest.workSummery === 'string' ? rest.workSummery : '', // just in case
    }));

    const data = {
      data: {
        experience: experinceList.map(({ id, ...rest }) => ({
          ...rest,
          workSummery: typeof rest.workSummery === 'string' ? rest.workSummery : '',
        })),
      },
    };
    
    console.log("DATA SENT TO BACKEND:", JSON.stringify(data, null, 2));
    console.log("resumeId ",resumeId);

    GlobalApi.UpdateResumeDetail(resumeId, data).then(
      (res) => {
        setLoading(false);
        toast('Details updated!');
      },
      (error) => {
        setLoading(false);
        console.error('Update failed:', error);
        toast.error('Something went wrong while saving!');
      }
    );
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Professional Experience</h2>
        <p>Add Your previous Job experience</p>
        <div>
          {experinceList.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                <div>
                  <label className="text-xs">Position Title</label>
                  <Input
                    name="title"
                    onChange={(event) => handleChange(index, event)}
                    value={item.title}
                  />
                </div>
                <div>
                  <label className="text-xs">Company Name</label>
                  <Input
                    name="companyName"
                    onChange={(event) => handleChange(index, event)}
                    value={item.companyName}
                  />
                </div>
                <div>
                  <label className="text-xs">City</label>
                  <Input
                    name="city"
                    onChange={(event) => handleChange(index, event)}
                    value={item.city}
                  />
                </div>
                <div>
                  <label className="text-xs">State</label>
                  <Input
                    name="state"
                    onChange={(event) => handleChange(index, event)}
                    value={item.state}
                  />
                </div>
                <div>
                  <label className="text-xs">Start Date</label>
                  <Input
                    type="date"
                    name="startDate"
                    onChange={(event) => handleChange(index, event)}
                    value={item.startDate}
                  />
                </div>
                <div>
                  <label className="text-xs">End Date</label>
                  <Input
                    type="date"
                    name="endDate"
                    onChange={(event) => handleChange(index, event)}
                    value={item.endDate}
                  />
                </div>
                <div className="col-span-2">
                  <RichTextEditor
                    index={index}
                    defaultValue={item.workSummery}
                    onRichTextEditorChange={(value) =>
                      handleRichTextEditor(value, 'workSummery', index)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button variant="outline" onClick={AddNewExperience} className="text-primary">
              + Add More Experience
            </Button>
            <Button variant="outline" onClick={RemoveExperience} className="text-primary">
              - Remove
            </Button>
          </div>
          <Button disabled={loading} onClick={onSave}>
            {loading ? <LoaderCircle className="animate-spin" /> : 'Save'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
