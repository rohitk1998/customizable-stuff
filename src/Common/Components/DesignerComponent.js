import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import EditorComponent from "./EditorComponent"
import ProductTumbnail from "./ProductTumbnail";


function DesignerComponent() {
  const [editedImage, setEditedImage] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isActive, setIsActive] = useState(0);


  const handleImageEdit = (value )=> {
    setEditedImage(value)
  }

  const handleStateChange = ()=> {
    setIsClicked(true)

    setTimeout(() => {
      setIsClicked(false)
      console.log("editedImage dsadsa dadsadsada",editedImage);
    }, 5000);
    
  }

  return (
      <div className="w-[100%] grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 grid-cols-1">
        <div
          className="justify-center items-start flex-row
        w-[90%]
        mx-auto
        mt-[5%]
        shadow-lg
        overflow-[hidden]
        rounded-3xl
        grid 
        py-10
        grid-cols-2
        md:grid-cols-2
        border-[1px]
        "
        >
         <EditorComponent onSave={handleImageEdit} isClickedState={isClicked}/>
         <div className="
         w-[100%]
         grid
         grid-row-5
         justify-content-center
         items-center
         ">
          <div className="
          flex
          justify-content-start
          items-center
          w-[90%]
          mx-auto
          gap-5
          ">
          {
            [0,1].map((item,index)=> (
            <div style={{border: isActive == index ? "2px solid #D4D1E4" : "" , borderRadius:"18px", overflow:"hidden"}}>
               <ProductTumbnail />
              </div>
            ))
          }
          </div>
          <div className="w-[90%] mx-auto flex justify-center items-start flex-col mt-11">
          <h1 className="text-4xl font-semibold text-black group-hover:text-white">
            Watter-Bottle Milton ,Color Black , Thermal Secure 
          </h1>
          <h1 className="text-lg font-normal text-black group-hover:text-white mt-5">
            Price : $20
          </h1>
          </div>
          <div className="
          flex
          flex-row
          justify-start
          items-center
          w-[90%]
          mx-auto
          gap-5
          ">
          <h1 className="text-lg font-normal text-black group-hover:text-white">
            Ajay : Best Printings
          </h1>
          {/* <button className="
            w-[200px]
            h-[40px]
            bg-gray-100
            rounded-full
            p-2
          ">More Reviews</button> */}
          </div>
          <div className="
          flex
          flex-row
          justify-start
          items-center
          w-[90%]
          mx-auto
          gap-5
          mt-5
         ">
         <button className="
            w-[200px]
            h-[40px]
            bg-gray-100
            rounded-full
            p-2
          "
          onClick={handleStateChange}
          >Preview Item</button>
         </div>
         <div 
         className="flex
         flex-row
         justify-start
         items-center
         w-[90%]
         mx-auto
         gap-5
         mt-5"
         >
        
      {editedImage && (
        <div>
          <img 
           src={editedImage}
           alt="" 
           width={210}
           height={210}
           className="rounded-2xl shadow-2xl bg-gray-100"
           />
        </div>
      )}
         </div>
         </div>
        </div>
      </div>
  );
}

export default DesignerComponent;




